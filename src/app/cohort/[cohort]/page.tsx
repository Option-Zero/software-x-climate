'use client';
import * as React from 'react';
import Link from 'next/link.js';
import { notFound } from 'next/navigation.js';
import Typography from '@mui/material/Typography';

import { COHORT_LINKS, CURRENT_COHORT } from '../perCohortLinks.js';

const cohortExists = (cohort: string): cohort is keyof typeof COHORT_LINKS => {
    return cohort in COHORT_LINKS;
};

export default function Home({ params }: { params: { cohort: string } }) {
    const cohort = params.cohort == 'current' ? CURRENT_COHORT : params.cohort;

    if (!cohortExists(cohort)) {
        return notFound();
    }

    const links = COHORT_LINKS[CURRENT_COHORT].map(({ name, url }) => {
        return (
            <li key={name}>
                <Link href={url as string} rel="noopener noreferrer" target="_blank">
                    {name}
                </Link>
            </li>
        );
    });

    return (
        <>
            <Typography variant="h4">Cohort {cohort} Links</Typography>
            <nav>
                <ul>{links}</ul>
            </nav>
        </>
    );
}
