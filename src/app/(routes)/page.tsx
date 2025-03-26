import Hero from "@/app/components/pages/Hero";
import Navbar from "@/app/components/layout/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="container mx-auto h-96">
				<Hero />
			</div>
		</>
	);
}
