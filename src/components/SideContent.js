import React, { useState } from "react";
import Suggestion from "./Suggestion";

export default function SideContent() {
	const [user, setUser] = useState([
		{
			name: "name1",
			bio:
				"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
		},
		{
			name: "name2",
			bio:
				"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
		},
		{
			name: "name3",
			bio:
				"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
		},
	]);

	return (
		<div className="container">
			<input
				className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
				type="search"
				name="search"
				placeholder="Search"
			/>
			<h1 className="mt-2">Suggestion</h1>
			{user
				? user.map((item) => {
						return <Suggestion name={item.name} bio={item.bio} />;
				  })
				: false}
		</div>
	);
}
