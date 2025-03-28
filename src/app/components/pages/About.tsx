export default function About() {
	return (
		<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
			<h2 className="mb-8 text-center text-4xl tracking-tight font-bold">About Quiz Reader</h2>
			<div className="grid pt-8 text-left border-t border-gray-950/5 md:gap-16 dark:border-white/20 md:grid-cols-2">
				<div>
					<div className="mb-10">
						<h3 className="flex items-center mb-4 text-lg font-medium">What do you mean by "Figma assets"?</h3>
						<p className="text-gray-500 dark:text-gray-400">
							You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.
						</p>
					</div>
					<div className="mb-10">
						<h3 className="flex items-center mb-4 text-lg font-medium">What does "lifetime access" exactly mean?</h3>
						<p className="text-gray-500 dark:text-gray-400">Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.</p>
					</div>
					<div className="mb-10">
						<h3 className="flex items-center mb-4 text-lg font-medium">How does support work?</h3>
						<p className="text-gray-500 dark:text-gray-400">We're aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project.</p>{" "}
					</div>
					<div className="mb-10">
						<h3 className="flex items-center mb-4 text-lg font-medium">I want to build more than one project. Is that allowed?</h3>
						<p className="text-gray-500 dark:text-gray-400">
							You can use Windster for an unlimited amount of projects, whether it's a personal website, a SaaS app, or a website for a client. As long as you don't build a product that will directly compete with Windster either as a UI
							kit, theme, or template, it's fine.
						</p>{" "}
					</div>
				</div>
				<div>
					<div className="mb-10">
						<h3 className="flex items-center mb-4 text-lg font-medium">What does "free updates" include?</h3>
						<p className="text-gray-500 dark:text-gray-400">
							The free updates that will be provided is based on the{" "}
							<a href="#" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">
								roadmap
							</a>{" "}
							that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.
						</p>
					</div>
					<div className="mb-10">
						<h3 className="flex items-center mb-4 text-lg font-medium">What does the free version include?</h3>
						<p className="text-gray-500 dark:text-gray-400">
							The{" "}
							<a href="#" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">
								free version
							</a>{" "}
							of Windster includes a minimal style guidelines, component variants, and a dashboard page with the mobile version alongside it.
						</p>
						<p className="text-gray-500 dark:text-gray-400">You can use this version for any purposes, because it is open-source under the MIT license.</p>
					</div>
					<div className="mb-10">
						<h3 className="flex items-center mb-4 text-lg font-medium">What is the difference between Windster and Tailwind UI?</h3>
						<p className="text-gray-500 dark:text-gray-400">
							Although both Windster and Tailwind UI are built for integration with Tailwind CSS, the main difference is in the design, the pages, the extra components and UI elements that Windster includes.
						</p>
						<p className="text-gray-500 dark:text-gray-400">Additionally, Windster is a project that is still in development, and later it will include both the application, marketing, and e-commerce UI interfaces.</p>
					</div>
					<div className="mb-10">
						<h3 className="flex items-center mb-4 text-lg font-medium">Can I use Windster in open-source projects?</h3>
						<p className="text-gray-500 dark:text-gray-400">
							Generally, it is accepted to use Windster in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to Windster itself.
						</p>
						<p className="text-gray-500 dark:text-gray-400">With that being said, feel free to use this design kit for your open-source projects.</p>
						<p className="text-gray-500 dark:text-gray-400">
							Find out more information by{" "}
							<a href="#" className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline">
								reading the license
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
