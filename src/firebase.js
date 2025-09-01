// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; // optional

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ghanaconsumerfinal.firebaseapp.com",
  projectId: "ghanaconsumerfinal",
  storageBucket: "ghanaconsumerfinal.appspot.com", // ⚡ fixed ".app" typo
  messagingSenderId: "973584552955",
  appId: "1:973584552955:web:4788d335154ab89cfbf15e",
  measurementId: "G-8W4755QCWN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app); // optional
