import { cn } from "@/helpers/cn";
import { NavbarListItemProps } from "./types";


const NavBarListItem = ({ children, className, ...props }: NavbarListItemProps) => {
    return (
        <li className={cn("my-2 rounded-lg bg-transparent px-2 hover:bg-indigo-400/40 cursor-pointer flex gap-2 items-center hover:text-slate-100", className)} {...props}>
            {children}
        </li>
    );
};

export default NavBarListItem;