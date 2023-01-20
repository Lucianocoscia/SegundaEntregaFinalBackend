import { FirebaseDao } from "./firebase.dao.js";

// cramos una subclase q se extiende de la principal
export class ProductFirebaseDao extends FirebaseDao {
  constructor() {
    super("Product");
  }
}
