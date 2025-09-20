import { SectionWithHeader } from "@/components/ui/sections/SimpleSection";
import { TrafficLightForm } from "./components/TrafficLightForm";
import TrafficLightTable from "./components/TrafficLightTable";
import { PageTitle } from "@/components/ui/elements/PageTitle";
import { PlusCircle, List } from "lucide-react";

const TrafficLightPage = () => {
  return (
    <div className="space-y-4">
      <PageTitle>Traffic Light</PageTitle>

      <SectionWithHeader title="New Traffic Light" Icon={PlusCircle}>
        <TrafficLightForm />
      </SectionWithHeader>

      <SectionWithHeader title="Registered Traffic Lights" Icon={List}>
        <TrafficLightTable />
      </SectionWithHeader>
    </div>
  );
};

export default TrafficLightPage;
