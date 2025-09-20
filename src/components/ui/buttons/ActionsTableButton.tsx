import clsx from "clsx";
import { LucideIcon } from "lucide-react";

interface ActionTableButtonProps {
  color?: "blue" | "red" | "green" | "yellow"; 
  onClick?: () => void;
  Icon: LucideIcon;
}

export const ActionTableButton = ({
  Icon,
  onClick,
  color = "blue",
}: ActionTableButtonProps) => {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-100 text-blue-800",
    red: "bg-red-100 text-red-600",
    green: "hover:bg-green-100 text-green-600",
    yellow: "hover:bg-yellow-100 text-yellow-600",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        "p-2 rounded text-sm cursor-pointer transition-colors dark:hover:bg-neutral-800",
        colorMap[color]
      )}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
};