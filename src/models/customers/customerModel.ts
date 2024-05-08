import { Document } from "mongoose";

export interface CustomerDocumentInterface extends Document {
  id: string,
  name: string,
  buys: string,
  money: string,
}