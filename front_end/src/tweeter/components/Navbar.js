import { NavLink } from "react-router-dom";
import tweeterApp from "../../Assets/tweeter.svg";
import Logout from "./Logout";

const nav_path = [
	{ path: "/tweeter/home", name: "home" },
	{ path: "/tweeter/explore", name: "explore" },
	{ path: "/tweeter/bookmarks", name: "bookmarks" },
];

const Navbar = () => {
	return (
		<div className="min-w-full bg-navbar fixed top-0 right-0 left-0 flex justify-between items-center px-4 py-1">
			<img src={tweeterApp} className="h-7 w-auto" />
			<div className="justify-between gap-10 items-center px-2  hidden lg:flex">
				{nav_path.map(({ path, name }, index) => (
					<NavLink
						to={`${path}`}
						exact
						className="relative capitalize text-tweeter-grey  after:opacity-0 after:rounded-tl-lg after:rounded-tr-lg text-sm after:h-1 after:min-w-full after:m-0 after:p-0 after:content-[''] after:absolute after:bg-tweeter-blue after: after:-bottom-[13px] after:left-0 after:right-0"
						activeClassName="text-tweeter-blue-highlight font-bold after:opacity-100 scale-105"
						key={index}
					>{`${name}`}</NavLink>
				))}
			</div>
			<Logout />
		</div>
	);
};

export default Navbar;
