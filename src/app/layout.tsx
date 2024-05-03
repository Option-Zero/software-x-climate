import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { CompaniesProvider } from '@/app/providers';

export const metadata: Metadata = {
    title: 'Software x Climate',
    description: 'Overview of software x climate landscape',
};

const roboto = Roboto({
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
            <body lang="en" className={roboto.className}>
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
