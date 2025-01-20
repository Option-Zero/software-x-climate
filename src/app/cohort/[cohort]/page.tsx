'use client';
import * as React from 'react';
import Link from 'next/link.js';
import { notFound } from 'next/navigation.js';
import Typography from '@mui/material/Typography';

import {
    CURRENT_COHORT,
    PER_COHORT_LINKS,
    STATIC_LINKS,
} from '../softwareForClimateCourseLinks.js';
import { Container } from '@mui/material';

const cohortExists = (cohort: string): cohort is keyof typeof PER_COHORT_LINKS => {
    return cohort in PER_COHORT_LINKS;
};

type LinkConfig = {
    name: string;
    slug: string;
    url: string;
};

const Links = ({ linkConfigs }: { linkConfigs: LinkConfig[] }) => {
    const linksListItems = linkConfigs.map(({ name, url }) => {
        return (
            <li key={name}>
                <Link href={url} rel="noopener noreferrer" target="_blank">
                    {name}
                </Link>
            </li>
        );
    });

    return <ul>{linksListItems}</ul>;
};

export default function Home({ params }: { params: { cohort: string } }) {
    const cohort = params.cohort == 'current' ? CURRENT_COHORT : params.cohort;

    if (!cohortExists(cohort)) {
        return notFound();
    }

    return (
        <Container maxWidth="lg">
            <Typography variant="h3">Software for Climate - Cohort {cohort}</Typography>
            <Typography variant="h4">Course links</Typography>
            <Typography variant="h5">Static</Typography>
            <Links linkConfigs={STATIC_LINKS} />
            <Typography variant="h5">Per-cohort</Typography>
            <Links linkConfigs={PER_COHORT_LINKS[cohort]} />
        </Container>
    );
}
