import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Company } from '@/app/providers';

const CompanyLogo = ({ company }: { company: Company }) => {
    return (
        <Link href={company.Website} rel="noopener noreferrer" target="_blank">
            {company.Logo.url ? (
                <Image
                    src={company.Logo.url}
                    width="100"
                    height="20"
                    alt={`${company.Name} logo`}
                    style={{ width: '100%', height: 'auto' }}
                />
            ) : (
                company.Name
            )}
        </Link>
    );
};

export default CompanyLogo;
