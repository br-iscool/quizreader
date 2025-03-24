import Link from "next/link";
import ThemeButton from "./theme/ThemeButton";

export default function Navbar() {
	return (
		<div className="flex justify-between items-center w-full border-b dark:border-white/20">
			<header className="flex w-full justify-between items-center py-4 px-8">
				<Link href="/" className="text-2xl font-bold pr-16">
					Quiz Reader
				</Link>
				<ul className="flex justify-between items-center gap-10">
					<li>
						<Link href="#" className="text-xl relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
							Lorem
						</Link>
					</li>
					<li>
						<Link href="#" className="text-xl relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
							Lorem
						</Link>
					</li>
					<li>
						<Link href="#" className="text-xl relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
							Lorem
						</Link>
					</li>
					<ThemeButton />
				</ul>
			</header>
		</div>
	);
}
