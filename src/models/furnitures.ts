import { Document, Schema, model } from 'mongoose';

export interface FurnitureDocumentInterface extends Document {
  id: string,
  name: string,
  description: string,
  size: string,
  price: number,
  stock: number,
  serialNumber: string,
}

export const FurnitureSchema = new Schema<FurnitureDocumentInterface>({
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
    required: false,
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
    validate: (value :number) => {
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

export const Furnitures = model<FurnitureDocumentInterface>('Furniture', FurnitureSchema);