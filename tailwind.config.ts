import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#ededed",
                    dark: "#0a0a0a",
                },
                secondary: {
                    light: "#f5f5f5",
                    dark: "#1a1a1a",
                },
            },
        },
    },
    plugins: [],
};
export default config;
