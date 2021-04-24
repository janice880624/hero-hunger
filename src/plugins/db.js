import Vue from "vue";

import { rtdbPlugin } from "vuefire";

import firebase from "firebase/app";
import "firebase/database";

Vue.use(rtdbPlugin);

const firebaseConfig = {
  apiKey: "AIzaSyCML2Le3-wZzzq4c9bui6rr1AdnJ2SmKXY",
  authDomain: "zero-hunger-38929.firebaseapp.com",
  databaseURL: "https://zero-hunger-38929-default-rtdb.firebaseio.com",
  projectId: "zero-hunger-38929",
  storageBucket: "zero-hunger-38929.appspot.com",
  messagingSenderId: "198860427844",
  appId: "1:198860427844:web:9c351f86c74382d8e16211"
};

export const db = firebase.initializeApp(firebaseConfig).database();
