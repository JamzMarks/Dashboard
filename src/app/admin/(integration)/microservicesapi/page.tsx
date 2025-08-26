// import { CirclePlus } from "lucide-react";
// import { ApiTable } from "./components/ApiTable";
import { SimpleSection } from "@/components/ui/sections/SimpleSection";
import { ServiceCard } from "./components/ServiceCard";

const MicroservicesApiPage = () => {
  return (
    <SimpleSection>

    <div className="w-full">
      <div>
        <h1 className="text-2xl font-bold mb-4">APIs</h1>
        <p className="text-gray-600 mb-6">
          All Swagger documentation for microservices APIs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ServiceCard 
          description="Api Auth service"
          href="#"
          title="Auth MS"
          />
        <ServiceCard 
          description="Api Operation service"
          href="#"
          title="Operation MS"
          />
        <ServiceCard 
          description="Api Metrics service"
          href="#"
          title="Metrics MS"
          />
          
      </div>
        {/* <ApiTable/> */}
    </div>
    </SimpleSection>
  );
}

export default MicroservicesApiPage;


