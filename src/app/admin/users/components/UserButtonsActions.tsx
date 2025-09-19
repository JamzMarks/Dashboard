"use client";

import { UserButtonActions } from "@/components/ui/buttons/SimpleButton";
import { Pencil, Trash2 } from "lucide-react";
import { DeleteUserModal } from "./modals/DeleteUserModal";
import { useState } from "react";
import { UserModal } from "./modals/UserModal";
import { useTranslations } from "next-intl";

export const UserButtonsActions = ({ userEmail }: { userEmail: string }) => {
  const t = useTranslations('UsersPage')
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

      {/* <UserModal
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
        onSubmit={(data) => console.log(data)}
      /> */}
      <DeleteUserModal
        confirmationText={t('UserTable.delete')}
        data={userEmail}
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirm}
      />
    </div>
  );
};
