import { ActionTableButton } from "@/components/ui/buttons/ActionsTableButton";
import { DeleteConfirmationModal } from "@/components/ui/modal/DeleteConfirmationModal";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

export const TrafficLightButtonsActions = ({
  macAddress,
}: {
  macAddress: string;
}) => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  return (
    <div>
      <div className="space-x-1">
        <ActionTableButton
          Icon={Pencil}
          color="blue"
          onClick={() => setEditModal(true)}
        />
        <ActionTableButton
          Icon={Trash2}
          color="red"
          onClick={() => setDeleteModal(true)}
        />
      </div>

      <DeleteConfirmationModal
        resourceName="Traffic Light"
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        onConfirm={() => console.log("")}
        confirmationText={`device/${macAddress}`}
        data={macAddress}
      />
    </div>
  );
};
