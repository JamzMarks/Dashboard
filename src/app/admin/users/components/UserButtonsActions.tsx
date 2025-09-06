"use client";

import { UserButtonActions } from "@/components/ui/buttons/SimpleButton";
import { Pencil, Trash2 } from "lucide-react";
import { DeleteUserModal } from "./modals/DeleteUserModal";
import { useState } from "react";
import { UserModal } from "./modals/UserModal";

export const UserButtonsActions = ({ userEmail }: { userEmail: string }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  function handleConfirm() {
    console.log("Usuário deletado");
  }

  return (
    <div className="space-x-1">
      <UserButtonActions Icon={Pencil} color="blue" 
        onClick={() => setIsUserModalOpen(true)}
      />
      <UserButtonActions
        Icon={Trash2}
        color="red"
        onClick={() => setIsDeleteModalOpen(true)}
      />

      <UserModal
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
        onSubmit={(data) => console.log(data)}
      />
      <DeleteUserModal
        confirmationText="DELETAR"
        userEmail={userEmail}
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
