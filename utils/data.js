import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Misael',
            email: 'admin@example.com',
            password: bcrypt.hashSync('12345678@'),
            isAdmin: true,
        },
        {
            name: 'Xcaret',
            email: 'xcaret@example.com',
            password: bcrypt.hashSync('12345678@'),
            isAdmin: false,
        },
    ],
    products: [
        { name: "Mustang", slug: "car1", brand: "Ford", car_type: "Affordable", price_mxn: 869000 , price_usd: 34669.99, description_es: "Auto deportivo económico", description_en: "Affordable Sports Car", models: ["Red", "Black", "Gray"], countInStock: 5, image: '/images/mustang.jpeg'},
        { name: "Supra", slug: "car2", brand: "Toyota", car_type: "Luxury", price_mxn: 1074750, price_usd: 42990, description_es: "Auto deportivo de lujo", description_en: "Luxury Sports Car", models: [], countInStock: 3, image: '/images/supra.png'},
        { name: "MX-5", slug: "car3", brand: "Mazda", car_type: "Affordable", price_mxn: 405000 , price_usd: 16200, description_es: "Roadster dinámico", description_en: "Dynamic Roadster", models: ["Red", "White"], countInStock: 15, image: '/images/mx-5.jpeg'},
        { name: "Model S", slug: "car4", brand: "Tesla", car_type: "Luxury", price_mxn: 1825000 , price_usd: 72999.99, description_es: "Automovil eléctrico", description_en: "Electric Car", models: [], countInStock: 9, image: '/images/model-s.jpeg'},
        { name: "Corvette", slug: "car5", brand: "Chevrolet", car_type: "Luxury", price_mxn: 1704000, price_usd: 68160, description_es: "Auto deportivo", description_en: "Sports Car", models: ["Blue", "White"], countInStock: 5, image: '/images/corvette.jpeg'},
        { name: "911", slug: "car6", brand: "Porsche", car_type: "Luxury", price_mxn: 1918000, price_usd: 76720, description_es: "Auto deportivo de lujo", description_en: "Luxury Sports Car", models: [], countInStock: 4, image: '/images/911.png'},
        { name: "Z4", slug: "car7", brand: "BMW", car_type: "Affordable", price_mxn: 9000000, price_usd: 36000, description_es: "Auto deportivo económico", description_en: "Affordable Sports Car", models: ["Black", "Green"], countInStock: 2, image: '/images/z4.jpeg'},
        { name: "Camaro", slug: "car8", brand: "Chevrolet", car_type: "Affordable", price_mxn: 700000, price_usd: 28000, description_es: "Auto deportivo económico", description_en: "Affordable Sports Car", models: ["Blue", "White"], countInStock: 2, image: '/images/camaro.png'},
        { name: "WRX", slug: "car9", brand: "Subaru", car_type: "Affordable", price_mxn: 600000, price_usd: 23999, description_es: "Auto deportivo económico", description_en: "Affordable Sports Car", models: [], countInStock: 12, image: '/images/wrx.jpeg'},
    ],
};

export default data;