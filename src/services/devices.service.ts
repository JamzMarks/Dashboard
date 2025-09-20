/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiFetch } from "@/lib/api/client";
import { DeviceFilters, SemaforoFilters } from "@/types/devices/device.filters.type";
import { Camera, Semaforo } from "@/types/devices/devices.interface";
import { ApiResponse } from "@/types/interfaces/apiResponse";
import qs from "query-string";

class DevicesService {
  public BASE_URL: string;
  constructor() {
    this.BASE_URL = process.env.AUTH_API_URL || "http://localhost:3005/";
  }

  async trafficLightTester() {
    const eventSource = new EventSource(
      "http://localhost:3000/semaforo/test?ids=123,124"
    );
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Resultado parcial:", data);
    };
  }
  public async GetCameras(
    filters: DeviceFilters
  ): Promise<ApiResponse<Camera[]>> {
    return await apiFetch(this.BASE_URL, "camera", {
      method: "GET",
    });
  }

  public async GetTrafficLight(
    filters: SemaforoFilters
  ): Promise<ApiResponse<Semaforo[]>> {
    const filtered: Record<string, any> = {};
    console.log(filters)
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        filtered[key] = value;
      }
    });
    const queryString = qs.stringify(filtered);
    const url = queryString ? `semaforo?${queryString}` : "semaforo";
    return await apiFetch(this.BASE_URL, url, {
      method: "GET",
    });
  }
}

export const DevicesClient = new DevicesService();
