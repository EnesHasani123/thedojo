import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB9SggDrrSM7guq2ArvasiD7xo244e_1nM",
  authDomain: "thedojoproject-2182b.firebaseapp.com",
  projectId: "thedojoproject-2182b",
  storageBucket: "thedojoproject-2182b.appspot.com",
  messagingSenderId: "616811577986",
  appId: "1:616811577986:web:7b104c4240870df549aa9b",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
