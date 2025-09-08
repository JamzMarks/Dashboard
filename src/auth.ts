import NextAuth, { DefaultSession } from "next-auth";

import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string;
    } & DefaultSession["user"];
    accessToken?: string;
  }
   interface AdapterUser {
    user: {
      role: string;
      accessToken: string;
    } & DefaultSession["user"];
  }
  interface JWT {
    id: string;
    role?: string;
    accessToken?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        try {
          const res = await fetch(`${process.env.AUTH_API_URL}/auth/signin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          if (!res.ok) {
            console.error("Falha no login:", await res.text());
            return null;
          }

          const { data } = await res.json();

          return {
            id: data.user.id,
            email: data.user.email,
            name: data.user.name ?? data.user.email,
            role: data.user.role,
            image: data.user.avatar ?? 'teste',
            accessToken: data.access_token,
          };
        } catch (err) {
          console.error("Erro no authorize:", err);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log('token no jwt', token)
      console.log('user no jwt', user)
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
        // token.role = user.role;
        // token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      console.log(`token no session`, token)
      if (token) {
        session.user.role = token.role as string;
        session.user.id = token.sub as string;
        session.accessToken = token.accessToken as string;
      }
      console.log('session final', session)
      return session;
    },
  },
});

