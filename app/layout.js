import { Header } from "../components/Header";
import { metadata } from '../constants/metadata'
import { Analytics } from '@vercel/analytics/react';

export const metadataBase = metadata.metadataBase;

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}) {
	return (
		<html lang="en">
			<body>
				<Header />

				<main className="main mt-10">
					{children}
				</main>
				<Analytics />
			</body>
		</html>
	);
}
