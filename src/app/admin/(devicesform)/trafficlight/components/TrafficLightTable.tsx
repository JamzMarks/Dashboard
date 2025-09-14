"use client";
import { BaseTable } from "@/components/ui/table/BaseTable";
import { DevicesClient } from "@/services/devices.service";
import { DeviceFilters } from "@/types/devices/device.filters.type";
import { Camera } from "@/types/devices/devices.interface";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { TrafficLightFilters } from "./TrafficLightFilters";
import { TrafficLightButtonsActions } from "./TrafficLightButtonsActions";


export default function TrafficLightTable() {
  const [filters, setFilters] = useState<DeviceFilters>({
    query: null,
    status: null,
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["cameras", filters],
    queryFn: () => DevicesClient.GetCameras(filters),
  });

  const cameras: Camera[] = data?.data ?? [];

  return (
    <div>
      <TrafficLightFilters onFilter={setFilters} />

      {isLoading && <p className="p-4">Carregando...</p>}
      {isError && <p className="p-4 text-red-500">Erro ao carregar câmeras</p>}
      {!isLoading && !isError && cameras.length === 0 && (
        <p className="p-4 text-gray-500">Nenhuma câmera encontrada</p>
      )}

      {!isLoading && !isError && cameras.length > 0 && (
        <BaseTable<Camera>
          columns={[
            { key: "deviceId", label: "Device ID" },
            { key: "macAddress", label: "MAC" },
            { key: "ip", label: "IP" },
            { key: "createdAt", label: "Criado em" },
            {
              key: "actions",
              label: "Ações",
              render: (c) => <TrafficLightButtonsActions macAddress={c.macAddress} />,
            },
          ]}
          data={cameras}
          emptyMessage="Nenhuma câmera cadastrada"
        />
      )}
    </div>
  );
}
