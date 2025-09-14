import { DeleteConfirmationModal } from "@/components/ui/modal/DeleteConfirmationModal"
import { useState } from "react"

export const TrafficLightButtonsActions = ({ macAddress }: { macAddress: string }) => {
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    return (
        <div>
            <div  className="space-x-1">
                <button>
                    {macAddress}
                </button>
            </div>
            <DeleteConfirmationModal
                isOpen={deleteModal}
                onClose={() => setDeleteModal(false)}
                onConfirm={() => console.log('')}
                confirmationText={`device/${macAddress}`}
                data={macAddress}
            />
        </div>
    )
}