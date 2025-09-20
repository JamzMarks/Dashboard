"use client";

import { BillingData } from "@/types/billing/bill.type";
import { ReactNode } from "react";

type BillingCardProps = {
  provider: string;
  bill: BillingData | undefined;
  icon?: ReactNode;
  color?: string;
  isLoading: boolean;
  isError: boolean;
};

export default function BillingCard({
  provider,
  bill,
  icon,
  color = "bg-blue-500",
  isLoading,
  isError,
}: BillingCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className={`flex items-center p-6 rounded-t-2xl ${color} text-white`}>
        <div className="text-4xl mr-4">{icon}</div>
        <h3 className="text-lg font-semibold">{provider}</h3>
      </div>

      <div className="p-6">
        {isLoading && <p className="text-gray-500">Loading...</p>}
        {isError && <p className="text-red-500">Error. Try again later.</p>}
        {bill && (
          <div>
            <p className="text-2xl font-bold text-gray-900">
              {bill.amount.toFixed(2)} {bill.currency}
            </p>
            <p className="text-sm text-gray-500 mt-1">Período: {bill.period}</p>
          </div>
        )}
      </div>
    </div>
  );
}
