import { initializeApp } from "firebase/app";
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  updateProfile, 
  signInWithEmailAndPassword, 
  signOut 
} from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCO4IGQQ1hSzNDD0TGougZGH6RI5qh55eE",
  authDomain: "olx-clone-ef156.firebaseapp.com",
  projectId: "olx-clone-ef156",
  storageBucket: "olx-clone-ef156.appspot.com", 
  messagingSenderId: "1071381959219",
  appId: "1:1071381959219:web:7e1c3001bf338de3cc4946",
  measurementId: "G-5E6W33951W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email,
      name
    });

    await updateProfile(user, { displayName: name });
    console.log("Signup successful:", user);
    return user
  } catch (error) {
    console.error("Signup Error:", error.message);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (error) {
    console.error("Login Error:", error.message);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error.message);
    alert(error)
  }
};

export { auth, db, login, signup, logout ,addDoc, collection };
