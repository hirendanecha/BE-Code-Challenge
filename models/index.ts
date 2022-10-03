
import mongoose, { Model } from "mongoose";
import userModel, { IUser } from "./user.model";
import productModel, { IProduct } from "./product.model";

interface Idb {
    mongoose: any,
    url: String | undefined,
    products: Model<IProduct>,
    users: Model<IUser>,
}

const db: Idb = {
    mongoose: mongoose,
    url: process.env.DATABASE_URI,
    products: productModel,
    users: userModel
};

export default db;
// module.exports = db;