/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Switch, useRouteMatch } from "react-router-dom";
import {Navbar} from "./components/components";


const Tweeter = () => {
	// let { path } = useRouteMatch();
	return (
		<div className="min-w-full relative">
			<Navbar/>
          
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
