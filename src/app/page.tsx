'use client';
import React from 'react';
import Link from 'next/link';

const FRAMEWORK_PAGES = ['bits-vs-atoms', 'what-is-the-product', 'drawdown-solutions-sectors'];

const Home = () => {
    const links = FRAMEWORK_PAGES.map((pageName) => {
        return (
            <li key={pageName}>
                <Link href={`/frameworks/${pageName}`}>{pageName}</Link>
            </li>
        );
    });

    return (
        <>
            <h1>Software x Climate frameworks</h1>
            <nav>
                <ul>{links}</ul>
            </nav>
        </>
    );
};

export default Home;
