"use client";

import { UserFilter } from "@/types/user/user-filters.type";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useState } from "react";

type UserFiltersProps = {
  onFilter: Dispatch<SetStateAction<UserFilter>>;
};

export const UserFilters = ({ onFilter }: UserFiltersProps) => {
  const t = useTranslations("UsersPage.UserTable");
  const [filters, setFilters] = useState<UserFilter>({
    query: null,
    role: null,
    status: null,
  });

  const handleChange = (key: keyof UserFilter, value: string | boolean | null) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div className=" space-y-2 overflow-x-auto ">
      <div>
        <h3>{t('filters')}</h3>
      </div>
      <div className="flex flex-wrap gap-3 items-center">

      
      <input
        type="text"
        value={filters.query ?? ""}
        onChange={(e) => handleChange("query", e.target.value || null)}
        placeholder="Filtrar por nome ou email"
        className="flex-1 min-w-[200px] rounded-xl border px-3 py-2 text-sm border-neutral-200
                   focus:outline-none  dark:bg-neutral-800 dark:text-white"
      />

      <select
        value={filters.role ?? ""}
        onChange={(e) => handleChange("role", e.target.value || null)}
        className="rounded-xl border px-3 py-2 text-sm border-neutral-200
                   focus:outline-none  dark:bg-neutral-800 dark:text-white"
      >
        <option value="">Todas as Roles</option>
        <option value="admin">Admin</option>
        <option value="manager">Manager</option>
        <option value="user">User</option>
      </select>

      <select
        value={
          filters.status === null ? "" : filters.status ? "active" : "inactive"
        }
        onChange={(e) => {
          if (e.target.value === "active") handleChange("status", true);
          else if (e.target.value === "inactive") handleChange("status", false);
          else handleChange("status", null);
        }}
        className="rounded-xl border px-3 py-2 text-sm border-neutral-200
                   focus:outline-none dark:bg-neutral-800 dark:text-white"
      >
        <option value="">Todos</option>
        <option value="active">Ativo</option>
        <option value="inactive">Inativo</option>
      </select>

      <button
        onClick={() => {
          const reset: UserFilter = { query: null, role: null, status: null };
          setFilters(reset);
          onFilter(reset);
        }}
        className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-neutral-700 text-sm font-medium 
                   hover:bg-gray-300 dark:hover:bg-neutral-600"
      >
        Limpar
      </button>
      </div>
    </div>
  );
};
