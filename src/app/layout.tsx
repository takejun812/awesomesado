import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const notoSansJp = Noto_Sans_JP({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-noto-sans",
});

export const metadata: Metadata = {
	title: "佐渡で野外活動するなら | オーサム",
	icons: [
		{
			rel: "icon",
			type: "image/png",
			url: "../../public/assets/icon/favicon.ico",
		},
		{
			rel: "apple-touch-icon",
			url: "../../public/assets/icon/favicon.ico",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja" className={`${inter.variable} ${notoSansJp.variable}`}>
			<body>{children}</body>
		</html>
	);
}
