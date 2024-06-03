import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { CompaniesProvider } from '@/app/providers';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
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
    );
}
