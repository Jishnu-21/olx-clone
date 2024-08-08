import firebase from "firebase/compat/app";
import 'firebase/compat/storage'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD2UV-pav1fRvIOrilMZeCtPQodqhSmwI0",
  authDomain: "olx-react-f5389.firebaseapp.com",
  projectId: "olx-react-f5389",
  storageBucket: "olx-react-f5389.appspot.com",
  messagingSenderId: "354537224139",
  appId: "1:354537224139:web:4f2f770ab6280fa240284e"
};



export default firebase.initializeApp(firebaseConfig);
