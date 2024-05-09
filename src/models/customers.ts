import { Document, Schema, model } from 'mongoose';

export interface CustomerDocumentInterface extends Document {
  id: string,
  dni: string,
  name: string,
  surname: string,
  direction: string,
  number: string,
}

export const CustomerSchema = new Schema<CustomerDocumentInterface>({
  id: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  dni: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: (value :string) => {
      if (!value.match(/[A-Z]$/) || value.length != 9) {
        throw new Error('Customer DNI must end with a capital letter');
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
    validate: (value :string) => {
      if (/[a-zA-Z]/.test(value) || value.length != 9) {
        throw new Error('Customer number must dont have letters');
      }
    }
  },
});

export const Customers = model<CustomerDocumentInterface>('Customer', CustomerSchema);