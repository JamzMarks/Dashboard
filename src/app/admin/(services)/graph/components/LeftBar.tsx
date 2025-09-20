import { Dispatch, SetStateAction } from "react"
import { selectedItem } from "./GraphRender"


interface LeftBarProps {
    selectedItem: selectedItem | null,
    setSelectedItem:  Dispatch<SetStateAction<selectedItem | null>>,
}

export const LeftBar = ({selectedItem, setSelectedItem}: LeftBarProps) => {
    return (
    <div
        style={{
        width: !selectedItem ? "300px" : "0",
        height: "100%",
        backgroundColor: "#f0f0f0",
        transition: "width 0.3s",
        overflow: "auto",
        }}
    >
        {selectedItem && (
        <div style={{ padding: "20px" }}>
            <h3>{selectedItem.type === "node" ? "Node" : "Edge"} Details</h3>
            <pre>{JSON.stringify(selectedItem.data, null, 2)}</pre>
            <button onClick={() => setSelectedItem(null)}>Close</button>
        </div>
        )}
    </div>

    )
}