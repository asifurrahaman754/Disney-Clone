import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCCXqYZc78LQG9DE_vSu7Qabnvb-LmYgBo",
  authDomain: "disney-clone-80183.firebaseapp.com",
  projectId: "disney-clone-80183",
  storageBucket: "disney-clone-80183.appspot.com",
  messagingSenderId: "930254950896",
  appId: "1:930254950896:web:1b81f72e7a42774a04cd35",
  measurementId: "G-JC56P4WTF5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
