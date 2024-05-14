import Image from "next/image";
import { CustumeButton } from "./components/CustumeButton";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-white">
			<nav className="w-10/12 flex flex-row justify-between rounded-full mt-10 h-20 bg-black">
				<CustumeButton lable="Home" isSelect={true} />
				<CustumeButton lable="About" />
				<CustumeButton lable="Service" />
				<div>Its me</div>
				<CustumeButton lable="Resume" />
				<CustumeButton lable="Projrct" />
				<CustumeButton lable="Contact" />
			</nav>
		</main>
	);
}
