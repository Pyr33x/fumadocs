import { DocsLayout } from "next-docs-ui/layout";
import { tree } from "./tree";
import { Inter } from "next/font/google";
import "next-docs-ui/style.css";

export const metadata = {
    title: "My App",
    description: "Generated by Next.js",
};

const inter = Inter({
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`dark ${inter.className}`}>
            <body style={{ minHeight: "100vh" }}>
                <DocsLayout tree={tree} navTitle="My App">
                    {children}
                </DocsLayout>
            </body>
        </html>
    );
}