import Menu from "@/app/components/ui/hero/Menu";

export default function Hero() {
	return (
		<>
			<div className="flex flex-col items-center h-full text-center pt-24 justify-center">
				<h1 className="text-5xl font-bold mb-6">Welcome to Quiz Reader</h1>
				<p className="text-lg text-gray-400 mb-8 max-w-lg">Challenge yourself with AI-generated trivia questions.</p>
				<button className="px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">Start Game</button>
			</div>

			<Menu />
		</>
	);
}
