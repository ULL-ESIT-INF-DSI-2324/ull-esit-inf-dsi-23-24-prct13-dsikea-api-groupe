import { Document } from "mongoose";

export interface CustomerDocumentInterface extends Document {
  id: string,
  dni: string,
  name: string,
  buys: string,
  money: number,
}