import { SectionWithHeader } from "@/components/ui/sections/SimpleSection";
import { TrafficLightForm } from "./components/TrafficLightForm";
import TrafficLightTable from "./components/TrafficLightTable";

const TrafficLightPage = () => {
  return (
    <div className="space-y-4">
      <SectionWithHeader title="New Traffic Light">
        <p>Create a camera</p>
        <TrafficLightForm />
      </SectionWithHeader>
      <SectionWithHeader title="Registered Traffic Lights">
        <TrafficLightTable />
      </SectionWithHeader>
    </div>
  );
};

export default TrafficLightPage;
