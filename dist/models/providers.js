import { Schema, model } from 'mongoose';
export const ProviderSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    cif: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate: (value) => {
            if (!value.match(/[A-Z]$/) || value.length != 9) {
                throw new Error('Provider CIF must end with a capital letter');
            }
        }
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    surname: {
        type: String,
        required: true,
        trim: true,
    },
    direction: {
        type: String,
        required: false,
        trim: true,
    },
    number: {
        type: String,
        required: true,
        trim: true,
        validate: (value) => {
            if (/[a-zA-Z]/.test(value) || value.length != 9) {
                throw new Error('Provider number must dont have letters or lenth must be 9');
            }
        }
    },
});
export const Providers = model('Provider', ProviderSchema);
