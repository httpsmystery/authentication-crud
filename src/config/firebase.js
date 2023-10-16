import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

//Aqui vocês devem colocar as suas credenciais
const firebaseConfig = {
    apiKey: "AIzaSyCOkXQt86Lw_My9LeqePa6MSYIpz969wkg",
    authDomain: "hugoifal523.firebaseapp.com",
    projectId: "hugoifal523",
    storageBucket: "hugoifal523.appspot.com",
    messagingSenderId: "544977174535",
    appId: "1:544977174535:web:dd7e829d009194c8092aa2",
    measurementId: "G-74NRCKBKEQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
})

export { app, auth, db }