import { SectionWithHeader } from "@/components/ui/sections/SimpleSection";
import { CameraForm } from "./components/CameraForm";
import CamerasTable from "./components/CameraTable";

const CameraPage = () => {
    return (
        <div className="space-y-4">
            <SectionWithHeader title="New Camera">
                <p>Create a camera</p>
                <CameraForm/>
            </SectionWithHeader>
            <SectionWithHeader title="Registered Cameras">
                <CamerasTable/>
            </SectionWithHeader>
        </div>
    )
}

export default CameraPage;