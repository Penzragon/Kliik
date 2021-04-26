import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

export default function Sidebar() {
	const page = [
		{
			name: "Home",
			isCurrent: true,
		},
		{
			name: "MyAccount",
			isCurrent: false,
		},
	];

	return (
		<div className="bg-gray-200 w-40 px-2 py-2 rounded fixed top-20">
			<ul>
				<li>
					<Link to="/">
						<button className="bg-white w-full text-left my-1 rounded px-1 hover:bg-yellow-400 focus:outline-none">
							Home
						</button>
					</Link>
				</li>
				<li>
					<Link to="/myaccount/personalinfo">
						<button className="bg-white w-full text-left my-1 rounded px-1 hover:bg-yellow-400 focus:outline-none">
							My Account
						</button>
					</Link>
				</li>
				<li className="text-center">Creator Dashboard</li>
				<li>
					<Link to="/dashboard">
						<button className="bg-white w-full text-left my-1 rounded px-1 hover:bg-yellow-400 focus:outline-none">
							Dashboard
						</button>
					</Link>
				</li>
				<li>
					<Link to="/membership">
						<button className="bg-white w-full text-left my-1 rounded px-1 hover:bg-yellow-400 focus:outline-none">
							Membership
						</button>
					</Link>
				</li>
				<li>
					<button className="bg-white w-full text-left my-1 rounded px-1 hover:bg-yellow-400 focus:outline-none">
						All Supporter
					</button>
				</li>
				<li>
					<button className="bg-white w-full text-left my-1 rounded px-1 hover:bg-yellow-400 focus:outline-none">
						Extras
					</button>
				</li>
			</ul>
		</div>
	);
}
