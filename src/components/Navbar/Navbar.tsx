import {
    GamepadIcon,
    HomeIcon,
    AwardIcon,
    RouteIcon,
    UserIcon,
} from "../Icons/Icons";
import NavBarList from "./NavBarList";
import NavBarListItemButton from "./NavBarListItemButton";
import NavBarListLink from "./NavBarListLink";


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
                <NavBarListLink href={"/"}>
                    <HomeIcon className="w-4 h-4" /> Home
                </NavBarListLink>
                <NavBarListLink href={"/games"}>
                    <GamepadIcon className="w-4 h-4" /> Games
                </NavBarListLink>
                <NavBarListLink href={"/top-10"}>
                    <AwardIcon className="w-4 h-4" />
                    Top 10
                </NavBarListLink>
                <NavBarListLink href={"/walkthrough"}>
                    <RouteIcon className="w-4 h-4" /> Walkthroughs
                </NavBarListLink>
            </NavBarList>
            <NavBarList>
                <NavBarListLink href={"/user"}>
                    <UserIcon className="w-4 h-4" />
                    User
                </NavBarListLink>
            </NavBarList>
        </nav>
    );
};    
