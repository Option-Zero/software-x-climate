'use client';

import React, { useContext } from 'react';
import { Bebas_Neue } from 'next/font/google';

import { Card, CardContent, Stack, Typography } from '@mui/material';
import { CompaniesContext, Company } from '@/app/providers';

import CompanyLogo from '@/app/_components/CompanyLogo';
import Container from '@mui/material/Container';
import LoadingSkeleton from './LoadingSkeleton';

const bebas = Bebas_Neue({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
});

const DRAWDOWN_SOLUTIONS_HIERARCHY: Record<string, Record<string, string[]>> = {
    '1. Reduce sources': {
        Electricity: ['Shift Production', 'Enhance Efficiency'],
        'Food, Agriculture & Land Use': [
            'Address Waste & Diets',
            'Protect Ecosystems',
            'Shift Agricultural Practices',
        ],
        Industry: ['Address Refrigerants', 'Use Waste', 'Improve Materials'],
        Transport: ['Shift to Alternatives', 'Enhance Efficiency', 'Electrify Vehicles'],
        Buildings: ['Shift Energy Sources', 'Enhance Efficiency', 'Address Refrigerants'],
    },
    '2. Support sinks': {
        'Land Sinks': [
            'Shift Agricultural Practices',
            'Protect & Restore Ecosystems',
            'Use Degraded Land',
            'Address Waste & Diets',
        ],
        'Coastal & Ocean Sinks': ['Protect & Restore Ecosystems'],
        'Engineered Sinks': ['Remove & Store Carbon'],
    },
    '3. Improve society': {
        'Health & Education': [],
    },
};

const SECTOR_COLORS: Record<string, { light: string; medium: string; dark: string }> = {
    Electricity: { light: 'rgb(248,198,173)', medium: 'rgb(252,121,63)', dark: 'rgb(238,83,23)' },
    'Food, Agriculture & Land Use': {
        light: 'rgb(190,206,169)',
        medium: 'rgb(106,146,68)',
        dark: 'rgb(91,146,36)',
    },
    Industry: {
        light: 'rgb(200,214,244)',
        medium: 'rgb(115,152,220)',
        dark: 'rgb(82,127,211)',
    },
    Transport: {
        light: 'rgb(177,223,225)',
        medium: 'rgb(63,172,177)',
        dark: 'rgb(23,152,157)',
    },
    Buildings: {
        light: 'rgb(228,207,232)',
        medium: 'rgb(185,131,194)',
        dark: 'rgb(169,99,176)',
    },
    'Land Sinks': {
        light: 'rgb(233,215,175)',
        medium: 'rgb(200,150,60)',
        dark: 'rgb(187,125,20)',
    },
    'Coastal & Ocean Sinks': {
        light: 'rgb(177,212,222)',
        medium: 'rgb(79,158,180)',
        dark: 'rgb(23,116,150)',
    },
    'Engineered Sinks': {
        light: 'rgb(224,220,209)',
        medium: 'rgb(183,170,153)',
        dark: 'rgb(152,135,109)',
    },
    'Health & Education': {
        light: 'rgb(235,213,203)',
        medium: 'rgb(194,121,92)',
        dark: 'rgb(194,121,92)',
    },
};

const ProjectDrawdownLink = (
    <a href="https://drawdown.org/drawdown-foundations" rel="noopener noreferrer" target="_blank">
        Project Drawdown
    </a>
);

export default function DrawdownSolutionsSectors() {
    const { companies, loading } = useContext(CompaniesContext);

    if (loading) {
        return <LoadingSkeleton />;
    }

    return (
        <Container maxWidth="xl">
            <Typography variant="h1" sx={{ mb: 2, fontFamily: bebas.style.fontFamily }}>
                Drawdown Solutions Sectors
            </Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Adapted from the {ProjectDrawdownLink} Framework for Climate Solutions
            </Typography>

            <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
                {Object.keys(DRAWDOWN_SOLUTIONS_HIERARCHY).map((category) => (
                    <Category
                        key={category}
                        category={category}
                        sectors={DRAWDOWN_SOLUTIONS_HIERARCHY[category]}
                        companies={companies}
                    />
                ))}
            </Stack>
        </Container>
    );
}

const Category = ({
    category,
    sectors,
    companies,
}: {
    category: string;
    sectors: Record<string, string[]>;
    companies: Company[];
}) => {
    return (
        <Container maxWidth="xl">
            <Typography variant="h2" sx={{ fontFamily: bebas.style.fontFamily }}>
                {category}
            </Typography>
            <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
                {Object.keys(sectors).map((sector) => (
                    <Sector
                        key={sector}
                        sector={sector}
                        subgroups={sectors[sector]}
                        companies={companies.filter(
                            (company) => company['Drawdown sector'] == sector
                        )}
                    />
                ))}
            </Stack>
        </Container>
    );
};

const Sector = ({
    sector,
    subgroups,
    companies,
}: {
    sector: string;
    subgroups: string[];
    companies: Company[];
}) => {
    return (
        <Card sx={{ bgcolor: SECTOR_COLORS[sector]?.light }} elevation={2}>
            <CardContent>
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: bebas.style.fontFamily,
                        color: SECTOR_COLORS[sector]?.dark,
                        pb: '20px',
                    }}
                >
                    {sector}
                </Typography>
                <Container maxWidth="md">
                    <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
                        {subgroups.map((subgroup) => (
                            <Subgroup
                                key={subgroup}
                                subgroup={subgroup}
                                color={SECTOR_COLORS[sector]?.medium}
                                companies={companies.filter(
                                    (company) => company['Drawdown subgroup'] == subgroup
                                )}
                            />
                        ))}
                        {/* Add a catch-all for unknown/undefined subgroups */}
                        <Subgroup
                            key={'other'}
                            subgroup={'Other'}
                            color={SECTOR_COLORS[sector]?.medium}
                            companies={companies.filter(
                                (company) => company['Drawdown subgroup'] == null
                            )}
                        />
                        {/* <CompanyLogos
                            companies={companies.filter(
                                (company) => company['Drawdown subgroup'] == null
                            )}
                        /> */}
                    </Stack>
                </Container>
            </CardContent>
        </Card>
    );
};

const Subgroup = ({
    subgroup,
    color,
    companies,
}: {
    subgroup: string;
    color: string;
    companies: Company[];
}) => {
    return (
        <Card sx={{ bgcolor: color }} elevation={1}>
            <CardContent>
                <Typography variant="h6" sx={{ mb: 1, color: 'white' }}>
                    {subgroup}
                </Typography>
                <CompanyLogos companies={companies} />
            </CardContent>
        </Card>
    );
};

const CompanyLogos = ({ companies }: { companies: Company[] }) => {
    const companyLogos = companies.map((company) => (
        <CompanyLogo key={company.Name} company={company} />
    ));

    return (
        <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
            {companyLogos}
        </Stack>
    );
};
