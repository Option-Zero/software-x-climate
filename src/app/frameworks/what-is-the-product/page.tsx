'use client';

import React, { useContext } from 'react';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { CompaniesContext, Company } from '@/app/providers';

import CompanyLogo from '@/app/_components/CompanyLogo';

const ProductCategoryBox = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ProductCategory = ({
    categoryName,
    companies,
}: {
    categoryName: string;
    companies: Company[];
}) => {
    const companyLogos = companies.map((company) => (
        <CompanyLogo key={company.Name} company={company} />
    ));

    return (
        <Stack>
            <Typography variant="h5" sx={{ mb: 1 }}>
                {categoryName}
            </Typography>
            <ProductCategoryBox>
                <Stack spacing={2}>{companyLogos}</Stack>
            </ProductCategoryBox>
        </Stack>
    );
};

export default function WhatIsTheProduct() {
    const { companies } = useContext(CompaniesContext);

    const productCategories = [...new Set(companies.map((company) => company['Product category']))];

    return (
        <>
            <Typography variant="h1" sx={{ mb: 2 }}>
                [WIP] What is the product?
            </Typography>
            <Stack direction="row" spacing={2}>
                {productCategories.map((category) => (
                    <ProductCategory
                        key={category}
                        categoryName={category}
                        companies={companies.filter(
                            (company) => company['Product category'] == category
                        )}
                    />
                ))}
            </Stack>
        </>
    );
}
