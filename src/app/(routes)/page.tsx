import Hero from "../components/pages/Hero";
import Menu from "../components/pages/Menu";
import Navbar from "../components/layout/Navbar";

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
