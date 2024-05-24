'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

const FRAMEWORKS = [
    { name: 'Drawdown solutions sectors', path: 'drawdown-solutions-sectors' },
    { name: '[WIP] Bits vs. Atoms', path: 'bits-vs-atoms' },
    { name: '[WIP] What is the product?', path: 'what-is-the-product' },
];

export default function Home() {
    const links = FRAMEWORKS.map((framework) => {
        return (
            <li key={framework.path}>
                <Link href={`/frameworks/${framework.path}`} component={NextLink}>
                    {framework.name}
                </Link>
            </li>
        );
    });

    return (
        <>
            <Typography variant="h4">Software x Climate Frameworks</Typography>
            <nav>
                <ul>{links}</ul>
            </nav>
        </>
    );
}
