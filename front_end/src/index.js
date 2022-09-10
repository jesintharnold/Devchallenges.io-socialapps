import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Tweeter from "./tweeter/Tweeter";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Toaster position="top-right" reverseOrder={false} />
			<Switch>
				<Route path="/" component={Tweeter} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root"),
);

reportWebVitals();
