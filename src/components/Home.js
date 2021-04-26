import React, { useState } from "react";
import Post from "./Post";
import SideContent from "./SideContent";

export default function Home() {
	const [data, setData] = useState([
		{
			user: "name1",
			title: "Title1",
			date: "4 April",
			src: "https://source.unsplash.com/random?sig=",
			post:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus lacinia nisl eu aliquet. Vestibulum suscipit ligula eu metus vehicula, condimentum pretium sapien tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ultricies semper laoreet.",
		},
		{
			user: "name2",
			date: "4 April",
			title: "Title2",
			src: "https://source.unsplash.com/random?sig=",
			post:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus lacinia nisl eu aliquet. Vestibulum suscipit ligula eu metus vehicula, condimentum pretium sapien tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ultricies semper laoreet.",
		},
		{
			user: "name3",
			date: "12 April",
			title: "Title3",
			src: "https://source.unsplash.com/random?sig=",
			post:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus lacinia nisl eu aliquet. Vestibulum suscipit ligula eu metus vehicula, condimentum pretium sapien tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ultricies semper laoreet.",
		},
		{
			user: "name3",
			date: "5 April",
			title: "Title4",
			src: "https://source.unsplash.com/random?sig=",
			post:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus lacinia nisl eu aliquet. Vestibulum suscipit ligula eu metus vehicula, condimentum pretium sapien tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ultricies semper laoreet.",
		},
		{
			user: "name5",
			date: "24 April",
			title: "Title5",
			src: "https://source.unsplash.com/random?sig=",
			post:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus lacinia nisl eu aliquet. Vestibulum suscipit ligula eu metus vehicula, condimentum pretium sapien tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ultricies semper laoreet.",
		},
	]);

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="container flex justify-between">
			<div className="flex flex-col" style={{ width: "70%" }}>
				{data
					? data.map((item) => {
							return (
								<Post
									user={item.user}
									title={item.title}
									src={item.src + Math.floor(Math.random() * 100)}
									post={item.post}
									date={item.date}
								/>
							);
					  })
					: false}
			</div>
			<div className="" style={{ width: "29%" }}>
				<SideContent />
			</div>
		</div>
	);
}
