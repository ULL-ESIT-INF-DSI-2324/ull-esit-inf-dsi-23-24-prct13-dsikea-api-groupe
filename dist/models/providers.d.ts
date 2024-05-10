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
import { Document, Schema } from 'mongoose';
export interface CustomerDocumentInterface extends Document {
    id: string;
    cif: string;
    name: string;
    surname: string;
    direction: string;
    number: string;
}
export declare const CustomerSchema: Schema<CustomerDocumentInterface, import("mongoose").Model<CustomerDocumentInterface, any, any, any, Document<unknown, any, CustomerDocumentInterface> & CustomerDocumentInterface & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CustomerDocumentInterface, Document<unknown, {}, import("mongoose").FlatRecord<CustomerDocumentInterface>> & import("mongoose").FlatRecord<CustomerDocumentInterface> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const Customers: import("mongoose").Model<CustomerDocumentInterface, {}, {}, {}, Document<unknown, {}, CustomerDocumentInterface> & CustomerDocumentInterface & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
