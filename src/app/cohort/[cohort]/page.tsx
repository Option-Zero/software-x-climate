'use client';
import * as React from 'react';
import Link from 'next/link.js';
import { notFound } from 'next/navigation.js';
import Typography from '@mui/material/Typography';

import {
    PER_COHORT_LINKS,
    STATIC_LINKS,
    CURRENT_COHORT,
} from '../softwareForClimateCourseLinks.js';
import { Container } from '@mui/material';

const cohortExists = (cohort: string): cohort is keyof typeof PER_COHORT_LINKS => {
    return cohort in PER_COHORT_LINKS;
};

export default function Home({ params }: { params: { cohort: string } }) {
    const cohort = params.cohort == 'current' ? CURRENT_COHORT : params.cohort;

    if (!cohortExists(cohort)) {
        return notFound();
    }

    const perCohortLinks = PER_COHORT_LINKS[cohort].map(({ name, url }) => {
        return (
            <li key={name}>
                <Link href={url as string} rel="noopener noreferrer" target="_blank">
                    {name}
                </Link>
            </li>
        );
    });

    const staticLinks = STATIC_LINKS.map(({ name, url }) => {
        return (
            <li key={name}>
                <Link href={url as string} rel="noopener noreferrer" target="_blank">
                    {name}
                </Link>
            </li>
        );
    });

    return (
        <Container maxWidth="lg">
            <Typography variant="h3">Software for Climate - Cohort {cohort}</Typography>
            <Typography variant="h4">Course links</Typography>
            <Typography variant="h5">Static</Typography>
            <ul>{staticLinks}</ul>
            <Typography variant="h5">Per-cohort</Typography>
            <ul>{perCohortLinks}</ul>
        </Container>
    );
}
