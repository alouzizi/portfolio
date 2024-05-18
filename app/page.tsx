import Image from "next/image";
import { CustomButton } from "./components/CustomButton";

import Vector1 from "../assets/Vector1.svg";
import Vector2 from "../assets/Vector2.svg";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-white">
			<div className="flex flex-col items-center justify-center w-full ">
				<nav className="w-10/12 flex flex-row justify-between items-center rounded-full mt-10 h-18 bg-black">
					<CustomButton lable="Home" isSelect={true} />
					<CustomButton lable="About" />
					<CustomButton lable="Service" />
					<div>Its me</div>
					<CustomButton lable="Resume" />
					<CustomButton lable="Project" />
					<CustomButton lable="Contact" />
				</nav>
				<div className="flex flex-row text-black mt-24 relative">
					<div className="border-2 rounded-full border-black px-6 py-2 decoration-solid">
						Hello!
					</div>
					<div className="absolute -top-6 -right-7 "
					>
						<Image
							src={Vector1}
							alt="Vector Graphic"
						/>
					</div>
				</div>
				<div className="relative">
					<div className="text-center mt-10">
						<h1 className="text-black text-6xl tracking-tight font-urbanist font-semibold">
							I'm <span className="text-orange-500">AliLou</span> ,
						</h1>
						<h1 className="text-black text-6xl tracking-tight font-urbanist font-semibold">
							software engineer
						</h1>
					</div>
					<div className="absolute bottom-3 left-2 transform translate-x-[-100%] translate-y-[100%]">
						<Image src={Vector2} alt="Vector Graphic" />
					</div>
				</div>
			</div>
		</main>
	);
}
