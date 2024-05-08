import { model } from 'mongoose';
import { CustomerSchema } from './schemaModel.js';
import { CustomerDocumentInterface } from './customerModel.js';

export const Customer = model<CustomerDocumentInterface>('Customer', CustomerSchema);