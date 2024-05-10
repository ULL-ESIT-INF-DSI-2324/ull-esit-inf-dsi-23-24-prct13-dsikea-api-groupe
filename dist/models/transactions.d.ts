/// <reference types="mongoose/types/aggregate.js" />
/// <reference types="mongoose/types/callback.js" />
/// <reference types="mongoose/types/collection.js" />
/// <reference types="mongoose/types/connection.js" />
/// <reference types="mongoose/types/cursor.js" />
/// <reference types="mongoose/types/document.js" />
/// <reference types="mongoose/types/error.js" />
/// <reference types="mongoose/types/expressions.js" />
/// <reference types="mongoose/types/helpers.js" />
/// <reference types="mongoose/types/middlewares.js" />
/// <reference types="mongoose/types/indexes.js" />
/// <reference types="mongoose/types/models.js" />
/// <reference types="mongoose/types/mongooseoptions.js" />
/// <reference types="mongoose/types/pipelinestage.js" />
/// <reference types="mongoose/types/populate.js" />
/// <reference types="mongoose/types/query.js" />
/// <reference types="mongoose/types/schemaoptions.js" />
/// <reference types="mongoose/types/schematypes.js" />
/// <reference types="mongoose/types/session.js" />
/// <reference types="mongoose/types/types.js" />
/// <reference types="mongoose/types/utility.js" />
/// <reference types="mongoose/types/validation.js" />
/// <reference types="mongoose/types/virtuals.js" />
/// <reference types="mongoose/types/inferschematype.js" />
import { Schema, Document } from "mongoose";
import { CustomerDocumentInterface, CustomerSchema } from "./customers.js";
import { ProviderDocumentInterface, ProviderSchema } from "./providers.js";
import { FurnitureSchema } from "./furnitures.js";
export interface TransactionDocumentInterface extends Document {
    humanId: CustomerDocumentInterface | ProviderDocumentInterface;
    type: string;
    furniture: typeof FurnitureSchema[];
    customer?: typeof CustomerSchema;
    provider?: typeof ProviderSchema;
    pay: number;
    time: Date;
}
export declare const TransactionSchema: Schema<TransactionDocumentInterface, import("mongoose").Model<TransactionDocumentInterface, any, any, any, Document<unknown, any, TransactionDocumentInterface> & TransactionDocumentInterface & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TransactionDocumentInterface, Document<unknown, {}, import("mongoose").FlatRecord<TransactionDocumentInterface>> & import("mongoose").FlatRecord<TransactionDocumentInterface> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const Transactions: import("mongoose").Model<TransactionDocumentInterface, {}, {}, {}, Document<unknown, {}, TransactionDocumentInterface> & TransactionDocumentInterface & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
