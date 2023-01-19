import { MongoDao } from "./mongo.dao.js";
import { Cart } from "../model/cart.model.js";

export class CartMongoDao extends MongoDao {
  constructor() {
    super(Cart);
  }
}
