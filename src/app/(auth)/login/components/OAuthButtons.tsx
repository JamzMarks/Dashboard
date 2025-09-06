'use client'
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export const OAuthButtons = () => {
  return (
    <div className="space-y-4 w-full max-w-sm mx-auto">
      <button
        onClick={() => signIn('github')}
        className="w-full flex items-center justify-center gap-2 bg-black text-white rounded-md p-2 hover:bg-gray-900 transition"
      >
        <FaGithub></FaGithub>
        <span className="text-sm font-medium">Entrar com GitHub</span>
      </button>
    </div>
  );
};

export default OAuthButtons;
