'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

const FRAMEWORK_PAGES = ['bits-vs-atoms', 'what-is-the-product', 'drawdown-solutions-sectors'];

export default function Home() {
    const links = FRAMEWORK_PAGES.map((pageName) => {
        return (
            <li key={pageName}>
                <Link href={`/frameworks/${pageName}`} component={NextLink}>
                    {pageName}
                </Link>
            </li>
        );
    });
    return (
        <>
            <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                Software x Climate Frameworks
            </Typography>
            <nav>
                <ul>{links}</ul>
            </nav>
        </>
    );
}
