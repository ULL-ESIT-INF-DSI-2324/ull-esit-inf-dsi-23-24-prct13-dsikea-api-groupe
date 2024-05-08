import { model } from 'mongoose';
import { CustomerSchema } from './customerSchema.js';
import { CustomerDocumentInterface } from './customerModel.js';

export const Customers = model<CustomerDocumentInterface>('Customer', CustomerSchema);