import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';

export const metadata: Metadata = {
    title: 'Software x Climate',
    description: 'Overview of software x climate landscape',
};

const ibmplex = IBM_Plex_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body lang="en" className={ibmplex.className}>
                {children}
            </body>
        </html>
    );
}
