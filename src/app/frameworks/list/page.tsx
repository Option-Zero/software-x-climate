'use client';
import React, { useContext } from 'react';
import { CompaniesContext } from '@/app/providers';
import CompanyLogo from '@/app/_components/CompanyLogo';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function DataPage() {
    const { companies } = useContext(CompaniesContext);

    const companyLogos = companies.map((company) => {
        return <CompanyLogo key={company.Name} company={company} />;
    });

    return (
        <>
            <Typography variant="h1" sx={{ mb: 2 }}>
                Companies
            </Typography>
            <Stack spacing={2}>{companyLogos}</Stack>
        </>
    );
}

export default DataPage;
