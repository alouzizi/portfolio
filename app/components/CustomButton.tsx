import React from "react";

interface CustomButtonProps {
	lable: string;
	isSelect?: boolean;
}

export const CustomButton = ({ lable, isSelect = false }: CustomButtonProps) => {
	return (
		<button
			className={`hover:bg-white hover:bg-opacity-10 px-8 py-4 m-2 rounded-full ${
				isSelect ? "bg-oronge" : "bg-black"
			}`}
		>
			{lable}
		</button>
	);
};
