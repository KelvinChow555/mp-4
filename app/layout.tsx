import React from "react";
import type { Metadata } from "next";
import GlobalStyle from "@/component/GlobalStyle";
export const metadata: Metadata = {
    title: "Stock Lookup",
    description: "Company details and latest prices from the Massive API",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <GlobalStyle />
                {children}
            </body>
        </html>
    );
}