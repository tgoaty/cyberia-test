import type {Metadata} from 'next';
import './globals.css';
import {ReactNode} from 'react';

export const metadata: Metadata = {
	title: 'Cyberia',
	description: '',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="ru">
			<body>{children}</body>
		</html>
	);
}
