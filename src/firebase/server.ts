import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase/firestore";

export const app = initializeApp({
  credential: applicationDefault(),
})


