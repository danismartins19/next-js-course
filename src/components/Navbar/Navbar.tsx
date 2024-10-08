import {
    GamepadIcon,
    HomeIcon,
    AwardIcon,
    RouteIcon,
    UserIcon,
} from "../Icons/Icons";

const NavBarList = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <ul className={`${className} my-4 border-t border-indigo-400/20 hover:border-indigo-400/40`}>
            {children}
        </ul>
    );
};

const NavBarListItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <li className="my-2 rounder-lg bg-transparent-900 px-2 hover:bg-indigo-400/40 cursor-pointer flex gap-2 items-center hover:text-slate-100">
            {children}
        </li>
    );
};

export const Navbar = () => {
    return (
        <nav className="flex flex-col bg-slate-900 border-r border-indigo-400/40 hover:border-indigo-400/80 w-72 p-2 h-screen text-slate-300">
            <div className="flex items-center justify-center">
                <img
                    src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png"
                    alt="Logo do site"
                    className="w-auto h-12 p-2"
                />
            </div>
            <NavBarList className="flex-grow">
                <NavBarListItem>
                    <HomeIcon className="w-4 h-4" /> Home
                </NavBarListItem>
                <NavBarListItem>
                    <GamepadIcon className="w-4 h-4" /> Games
                </NavBarListItem>
                <NavBarListItem>
                    <AwardIcon className="w-4 h-4" />
                    Top 10
                </NavBarListItem>
                <NavBarListItem>
                    <RouteIcon className="w-4 h-4" /> Walkthroughs
                </NavBarListItem>
            </NavBarList>
            <NavBarList>
                <NavBarListItem>
                    <UserIcon className="w-4 h-4" />
                    User
                </NavBarListItem>
            </NavBarList>
        </nav>
    );
};
