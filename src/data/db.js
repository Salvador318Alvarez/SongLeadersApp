import {initializeApp} from 'firebase/app'
import {
    getFirestore, collection //onSnapshot, //before realtime getDocs
    // addDoc, deleteDoc, doc,
    // query, where,
    // orderBy, serverTimestamp,
    // getDoc, updateDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8A0By_GhUAvUl6ZxmtcBVweiOZogz--U",
    authDomain: "songs-318.firebaseapp.com",
    projectId: "songs-318",
    storageBucket: "songs-318.appspot.com",
    messagingSenderId: "668589835018",
    appId: "1:668589835018:web:0e16cd6d73fadd4292f0f3"
  };
//init firebase app  
initializeApp(firebaseConfig)

//init services
const db = getFirestore()
const colRef = collection(db, 'songsList')


export {db, colRef};
