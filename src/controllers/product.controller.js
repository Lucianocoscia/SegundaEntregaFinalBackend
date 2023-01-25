// import { ProductMongoDao } from "../daos/productMongo.dao.js";
import { Product as productModel } from "../model/product.model.js";
import { Daos } from "../daos/index.js";
import { doc } from "firebase/firestore";

const Product = new Daos.ProductDao(productModel); // instanciamos la clase en el controller para poder realizar los metodos

const getAllProducts = async (req, res) => {
  try {
    const response = await Product.getAll();

    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

const createProduct = async (req, res) => {
  try {
    const { title, description, price, thumbnail, stock } = req.body;
    const newProduct = await Product.create({
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      stock: stock,
    });

    res.status(200).json({ status: "Created ", data: newProduct });
  } catch (error) {
    throw new Error("Error al crear un producto");
  }
};

const getByIdProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Product.getById(id);

    res.json({ status: "Founded", data: response });
  } catch (error) {
    throw new Error("Error al buscar un producto por id");
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, price } = req.body;

    const productUpdated = await Product.update({ title, price }, id);

    res.json({ status: "Updated", data: productUpdated });
  } catch (error) {
    throw new Error("Error al actualizar un producto por id ");
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Product.delete(id);

    res.json({ status: "Deleted", data: response });
  } catch (error) {
    throw new Error("Error al eliminar un producto por id ");
  }
};

export const productController = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getByIdProduct,
};
