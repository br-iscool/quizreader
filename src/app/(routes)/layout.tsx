import type { Metadata } from "next";
import "../styles/globals.css";
import { poppins } from "../utils/font";

import { Provider } from "../components/theme/Provider";

export const metadata: Metadata = {
	title: "Quiz Reader",
	description: "Quiz Reader - Online Quizbowl Judge",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${poppins.variable} antialiased`}>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
