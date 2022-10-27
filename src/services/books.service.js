import { db } from "../firebase-config.js";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,   //doc will check that we have doc in our collection or not
} from "firebase/firestore";

const bookClollectionRef=collection(db,"books");  //pass fireStore db and table name(collection name)

class BookDataService {
    addBooks=(newBookData)=>{
        return addDoc(bookClollectionRef,newBookData);   //pass above thing and add the new data
    }
    updateBook=(id,updateBookData)=>{
        const bookDoc=doc(db,"books",id);
        return updateDoc(bookDoc,updateBookData);
    }
    deleteBook=(id)=>{
        const bookDoc=doc(db,"books",id);
        return deleteDoc(bookDoc);
    }
    getAllBooks=()=>{
        return getDocs(bookClollectionRef);
    }
    getBook=(id)=>{
        const bookDoc=doc(db,"books",id);
        return getDoc(bookDoc);
    }


};

 
export default new BookDataService();
