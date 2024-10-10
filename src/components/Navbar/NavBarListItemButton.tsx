"use client";

import { cn } from "@/helpers/cn";
import NavBarListItem from "./NavBarListItem";
import { NavBarListItemButtonProps } from "./types";


const NavBarListItemButton = ({ children, className, ...props }: NavBarListItemButtonProps) => {
    return (
        <NavBarListItem className={cn('p-0', className)}>
            <button className="flex gap-2 items-center w-full p-2" {...props}>
                {children}
            </button>
        </NavBarListItem >
    )
}

export default NavBarListItemButton;