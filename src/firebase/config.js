import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
     apiKey: "AIzaSyAyIk-RD1s8nTJumj_zO9vQNXQLDXU2tsA",
     authDomain: "hop-web-25282.firebaseapp.com",
     projectId: "hop-web-25282",
     storageBucket: "hop-web-25282.appspot.com",
     messagingSenderId: "917942124177",
     appId: "1:917942124177:web:4e083a30e42df209a58930",
     measurementId: "G-YLNX4N9QH8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);