import { cert, initializeApp, getApps } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import * as admin from "firebase-admin";
import type { ServiceAccount } from "firebase-admin";

export const serverConfig = {
  useSecureCookies: process.env.USE_SECURE_COOKIES === "true",
  firebaseApiKey: process.env.FIREBASE_API_KEY,
  serviceAccount: {
    projectId: process.env.FIREBASE_PROJECT_ID as string,
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL as string,
    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY!.replace(/\\n/g, "\n"),
  },
};

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const { privateKey } = JSON.parse(process.env.FIREBASE_PRIVATE_KEY_JSON ?? "{}");
//const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n') as string;

const customCert: ServiceAccount = {
  projectId,
  clientEmail,
  privateKey,
};

export const firebaseAdmin =
  admin.apps[0] ??
  admin.initializeApp({
    credential: admin.credential.cert(customCert),
  });


export const auth = getAuth();


const firebaseAdminConfig = {
    credential: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n")
        ? admin.credential.cert(serverConfig.serviceAccount)
        : undefined,
}

export const getFirebaseAdminApp = () => {
  if (admin.apps.length > 0) {
    return admin.apps[0] as admin.app.App;
  }

  // admin.firestore.setLogFunction(console.log);

  return initializeApp();
};

export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp(firebaseAdminConfig);
    }
}
