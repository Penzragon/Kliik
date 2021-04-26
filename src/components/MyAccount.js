import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ChangePassword from "./ChangePassword";
import PersonalInfo from "./PersonalInfo";

export default function MyAccount() {
	return (
		<Router>
			<div className="" style={{ height: 4000, width: "100%" }}>
				<div className="flex flex-row justify-around mb-2">
					<Link to="/myaccount/personalinfo">
						<div className="bg-yellow-500 rounded px-2 py-2">
							<h1>Personal Info</h1>
						</div>
					</Link>
					<Link to="/myaccount/changepassword">
						<div className="bg-yellow-500 rounded px-2 py-2">
							<h1>Change Password</h1>
						</div>
					</Link>
				</div>
				<div>
					<Switch>
						<Route
							path="/myaccount/personalinfo"
							exact
							component={PersonalInfo}
						/>
						<Route
							path="/myaccount/changepassword"
							exact
							component={ChangePassword}
						/>
					</Switch>
				</div>
			</div>
		</Router>
	);
}
