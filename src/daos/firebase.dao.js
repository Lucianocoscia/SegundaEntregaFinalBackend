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
      querySnapshotResponse.forEach((doc) => {
        return console.log(doc.data(), " succes");
      });
      /* const querySnapshot = await getDocs(collection(db, "cities"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        }); */
    } catch (err) {
      throw new Error(" Error gettin resources");
    }
  }

  async getById(id) {
    try {
      const docRef = doc(this.db, this.collection, id);
      const docSnap = await getDoc(docRef);
      return console.log(docSnap.data(), ` item founded`);
    } catch (err) {
      throw new Error(" Error gettin resources");
    }
  }

  async create(resource) {
    try {
      const response = await addDoc(
        collection(this.db, this.collection),
        resource
      );
      return console.log(response, "created");
    } catch (err) {
      throw new Error(" Error gettin resources");
    }
  }

  async update(resource, id) {
    try {
      const toUpdate = doc(this.db, this.collection, id);
      const updated = await updateDoc(toUpdate, resource);

      return console.log(
        updated,
        `${resource} updated from ${this.collection}`
      );
    } catch (err) {
      throw new Error(" Error gettin resources");
    }
  }

  async delete(id) {
    try {
      const toDelete = await deleteDoc(doc(this.db, this.collection, id));
      return console.log(toDelete, `item with ${id} deleted`);
    } catch (err) {
      throw new Error(" Error gettin resources");
    }
  }
}
