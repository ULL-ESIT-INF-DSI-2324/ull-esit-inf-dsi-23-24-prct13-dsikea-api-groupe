import { model } from 'mongoose';
import { FurnitureSchema } from './schema.js';
export const Furniture = model('Furniture', FurnitureSchema);
