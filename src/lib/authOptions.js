import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import * as bcrypt from "bcrypt";
import { collections, dbConnect } from "@/lib/dbConnect";

export const authOptions = {
  // Configure one or more authentication providers
 
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "Enter email" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("Please enter your username/email and password");
        }
        
        const user = await dbConnect(collections.USERS).findOne({
          email: credentials.email,
        });

        if (!user) {
          throw new Error("No user found with this username/email");
        }

        const isPasswordOk = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!isPasswordOk) {
          throw new Error("Incorrect password");
        }

        if (isPasswordOk) {
          return {
            id: user._id.toString(),
            name: user.fullName,
            email: user.email,
            image: user.photoURL,
          };
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
      async session({ session, token, user }) {
      return session;
    },
      async jwt({ token, user, account, profile, isNewUser }) {
        
          if (user) {
              token.email = user.email;
          }
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
};
