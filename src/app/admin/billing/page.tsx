import { SectionWithHeader } from "@/components/ui/sections/SimpleSection";
import AzureBilling from "./components/AzureBilling";
import CloudAmqpBilling from "./components/CloudAmqpBilling";
import Neo4jBilling from "./components/Neo4jBilling";
import VercelBilling from "./components/VercelBilling";
import { PageTitle } from "@/components/ui/elements/PageTitle";

const BillingPage = () => {
  return (
    <div className="space-y-4">
      <PageTitle>Billing</PageTitle>

      <SectionWithHeader title="Providers">
        <div className="grid md:grid-cols-2 gap-4">
        <AzureBilling />
        <Neo4jBilling />
        <CloudAmqpBilling />
        <VercelBilling />
        </div>
      </SectionWithHeader>
    </div>
  );
};

export default BillingPage;
