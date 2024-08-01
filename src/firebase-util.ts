import { initializeApp } from "firebase/app";
import { initializeAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCTlZXO2HMCcBGeRxJodrfJ5UJOYY-bdyw",
  authDomain: "hemlata-khandal.firebaseapp.com",
  projectId: "hemlata-khandal",
  storageBucket: "hemlata-khandal.appspot.com",
  messagingSenderId: "307381468848",
  appId: "1:307381468848:web:65b695015d343c9fd70575",
  measurementId: "G-K8GTGZKY7J",
};

const enableFirebaseAnalytics = (): void => {
  const firebaseApp = initializeApp(firebaseConfig);
  initializeAnalytics(firebaseApp);
};

export default enableFirebaseAnalytics;
