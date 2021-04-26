import React from "react";

export default function Post(props) {
	return (
		<div className="container mb-4 border p-2 rounded">
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
				<h1 className="font-semibold">{props.user}</h1>
			</div>
			<img src={props.src} className="w-60" />
			<h1 className="text-xl font-bold">{props.title}</h1>
			<p>{props.post}</p>
			<div
				className="container w-full flex justify-between"
				style={{ height: 20 }}
			>
				<p>
					<strong>Date:</strong> {props.date}
				</p>
				<div className="flex justify-between w-44">
					<p>
						<strong>Likes:</strong> {Math.floor(Math.random() * 100)}
					</p>
					<p>
						<strong>Comment:</strong> {Math.floor(Math.random() * 100)}
					</p>
				</div>
			</div>
		</div>
	);
}
