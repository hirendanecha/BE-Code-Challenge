import mongoose, { Schema, model, Document } from 'mongoose';

export interface IProduct extends Document {
  id: Number,
  title: String,
  quantity: Number,
  price: String
}

const ProductSchema: Schema = new Schema({
  id: { type: Number },
  title: { type: String },
  quantity: { type: Number },
  price: { type: String },
});

let productModel = mongoose.model<IProduct>('products', ProductSchema);

export default productModel;