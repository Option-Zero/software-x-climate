import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Company } from '@/app/providers';
import { Box, Tooltip, Typography } from '@mui/material';

const openInNewTabProps = {
    rel: 'noopener noreferrer',
    target: '_blank',
};

const CompanyDetails = ({ company }: { company: Company }) => (
    <Box>
        <Typography variant="h6">{company.Name}</Typography>
        <Link href={company.Website || ''} {...openInNewTabProps}>
            {company.Website}
        </Link>
        <Typography variant="body2">{company.Summary}</Typography>
    </Box>
);

const CompanyLogo = ({ company }: { company: Company }) => {
    return (
        <Link href={company.Website || ''} {...openInNewTabProps}>
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
        </Link>
    );
};

export default CompanyLogo;
