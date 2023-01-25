import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  getDocs,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import { firebaseConfig } from "../db/db.js";
import { initializeApp } from "firebase/app";

export class FirebaseDao {
  constructor(collection) {
    this.collection = collection;
    this.dbConfig = firebaseConfig;
    this.db = getFirestore(initializeApp(this.dbConfig));
  }

  async getAll() {
    try {
      const querySnapshotResponse = await getDocs(
        collection(this.db, this.collection)
      );
      const array = [];
      querySnapshotResponse.forEach((doc) => {
        array.push(doc.data());
      });
      console.log(array, " success");
      return array;
    } catch (err) {
      return err;
    }
  }

  async getById(id) {
    try {
      const docRef = doc(this.db, this.collection, id);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data(), ` item founded`);
      return docSnap.data();
    } catch (err) {
      throw new Error(" Error gettin resources");
    }
  }

  async create(resource) {
    try {
      await addDoc(collection(this.db, this.collection), resource);
      console.log("created");
      return resource;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async update(resource, id) {
    try {
      const toUpdate = doc(this.db, this.collection, id);
      const productToUpdate = await getDoc(toUpdate);

      console.log(productToUpdate.data(), "este es el producto a actualizar");

      await updateDoc(toUpdate, resource);
      // console.log(response., "este es el producto actualizado");

      return productToUpdate.data(); // me tira el producto viejo y no el actualizado PREGUNTAR
    } catch (err) {
      throw new Error(" Error gettin resources");
    }
  }

  async delete(id) {
    try {
      await deleteDoc(doc(this.db, this.collection, id));
      console.log(`item with ${id} deleted`);
      return;
    } catch (err) {
      throw new Error(" Error gettin resources");
    }
  }
}
