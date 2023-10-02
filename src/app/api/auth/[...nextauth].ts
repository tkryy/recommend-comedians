import NextAuth, { NextAuthOptions } from 'next-auth';
import { FirestoreAdapter } from "@auth/firebase-adapter"
import GoogleProvider from 'next-auth/providers/google';

type ClientType = {
  clientId: string;
  clientSecret: string;
};

const authOptions: NextAuthOptions = {

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    } as ClientType),
    
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(
    
    authOptions
    );
