"use client";
import { AuthClient } from "@/services/auth.service";
import { LoginDto } from "@/types/interfaces/authDto";
import { useForm } from "react-hook-form";


export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginDto>();

  return (
    <form
      className="space-y-4 w-full max-w-sm mx-auto"
      onSubmit={handleSubmit((data) => AuthClient.Login(data))}
    >
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          {...register("password", { required: true })}
          type="password"
          id="password"
          name="password"
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition"
      >
        Login
      </button>
    </form>
  );
};
