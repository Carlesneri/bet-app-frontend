import firebase from "firebase/app";
import { DB_CONFIG } from "./config/config";
import "firebase/database";

const app = firebase.initializeApp(DB_CONFIG);
const dbOP = app
  .database()
  .ref()
  .child("oddsportal");

export default dbOP;