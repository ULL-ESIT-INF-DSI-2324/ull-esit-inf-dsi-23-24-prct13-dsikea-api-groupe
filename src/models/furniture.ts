import { model } from 'mongoose';
import { FurnitureSchema } from './schema.js';
import { FurnitureDocumentInterface } from './model.js';

export const Furniture = model<FurnitureDocumentInterface>('Furniture', FurnitureSchema);