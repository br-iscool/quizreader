"use client";

import { ThemeProvider } from "next-themes";

interface ProviderProps {
    children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
    return (
        <ThemeProvider defaultTheme="system" enableSystem>{children}</ThemeProvider>
    );
}