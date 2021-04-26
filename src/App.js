import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Membership from "./components/Membership";
import MyAccount from "./components/MyAccount";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<Router>
			<Navbar />
			<div className="container mx-auto mt-20">
				<Sidebar />
				<div className="container w-full pl-44">
					<div className="w-full">
						<Switch>
							<Route path="/" exact component={Home} />
							<Route
								path="/myaccount/personalinfo"
								exact
								component={MyAccount}
							/>
							<Route path="/dashboard" exact component={Dashboard} />
							<Route path="/membership" exact component={Membership} />
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
