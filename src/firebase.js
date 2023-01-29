import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDEj6JCS0s3PgoJQ4CLzz5Cm_H_QUEZDcc",
  authDomain: "vuestore-6150f.firebaseapp.com",
  projectId: "vuestore-6150f",
  storageBucket: "vuestore-6150f.appspot.com",
  messagingSenderId: "736786069120",
  appId: "1:736786069120:web:9d6598df367146383b9865"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(firebaseApp);