import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';

export default function ShippingScreen() {
    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue,
    } = useForm();

    const { state, dispatch } = useContext(Store);
    const { cart } = state;
    const { shippingAddress } = cart;
    const router = useRouter();

    useEffect(() => {
        setValue('fullName', "Misael Lopez");
        setValue('address', "Cale y Número");
        setValue('city', "Playa del Carmen");
        setValue('postalCode', "77714");
        setValue('country', "México");
    }, [setValue, shippingAddress]);

    const submitHandler = ({ fullName, address, city, postalCode, country }) => {
        dispatch({
            type: 'SAVE_SHIPPING_ADDRESS',
            payload: { fullName, address, city, postalCode, country },
        });
        Cookies.set(
            'cart',
            JSON.stringify({
                ...cart,
                shippingAddress: {
                    fullName,
                    address,
                    city,
                    postalCode,
                    country,
                },
            })
        );

        router.push('/payment');
    };

    return (
        <Layout title="Dirección">
            <CheckoutWizard activeStep={1} />
            <form
                className="mx-auto max-w-screen-md"
                onSubmit={handleSubmit(submitHandler)}
            >
                <h1 className="mb-4 text-xl">Dirección</h1>
                <div className="mb-4">
                    <label htmlFor="fullName">Nombre Completo</label>
                    <input
                        className="w-full"
                        id="fullName"
                        autoFocus
                        {...register('fullName', {
                            required: 'Ingresa tu nombre completo',
                        })}
                    />
                    {errors.fullName && (
                        <div className="text-red-500">{errors.fullName.message}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="address">Calle y Número</label>
                    <input
                        className="w-full"
                        id="address"
                        {...register('address', {
                            required: 'Ingresa calle y número',
                            minLength: { value: 3, message: 'Debe de contener más de 2 caracteres' },
                        })}
                    />
                    {errors.address && (
                        <div className="text-red-500">{errors.address.message}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="city">Ciudad</label>
                    <input
                        className="w-full"
                        id="city"
                        {...register('city', {
                            required: 'Ingresa la ciudad',
                        })}
                    />
                    {errors.city && (
                        <div className="text-red-500 ">{errors.city.message}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="postalCode">Código Postal</label>
                    <input
                        className="w-full"
                        id="postalCode"
                        {...register('postalCode', {
                            required: 'Ingresa el código postal',
                        })}
                    />
                    {errors.postalCode && (
                        <div className="text-red-500 ">{errors.postalCode.message}</div>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="country">País</label>
                    <input
                        className="w-full"
                        id="country"
                        {...register('country', {
                            required: 'Ingresa el país',
                        })}
                    />
                    {errors.country && (
                        <div className="text-red-500 ">{errors.country.message}</div>
                    )}
                </div>
                <div className="mb-4 flex justify-between">
                    <button className="primary-button">Siguiente</button>
                </div>
            </form>
        </Layout>
    );
}

ShippingScreen.auth = true;