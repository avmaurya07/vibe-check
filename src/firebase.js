import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  increment,
} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "vibe-check-app.firebaseapp.com",
  projectId: "vibe-check-app",
  storageBucket: "vibe-check-app.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Function to save quiz result
export const saveQuizResult = async (vibeId) => {
  // Get the stats document
  const statsRef = doc(db, "stats", "vibes");
  const statsDoc = await getDoc(statsRef);

  if (statsDoc.exists()) {
    // Update the count for this vibe
    await updateDoc(statsRef, {
      [`vibes.${vibeId}.count`]: increment(1),
      totalResponses: increment(1),
    });
  } else {
    // Create the stats document if it doesn't exist
    await setDoc(statsRef, {
      vibes: {
        [vibeId]: { count: 1 },
      },
      totalResponses: 1,
    });
  }
};

// Function to get a unique user ID
export const generateUserId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export { db };
