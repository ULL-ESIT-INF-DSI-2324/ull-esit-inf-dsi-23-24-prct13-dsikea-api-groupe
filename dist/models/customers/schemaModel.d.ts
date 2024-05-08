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
import { Schema } from "mongoose";
import { CustomerDocumentInterface } from "./customerModel.js";
export declare const CustomerSchema: Schema<CustomerDocumentInterface, import("mongoose").Model<RawDocType, any, any, any, import("mongoose").IfAny<RawDocType, any, import("mongoose").Document<unknown, any, RawDocType> & import("mongoose").Require_id<RawDocType>>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("mongoose").ResolveTimestamps<import("mongoose").ObtainDocumentType<any, RawDocType, import("mongoose").ResolveSchemaOptions<TSchemaOptions>>, import("mongoose").ResolveSchemaOptions<TSchemaOptions>>, import("mongoose").IfAny<import("mongoose").FlatRecord<DocType>, any, TVirtuals & TInstanceMethods extends infer T ? T extends TVirtuals & TInstanceMethods ? T extends Record<string, never> ? import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<DocType>> & import("mongoose").Require_id<import("mongoose").FlatRecord<DocType>> : import("mongoose").IfAny<T, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<DocType>> & import("mongoose").Require_id<import("mongoose").FlatRecord<DocType>>, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<DocType>> & Omit<import("mongoose").Require_id<import("mongoose").FlatRecord<DocType>>, keyof T> & T> : never : never>>;
