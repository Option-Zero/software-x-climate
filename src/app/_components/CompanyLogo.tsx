import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Company } from '@/app/providers';
import { Box, Tooltip, Typography } from '@mui/material';

const CompanyDetails = ({ company }: { company: Company }) => (
    <Box>
        <Typography>{company.Name}</Typography>
        <Typography>{company.Website}</Typography>
    </Box>
);

const Logo = ({ company }: { company: Company }) => (
    <Tooltip title={<CompanyDetails company={company} />} arrow placement="right">
        {company.Logo?.url ? (
            <Image
                src={company.Logo.url}
                width="100"
                height="20"
                alt={`${company.Name} logo`}
                style={{ width: '100', height: 'auto' }}
            />
        ) : (
            <div>company.Name</div>
        )}
    </Tooltip>
);

const CompanyLogo = ({ company }: { company: Company }) => {
    return company.Website ? (
        <Link href={company.Website} rel="noopener noreferrer" target="_blank">
            <Logo company={company} />
        </Link>
    ) : (
        <Logo company={company} />
    );
};

export default CompanyLogo;
