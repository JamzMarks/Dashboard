"use client";
import { useState } from "react";
import { X } from "lucide-react";

type DeleteUserModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  confirmationText?: string;
  userEmail?: string;
};

export const DeleteUserModal = ({
  isOpen,
  onClose,
  onConfirm,
  confirmationText = "DELETAR",
  userEmail,
}: DeleteUserModalProps) => {
  const [input, setInput] = useState("");

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (input === confirmationText) {
      onConfirm();
      setInput("");
    }
  };

  const handleClose = () => {
    setInput("");
    onClose();
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg w-full max-w-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Excluir Usuário
          </h2>
          <button
            onClick={handleClose}
            className="p-1 rounded hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Body */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Tem certeza que deseja excluir{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {userEmail}
          </span>
          ? <br />
          Esta ação não pode ser desfeita.
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Digite <span className="font-semibold">{confirmationText}</span> para
          confirmar:
        </p>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Digite "${confirmationText}"`}
          className="w-full rounded-xl border border-gray-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
        />

        {/* Footer */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-gray-200 dark:border-neutral-700 text-sm font-medium hover:bg-gray-100 dark:hover:bg-neutral-800 transition cursor-pointer"
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirm}
            disabled={input !== confirmationText}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition cursor-pointer ${
              input === confirmationText
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-red-200 text-white cursor-not-allowed"
            }`}
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
};
