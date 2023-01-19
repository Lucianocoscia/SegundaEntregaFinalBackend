import { Cart as cartModel } from "../model/cart.model.js";
import { Daos } from "../daos/index.js";

const Cart = new Daos.CartDao(cartModel);

const getAllCarts = async (req, res) => {
  try {
    const response = await Cart.getAll();
    res.json({ status: "success", data: response });
  } catch (error) {
    throw new Error("Error al listar todos los carts");
  }
};

const createCart = async (req, res) => {
  try {
    const newCart = await Cart.create();
    res.json({ status: "Created", data: newCart });
  } catch (error) {
    throw new Error("Error al listar todos los carts");
  }
};

const getByIdCart = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Cart.getById(id);

    res.json({ status: "Founded", data: response });
  } catch (error) {
    throw new Error("Error al buscar el cart");
  }
};

const updateCart = async (req, res) => {
  try {
    const { id } = req.params;

    const { products } = req.body;

    const cartToUpdate = await Cart.update({ products }, id);

    res.json({ status: "Updated", data: cartToUpdate });
  } catch (error) {
    throw new Error("Error al actualizar el cart");
  }
};

const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Cart.delete(id);
    res.json({ status: "Deleted", data: response });
  } catch (error) {
    throw new Error("Error al eliminar el cart");
  }
};

export const cartController = {
  getAllCarts,
  createCart,
  updateCart,
  deleteCart,
  getByIdCart,
};
