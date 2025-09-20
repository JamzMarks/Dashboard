"use client";

import { SignUpDto } from "@/types/interfaces/authDto";
import { signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";


export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<SignUpDto>();

  const onSubmit: SubmitHandler<SignUpDto> = async (data) => {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true, 
      callbackUrl: "/admin",
    })
    reset(
      {
        password: "",
      }
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          {...register("email", { required: "Email obrigatório" })}
          className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="seu@email.com"
          autoComplete="email"
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Senha
        </label>
        <input
          type="password"
          {...register("password", {
            required: "Senha obrigatória",
            minLength: { value: 8, message: "Mínimo de 8 caracteres" },
          })}
          className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="••••••••"
          autoComplete="current-password"
        />
        {errors.password && (
          <span className="text-sm text-red-500">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 transition-colors text-white font-semibold py-2 px-4 rounded w-full cursor-pointer"
        >
          Login
        </button>
      </div>
    </form>
  );
};
