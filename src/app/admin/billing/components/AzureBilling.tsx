"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BillingData } from "@/types/billing/bill.type";
import { useQuery } from "@tanstack/react-query";
import BillingCard from "./BillingCard";



export default function AzureBilling() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["azure_bill"],
    queryFn: () => {
      return {
        data: {
          amount: 123.34,
          currency: "BRL",
          period: new Date().toString(),
        },
      };
    },
  });

  const billing: BillingData | undefined = data?.data ;

  return (
    <BillingCard
    bill={billing}
    isLoading={isLoading}
    isError={isError}
    provider="Azure"
    />
  );
}
