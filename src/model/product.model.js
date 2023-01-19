// estan definidos los recursos de la base de datos
import { Schema, model } from "mongoose";

// const idGeneratorProduct = Math.random().toString(30).substring(2);

const productSchema = new Schema({
  // id: { type: String, default: idGeneratorProduct },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  description: { type: String, required: true },
  stock: { type: Number, required: true },
});

export const Product = model("product", productSchema);
