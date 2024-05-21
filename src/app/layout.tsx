import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { CompaniesProvider } from '@/app/providers';

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
                <CompaniesProvider>
                    <Container maxWidth="lg">
                        <Box
                            sx={{
                                my: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {children}
                        </Box>
                    </Container>
                </CompaniesProvider>
            </body>
        </html>
    );
}
