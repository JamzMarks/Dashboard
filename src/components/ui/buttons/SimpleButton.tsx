// import { LucideProps } from "lucide-react";
// import { ForwardRefExoticComponent, RefAttributes } from "react";

interface SimpleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  //   Icon?: ForwardRefExoticComponent<
  //     Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  //   >;
}

export const SimpleButton = ({ children, onClick }: SimpleButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex cursor-pointer text-nowrap items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-950 font-semibold text-primary-green dark:text-primary-green rounded-lg hover:bg-emerald-200 dark:hover:bg-emerald-900 transition-colors"
    >
      {children}
    </button>
  );
};
