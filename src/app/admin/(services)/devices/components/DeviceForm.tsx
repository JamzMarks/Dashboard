import { useForm } from "react-hook-form/dist/useForm";

interface DeviceFormData {
    name: string;
    location: string;
    ip?: string;
    active: boolean;
  }

const DeviceForm = () => {
    const {} = useForm<DeviceFormData>();  
    return (
        <div>
            <form action="">

            </form>
        </div>
    )
}