"use client";
import { BaseTable } from "@/components/ui/table/BaseTable";
import { DevicesClient } from "@/services/devices.service";
import { DeviceFilters } from "@/types/devices/device.filters.type";
import { Camera, Semaforo } from "@/types/devices/devices.interface";
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
    queryKey: ["semaforo", filters],
    queryFn: () => DevicesClient.GetTrafficLight(filters),
  });
  const semaforos: Semaforo[] = data?.data ?? [];
  console.log(semaforos)
  return (
    <div className="space-y-4">
      <TrafficLightFilters onFilter={setFilters} />
        <BaseTable<Camera>
          columns={[
            { key: "deviceId", label: "Device ID" },
            { key: "macAddress", label: "MAC" },
            { key: "ip", label: "IP" },
            { key: "createdAt", label: "Criado em" },
            { key: "packId", label: "Pack Id" },
            { key: "subPackId", label: "SubPack Id" },
            {
              key: "actions",
              label: "Ações",
              render: (c) => <TrafficLightButtonsActions macAddress={c.macAddress} />,
            },
          ]}
          data={semaforos}
          emptyMessage="Nenhum semaforo cadastrado"
          error={isError}
          loading={isLoading}
        />
    </div>
  );
}
