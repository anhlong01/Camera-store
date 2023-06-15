import { db } from "../firebase-config";

import {
    collection,
    getDocs,
    // getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from "firebase/firestore";

const productCollectionRef = collection(db, "products");
class productDataService {
    addProduct = (newProduct) =>{
        return addDoc(productCollectionRef, newProduct);
    };

    updateProduct = (id, updatedProduct) =>{
        const productDoc = doc(db, "products", id);
        return updateDoc(productDoc, updatedProduct);
    };

    deleteProduct = (id) =>{
        const productDoc = doc(db, "products", id);
        return deleteDoc(productDoc);
    };

    getAllProducts = () =>{
        return getDocs(productCollectionRef);
    }
};

export default productDataService;