"use client";

import { useState } from "react";
import { SectionWithHeader, SimpleSection } from "@/components/ui/sections/SimpleSection";
import { UserFilters } from "./components/UsersFilters";

import { PageTitle } from "@/components/ui/elements/PageTitle";
import UsersTable from "./components/UsersTable";


const mockUsers = [
  { id: "1", name: "Ana Silva", email: "ana@email.com" },
  { id: "2", name: "Carlos Souza", email: "carlos@email.com" },
  { id: "3", name: "Mariana Lima", email: "mariana@email.com" },
];

const UsersPage = () => {
  const [filteredUsers, setFilteredUsers] = useState(mockUsers);

  const handleFilter = (query: string) => {
    const lower = query.toLowerCase();
    const filtered = mockUsers.filter(
      (u) =>
        u.name.toLowerCase().includes(lower) ||
        u.email.toLowerCase().includes(lower)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="space-y-4">
      <PageTitle>Gerenciamento de Usuários</PageTitle>
      <SectionWithHeader title="Visão Geral">
        <div>
          <p className="text-gray-600">Gerencie os usuários registrados na plataforma.</p>
        </div>
      </SectionWithHeader>

      <SectionWithHeader title="Lista de Usuários">
        <div className="space-y-4">
          <UserFilters onFilter={handleFilter} />
          <UsersTable/>
        </div>
      </SectionWithHeader>
    </div>
  );
};

export default UsersPage;
