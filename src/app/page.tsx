import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="container mx-auto h-96">
				<Hero />
				<Menu />
			</div>
		</>
	);
}
