import React from "react";

export default function Suggestion(props) {
	return (
		<div className="mt-2 rounded">
			<div className="container flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
					/>
				</svg>
				<h1 className="font-semibold">{props.name}</h1>
			</div>
			<p>{props.bio}</p>
			<button className="bg-yellow-400 text-left my-1 rounded px-1 hover:bg-yellow-600 focus:outline-none">
				Follow
			</button>
			<hr className="mt-2"></hr>
		</div>
	);
}
