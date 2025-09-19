import { SectionWithHeader } from "@/components/ui/sections/SimpleSection";
import { TrafficLightForm } from "./components/TrafficLightForm";
import TrafficLightTable from "./components/TrafficLightTable";
import { PageTitle } from "@/components/ui/elements/PageTitle";

const TrafficLightPage = () => {
  return (
    <div className="space-y-4">
      <PageTitle>Traffic Light</PageTitle>
      <SectionWithHeader title="New Traffic Light">
        <p>Create a Traffic Light</p>
        <TrafficLightForm />
      </SectionWithHeader>
      <SectionWithHeader title="Registered Traffic Lights">
        <TrafficLightTable />
      </SectionWithHeader>
    </div>
  );
};

export default TrafficLightPage;
