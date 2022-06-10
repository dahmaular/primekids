import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBoamYBOKg5YuMwlBfBwgsIdCBqggFw8uA",
  authDomain: "flickerrestaurant.firebaseapp.com",
  projectId: "flickerrestaurant",
  storageBucket: "flickerrestaurant.appspot.com",
  messagingSenderId: "205898026008",
  appId: "1:205898026008:web:590937b3a7fff58a93c76d"
};

export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
