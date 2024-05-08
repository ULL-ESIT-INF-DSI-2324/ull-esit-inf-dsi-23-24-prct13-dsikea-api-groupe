import { model } from 'mongoose';
import { CustomerSchema } from './customerSchema.js';
export const Customers = model('Customer', CustomerSchema);
