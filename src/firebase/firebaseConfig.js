import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import "firebase/compat/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// Obtener data por ID
const getItemsById = async (id) => {
  const docRef = doc(collection(db, "products"), id)
  const docSnap = await getDoc(docRef)
  return docSnap.data()
}

/* // Obtener id para la orden de compra
const addOrder = async (order) => {
  const docSnap = await addDoc(collection(db, "orders"), order)
  return docSnap.id
} */

export {
  db,
  getItemsById
}
