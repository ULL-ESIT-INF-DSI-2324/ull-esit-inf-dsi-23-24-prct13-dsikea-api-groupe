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
export interface FurnitureDocumentInterface extends Document {
    id: string;
    name: string;
    description: string;
    size: string;
    price: number;
    stock: number;
    serialNumber: string;
}
export declare const FurnitureSchema: Schema<FurnitureDocumentInterface, import("mongoose").Model<FurnitureDocumentInterface, any, any, any, Document<unknown, any, FurnitureDocumentInterface> & FurnitureDocumentInterface & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FurnitureDocumentInterface, Document<unknown, {}, import("mongoose").FlatRecord<FurnitureDocumentInterface>> & import("mongoose").FlatRecord<FurnitureDocumentInterface> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const Furnitures: import("mongoose").Model<FurnitureDocumentInterface, {}, {}, {}, Document<unknown, {}, FurnitureDocumentInterface> & FurnitureDocumentInterface & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
