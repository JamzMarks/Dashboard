import { apiFetch } from "@/lib/api/client";
import { DeviceFilters } from "@/types/devices/device.filters.type";
import { Camera } from "@/types/devices/devices.interface";
import { ApiResponse } from "@/types/interfaces/apiResponse";
class DevicesService {
    constructor(){}

    async trafficLightTester(){
        const eventSource = new EventSource("http://localhost:3000/semaforo/test?ids=123,124");
        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log("Resultado parcial:", data);
        };
    }
    public async GetCameras(filters: DeviceFilters): Promise<ApiResponse<Camera[]>> {
    return await apiFetch("/cameras", {
      method: "GET",
    });

}    
}


export const DevicesClient = new DevicesService();
