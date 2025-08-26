import { SimpleSection } from "@/components/ui/sections/SimpleSection";
import { DeviceForm } from "./components/DeviceForm";

const DevicesPage = () => {

    return (
        <SimpleSection>
            <div className="space-y-4">
                <div>
                    <h1 className="text-2xl font-bold mb-4">Devices</h1>
                    <p className="text-gray-600 mb-6">
                    Select a device to register.
                    </p>
                </div>
                <ul className="flex justify-evenly w-full text-md">
                    <li><button className="cursor-pointer">Camera</button></li>
                    <li><button className="cursor-pointer">Traffic Light</button></li>
                </ul>
                <DeviceForm></DeviceForm>
            </div>
        </SimpleSection>
    )
}

export default DevicesPage;