"use client";

import { SimpleComboBox } from "@/components/ui/combo/SimpleComboBox";
import { SemaforoFilters } from "@/types/devices/device.filters.type";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useState } from "react";

type TrafficLightFiltersProps = {
  onFilter: Dispatch<SetStateAction<SemaforoFilters>>;
};

export const TrafficLightFilters = ({ onFilter }: TrafficLightFiltersProps) => {
  const t = useTranslations("Devices.TrafficLight");
  const [filters, setFilters] = useState<SemaforoFilters>({
    query: null,
    status: null,
    pack: null,
    subpack: null,
  });

  const handleChange = (
    key: keyof SemaforoFilters,
    value: string | number | boolean | null
  ) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handleStatus = (value: string) => {
    if(value == "true"){
      setFilters(prev => ({
        ...prev,
        status: true
      }))
      handleChange("status", true)
    }else if(value == 'false'){
      setFilters(prev => ({
        ...prev,
        status: false
      }))
      handleChange("status", false)
    }else{
      setFilters(prev => ({
        ...prev,
        status: null
      }))
      handleChange("status", null)
    }
  }

  const resetFilters = () => {
    const reset: SemaforoFilters = {
      query: null,
      status: null,
      pack: null,
      subpack: null,
    };
    setFilters(reset);
    onFilter(reset);
  };

  return (
    <div className="space-y-2 overflow-x-auto">
      <div>
        <h3 className="font-semibold">{t("filters.title")}</h3>
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        <input
          type="text"
          value={filters.query ?? ""}
          onChange={(e) => handleChange("query", e.target.value || null)}
          placeholder={t("filters.searchPlaceholder")}
          className="flex-1 min-w-[200px] rounded-xl border px-3 py-2 text-sm border-neutral-200
                     focus:outline-none dark:bg-neutral-800 dark:text-white"
        />

        <input
          type="number"
          min="0"
          value={filters.pack ?? ""}
          onChange={(e) =>
            handleChange("pack", e.target.value ? Number(e.target.value) : null)
          }
          placeholder={t("filters.pack")}
          className="w-24 rounded-xl border px-3 py-2 text-sm border-neutral-200
                     focus:outline-none dark:bg-neutral-800 dark:text-white"
        />

        <input
          type="number"
          min="0"
          value={filters.subpack ?? ""}
          onChange={(e) =>
            handleChange(
              "subpack",
              e.target.value ? Number(e.target.value) : null
            )
          }
          placeholder={t("filters.subpack")}
          className="w-24 rounded-xl border px-3 py-2 text-sm border-neutral-200
                     focus:outline-none dark:bg-neutral-800 dark:text-white"
        />

        <SimpleComboBox
          placeholder={t("filters.Combobox.Placeholder")}
          resource={t("filters.Combobox.Resource")}
          description={t("filters.Combobox.Description")}
          onChange={handleStatus}
          options={[
            { label: t("filters.Combobox.ActiveOption"), value: "true" }, { label: t("filters.Combobox.InactiveOption"), value: "false" }

          ]}
        />
        <button
          onClick={resetFilters}
          className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-neutral-700 text-sm font-medium 
                     hover:bg-gray-300 dark:hover:bg-neutral-600"
        >
          {t("filters.clear")}
        </button>
      </div>
    </div>
  );
};
