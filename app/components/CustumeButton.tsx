import React from "react";

interface CustumeButtonProps {
	lable: string;
	isSelect?: boolean;
}

export const CustumeButton = ({ lable, isSelect = false }: CustumeButtonProps) => {
	return (
		<button
			className={`hover:bg-white hover:bg-opacity-10 px-10 py-5 m-2 rounded-full ${
				isSelect ? "bg-oronge" : "bg-black"
			}`}
		>
			{lable}
		</button>
	);
};
