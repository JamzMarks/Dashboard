import { useState } from "react";

type UserFiltersProps = {
  onFilter: (query: string) => void;
};

export const UserFilters = ({ onFilter }: UserFiltersProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onFilter(value);
  };

  return (
    <div className="flex gap-2">
      <div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Filtrar por nome ou email"
          className="w-full rounded-xl border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Filtrar por nome ou email"
          className="w-full rounded-xl border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button>Filtrar</button>
      <button>Filtrar</button>
      <button>Buscar</button>
    </div>
  );
};
