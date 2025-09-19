import { SectionWithHeader } from "@/components/ui/sections/SimpleSection";
import { PageTitle } from "@/components/ui/elements/PageTitle";
import GraphRender from "./components/GraphRender";


const GraphPage = () => {
  return (
    <div className="space-y-4">
        <PageTitle>Graph Map</PageTitle>
        <SectionWithHeader title="Graph Map">
            <GraphRender/>
        </SectionWithHeader>
    </div>
  )
};

export default GraphPage;
