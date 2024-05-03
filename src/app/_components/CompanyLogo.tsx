import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Company } from '@/app/providers';

const Logo = ({ company }: { company: Company }) =>
    company.Logo?.url ? (
        <Image
            src={company.Logo.url}
            width="100"
            height="20"
            alt={`${company.Name} logo`}
            style={{ width: '100%', height: 'auto' }}
        />
    ) : (
        company.Name
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
