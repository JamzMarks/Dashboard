"use client";

import { useState } from "react";
import { UserModal } from "./modals/UserModal";
import { UsersClient } from "@/services/users.service";
import { CreateUserDto } from "@/types/user/user.type";

export const CreateNewUser = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (data: CreateUserDto) => {
    try {
      await UsersClient.CreateUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>criar</button>
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
