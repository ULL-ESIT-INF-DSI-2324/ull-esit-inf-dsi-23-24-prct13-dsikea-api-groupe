import { Schema, model } from 'mongoose';
export const FurnitureSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    size: {
        type: String,
        required: false,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    stock: {
        type: Number,
        required: true,
        trim: true,
        validate: (value) => {
            if (value < 0) {
                throw new Error('You need to stablish a correct sotck value.');
            }
        }
    },
    serialNumber: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
});
export const Furnitures = model('Furniture', FurnitureSchema);
