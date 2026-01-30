import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const userList = [{ email: "ashadulislam@gmail.com", password: 1234 }];
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

        const user = userList.find((u) => u.email === email);
        if (!user) {
          throw new Error("No user found with this username/email");
        }

        const isPasswordOk = user.password === password;

        if (isPasswordOk) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
