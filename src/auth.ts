import NextAuth, { DefaultSession, User } from "next-auth";

import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface Usera extends User {
    id: string;
    role: string;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: { label: "Email", type: "text", placeholder: "you@example.com" },
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
            credentials: "include",
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });
          
          if (!res.ok) {
            console.error("Falha no login:", await res.text());
            return null;
          }
          const user = await res.json();
          return {
            id: String(user.id),
            email: user.email,
            name: user.name ?? user.email,
            role: user.role,
            accessToken: user.access_token,

          };
        } catch (err) {
          console.error("Erro no authorize:", err);
          return null;
        }
      },
    }),
  ],
  // cookies: {
  //   sessionToken: {
  //     name:
  //       process.env.NODE_ENV === "production"
  //         ? "__Secure-authjs.session-token"
  //         : "authjs.session-token",
  //     options: {
  //       httpOnly: true,
  //       sameSite: "lax",
  //       path: "/",
  //       secure: process.env.NODE_ENV === "production",
  //     },
  //   },
  // },
  session: {
    strategy: "jwt", // mantém o login stateless
  },
  callbacks: {
    //   async jwt({ token, user }: { token: any; user?: Usera }) {
    //     if (user) {
    //       token.id = user.id;
    //       token.role = user.role;
    //     }
    //     return token;
    //   },
      async session({ session, token }) {
        // Expor os dados extras no session
        if(token) {
          session.user.id = token.id as string;
          session.user.role = token.role as string;
          session.sessionToken = token.accessToken as string;
        }
        return session;
      },
    redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
});
