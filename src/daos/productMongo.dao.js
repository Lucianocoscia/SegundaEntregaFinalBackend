import { MongoDao } from "./mongo.dao.js";
import { Product } from "../model/product.model.js";

// cramos una subclase q se extiende de la principal
export class ProductMongoDao extends MongoDao {
  constructor() {
    super(Product);
  }
}
