export const serverConfig = {
  useSecureCookies: process.env.USE_SECURE_COOKIES === "true",
  firebaseApiKey: process.env.FIREBASE_API_KEY,
  serviceAccount: {
    projectId: process.env.FIREBASE_PROJECT_ID as string,
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL as string,
    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
};

export const authConfig = {
  loginPath: "/api/login",
  logoutPath: "/api/logout",
  apiKey: serverConfig.firebaseApiKey ?? "" as string,
  cookieName: "AuthToken",
  cookieSignatureKeys: ["secret1", "secret2"],
  cookieSerializeOptions: {
    path: "/",
    httpOnly: true,
    secure: true, // Set this to true on HTTPS environments
    sameSite: "lax" as const,
    maxAge: 12 * 60 * 60 * 24, // twelve days
  },
  serviceAccount: {
    projectId: serverConfig.serviceAccount.projectId ?? "" as string,
    clientEmail: serverConfig.serviceAccount.clientEmail ?? "" as string,
    privateKey: serverConfig.serviceAccount.privateKey?.replace(/\\n/g, '\n') ?? "" as string,
  },
};
