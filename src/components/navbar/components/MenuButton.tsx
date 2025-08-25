'use client'

import { useUI } from "@/context/ui-context";
import { Menu } from "lucide-react";


export const MenuButton = () => {
    const {toggleSidebar} = useUI();
    return (
        <div className="">
            <button className="w-full h-full cursor-pointer lg:hidden" onClick={() => toggleSidebar()}>
                <Menu className="w-7 h-7"/>
            </button>
        </div>
    )
}