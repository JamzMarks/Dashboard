"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

import { BadgeCheck } from "lucide-react";
import { Footer } from "@/components/footer/Footer";
import { Suspense } from "react";
export default function VerifyEmail() {
  const router = useRouter();
  const searchParams = useSearchParams().get("success");
  const t = useTranslations("VerifyEmailPage");

  useEffect(() => {
    if (searchParams !== "true") {
      router.push("/");
    }
  }, [searchParams, router]);

  return (
    <Suspense>

    <div className="grid grid-rows-[1fr_auto] min-h-screen dark:bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-950">
      <main className="flex flex-col items-center justify-center px-4">
        <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
          <div className="flex flex-col items-center gap-3 mb-4">
            <BadgeCheck className="w-12 h-12 text-emerald-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">
              {t("check")}
            </h1>
          </div>
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {t("description")}
          </p>
        </div>
      </main>
      <Footer />
    </div>
    </Suspense>
  );
}
