import firebase from "firebase/app";
import { DB_CONFIG } from "./config/config";
import "firebase/database";

const app = firebase.initializeApp(DB_CONFIG);
const db = app
  .database()
  .ref()

export default db;