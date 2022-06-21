import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0bb4d485ajc-FZE7oL8tJW-vlTmFNLAM",
  authDomain: "clothing-db-a5b48.firebaseapp.com",
  projectId: "clothing-db-a5b48",
  storageBucket: "clothing-db-a5b48.appspot.com",
  messagingSenderId: "290385816758",
  appId: "1:290385816758:web:19bf6e93e1a27a3bbc0a17"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();

// =============================================
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

/* export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider); */
// =============================================

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });

    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}