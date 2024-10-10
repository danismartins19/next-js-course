import { cn } from "@/helpers/cn"
import Link from "next/link"
import NavBarListItem from "./NavBarListItem"
import { NavbarListLinkProps } from "./types"



const NavBarListLink = ({ href, children, className, ...props }: NavbarListLinkProps) => {
    return <NavBarListItem className={cn('p-0', className)}>
        <Link href={href} className="flex gap-2 items-center w-full p-2" {...props}>
            {children}
        </Link>
    </NavBarListItem >
}

export default NavBarListLink;