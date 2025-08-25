import Link from "next/link";
import OAuthButtons from "./components/OAuthButtons";
import { SignUpForm } from "./components/SignupForm";
 const SignUpPage = () => {
  return (
    <div className="min-h-screen w-full grid lg:grid-cols-2 bg-gray-100">
      {/* Ilustração ou lado esquerdo (opcional) */}
      <div className="hidden lg:flex items-center justify-center bg-primary text-white">
        <div className="max-w-md text-center p-10">
          <h2 className="text-3xl font-semibold mb-4">Bem-vindo ao Papirus!</h2>
          <p className="text-base">
            Economize papel, centralize seus documentos e compartilhe de forma ecológica.
          </p>
        </div>
      </div>

      {/* Formulário */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 space-y-6">
          <div className="space-y-4 text-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Crie sua conta no <span className="text-primary">Papirus</span>
            </h1>
            <p className="text-gray-500 text-sm">
              Comece a poupar o uso de papel agora mesmo!
            </p>
          </div>

          <SignUpForm />

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">ou continue com</span>
            </div>
          </div>

          <OAuthButtons />

          <p className="text-xs text-gray-500 text-center">
            Ja possui uma conta?{" "}
            <Link href="/auth/login" className="text-primary underline">
              Faca Login
            </Link>.
          </p>
          <p className="text-xs text-gray-500 text-center">
            Ao criar uma conta, você concorda com nossos{" "}
            <Link href="#" className="text-primary underline">
              termos e condições
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
