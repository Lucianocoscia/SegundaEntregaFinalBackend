import { config } from "../config/config.js";
import { ProductMongoDao } from "./productMongo.dao.js";
import { CartMongoDao } from "./cartMongo.dao.js";

let ProductDao;
let CartDao;

if (config.database === "MONGO") {
  ProductDao = ProductMongoDao;
  CartDao = CartMongoDao;
} else {
  // ProductDao = ProductFirebaseDao;
  // CartDao = CartFirebaseDao;
}

export const Daos = { ProductDao, CartDao };
