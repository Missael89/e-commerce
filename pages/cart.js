import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { XCircleIcon } from '@heroicons/react/outline';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { toast } from 'react-toastify';

function CartScreen() {
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;
    const removeItemHandler = (item) => {
        dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
    };
    const updateCartHandler = async (item, qty) => {
        const quantity = Number(qty);
        const { data } = await axios.get(`/api/products/${item._id}`);
        if (data.countInStock < quantity) {
            return toast.error('Lo sentimos. El auto esta fuera de stock');
        }
        dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
        toast.success('El auto se agrego a tu carrito');
    };
    return (
        <Layout title="Carrito de Compra">
            <h1 className="mb-4 text-xl">Carrito de Compra</h1>
            {cartItems.length === 0 ? (
                <div>
                    Tu carrito esta vacío. <Link href="/">Ir al catálogo</Link>
                </div>
            ) : (
                <div className="grid md:grid-cols-4 md:gap-5">
                    <div className="overflow-x-auto md:col-span-3">
                        <table className="min-w-full ">
                            <thead className="border-b">
                                <tr>
                                    <th className="p-5 text-left">Auto</th>
                                    <th className="p-5 text-right">Cantidad</th>
                                    <th className="p-5 text-right">Precio</th>
                                    <th className="p-5">Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.slug} className="border-b">
                                        <td>
                                            <Link href={`/product/${item.slug}`}>
                                                <a className="flex items-center">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        width={50}
                                                        height={50}
                                                    ></Image>
                                                    &nbsp;
                                                    {item.name}
                                                </a>
                                            </Link>
                                        </td>
                                        <td className="p-5 text-right">
                                            <select
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    updateCartHandler(item, e.target.value)
                                                }
                                                disabled={true}
                                            >
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </td>
                                        <td className="p-5 text-right">${item.price_mxn}</td>
                                        <td className="p-5 text-center">
                                            <button onClick={() => removeItemHandler(item)}>
                                                <XCircleIcon className="h-5 w-5"></XCircleIcon>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="card p-5">
                        <ul>
                            <li>
                                <div className="pb-3 text-xl">
                                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                                    {cartItems.reduce((a, c) => a + c.quantity * c.price_mxn, 0)}
                                </div>
                            </li>
                            <li>
                                <button
                                    onClick={() => router.push('login?redirect=/shipping')}
                                    className="primary-button w-full"
                                >
                                    Ir a pagar
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </Layout>
    );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });