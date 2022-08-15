import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBjei7__cTK9NtCsNhheHoq99v-_4sjTzc",
    authDomain: "recordingapp-79607.firebaseapp.com",
    projectId: "recordingapp-79607",
    storageBucket: "recordingapp-79607.appspot.com",
    messagingSenderId: "764278937840",
    appId: "1:764278937840:web:33140ded2650efec2b8a35",
    measurementId: "G-KNNQFV5H8S"
  };

 // Initialize Firebase 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);

export {auth};
  
