import { initializeApp, intializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey:"AIzaSyArsbCinCa8yNXzLUFvKVoe2IS81UliNHY",
    authDomain: "pfdumraufreact.firebaseapp.com",
    projectId: "pfdumraufreact",
    storageBucket: "pfdumraufreact.appspot.com",
    messagingSenderId: "235574539353",
    appId: "1:235574539353:web:0ee88955cb6b8df5dced48",
    
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)