import { initializeApp } from "firebase/app";
import { /* addDoc, */ collection, doc, getDoc, getFirestore } from "firebase/firestore";
import "firebase/compat/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxlpblRm0oAYt9aZBFw4Xfjm_RWQaQQ6o",
  authDomain: "emi-pasteleria.firebaseapp.com",
  projectId: "emi-pasteleria",
  storageBucket: "emi-pasteleria.appspot.com",
  messagingSenderId: "1057942862478",
  appId: "1:1057942862478:web:47bc6c67f7e4cf397267df"
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

 // Obtener id para la orden de compra
/*  const addOrder = async (order) => {
  const docSnap = await addDoc(collection(db, "orders"), order)
  return docSnap.id
}   */

export {
  db,
  getItemsById,
/*   addOrder */

}
