"use client";
import { BaseTable } from "@/components/ui/table/BaseTable";
import { DevicesClient } from "@/services/devices.service";
import { DeviceFilters, SemaforoFilters } from "@/types/devices/device.filters.type";
import { Camera, Semaforo } from "@/types/devices/devices.interface";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { TrafficLightFilters } from "./TrafficLightFilters";
import { TrafficLightButtonsActions } from "./TrafficLightButtonsActions";
import { useFormatter } from "next-intl";


export default function TrafficLightTable() {
  const format = useFormatter();
  const [filters, setFilters] = useState<SemaforoFilters>({
    query: null,
    status: null,
    pack: null,
    subpack: null
  });
  const { data, isLoading, isError } = useQuery({
    queryKey: ["semaforo", filters],
    queryFn: () => DevicesClient.GetTrafficLight(filters),
  });
  const semaforos: Semaforo[] = data?.data ?? [];

  return (
    <div className="space-y-4">
      <TrafficLightFilters onFilter={setFilters} />
        <BaseTable<Semaforo>
          columns={[
            { key: "deviceId", label: "Device ID" },
            { key: "macAddress", label: "MAC" },
            { key: "ip", label: "IP" },
            { key: "createdAt", label: "Criado em",
              render: (s) => s.createdAt ? 
                format.dateTime(new Date(s.createdAt), {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                })
              : <p className="text-sm">Data nao informada</p>,
             },
            { key: "packId", label: "Pack Id",
              render: (s) => s.packId ? s.packId : <p className="text-sm">Não vinculado</p>,
             },
            { key: "subPackId", label: "SubPack Id",
              render: (s) => s.subPackId ? s.subPackId : <p className="text-sm">Não vinculado</p>,
             },
            {
              key: "actions",
              label: "Ações",
              render: (s) => <TrafficLightButtonsActions macAddress={s.macAddress} />,
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
