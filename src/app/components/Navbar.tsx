import Link from "next/link";
import ThemeButton from "./theme/ThemeButton";

export default function Navbar() {
	return (
		<div className="flex justify-between items-center w-full border-b border-gray-950/5 dark:border-white/20">
			<header className="flex w-full justify-between items-center py-4 px-8">
				<Link href="/" className="text-2xl font-bold pr-16">
					Quiz Reader
				</Link>
				<ul className="flex justify-between items-center gap-10">
					<li>
						<Link href="/play" className="text-xl relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
							Play
						</Link>
					</li>
					<li>
						<Link href="/about" className="text-xl relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
							About
						</Link>
					</li>
					<li>
						<Link href="/settings" className="text-xl relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
							Settings
						</Link>
					</li>
					<ThemeButton />
				</ul>
			</header>
		</div>
	);
}
