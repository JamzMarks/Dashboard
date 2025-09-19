"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BillingData } from "@/types/billing/bill.type";
import { useQuery } from "@tanstack/react-query";

export default function VercelBilling() {
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
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Azure</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error try again later...</p>}
        {billing && (
          <>
            <p>
              Gasto: {billing.amount} {billing.currency}
            </p>
            <p>Período: {billing.period}</p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
