/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Switch, useRouteMatch } from "react-router-dom";
import {Navbar, Trends, Whotofollow} from "./components/components";


const Tweeter = () => {
	// let { path } = useRouteMatch();
	return (
		<div className="min-w-full relative">
			<Navbar/>
            <Whotofollow/>
            <div>
            <Switch>
                <></>
                <></>
                <></>
            </Switch>
            </div>
		</div>
	);
};
export default Tweeter;
