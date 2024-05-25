"use client";

import React, { useEffect } from "react";

const colorMap: { [key: string]: string } = {
	red: "bg-red-500",
	blue: "bg-blue-500",
	green: "bg-green-500",
	yellow: "bg-yellow-500",
	purple: "bg-purple-500",
	pink: "bg-pink-500",
	slate: "bg-slate-500",
	orange: "bg-orange-500",
};

export default function Player({
	life: initialLife,
	color,
}: { life: number; color: string }) {
	const [life, setLife] = React.useState(initialLife);

	const increaseLife = () => {
		setLife(life + 1);
	};

	const decreaseLife = () => {
		setLife(life - 1);
	}

	useEffect(() => {
		setLife(initialLife);
	}, [initialLife]);

	return (
		<div
			className={`${colorMap[color]} rounded-lg  justify-center p-10 flex 
				text-black h-full items-center gap-4`}>

			<button type="button" onClick={decreaseLife}>
				-
			</button>

			{life}

			<button type="button" onClick={increaseLife}>
				+
			</button>

		</div>
	);
}
