import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        brand: { type: String, required: true },
        car_type: { type: String, required: true },
        price_mxn: { type: Number, required: true },
        price_usd: { type: Number, required: true },
        description_es: { type: String, required: true },
        description_en: { type: String, required: true },
        models: {type: Array, required: false},
        countInStock: { type: Number, required: true, default: 0 },
        image: { type: String, required: true },
        
    },
    {
        timestamps: true,
    }
);

const Product =
    mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;