import type { Metadata } from "next";
import "./../styles/globals.css";

import { Provider } from "./../components/theme/Provider";

export const metadata: Metadata = {
	title: "Quiz Reader",
	description: "Quiz Reader - Online Quizbowl Judge",
};

export default function PlayLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
        <Provider>{children}</Provider>
	);
}
