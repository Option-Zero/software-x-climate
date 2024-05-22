'use client';
import React, { createContext, useEffect, useState } from 'react';

export type Company = {
    Name: string;
    Logo: { url: string };
    Website: string;
    Summary: string;
    'Product category': string;
    'Drawdown sector': string;
    'Drawdown subgroup': string;
};

export const CompaniesContext = createContext<{ companies: Company[] }>({
    companies: [],
});

export const CompaniesProvider = ({ children }: { children: React.ReactNode }) => {
    const [companies, setCompanies] = useState<Company[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/companies');
            const result = await response.json();
            setCompanies(result.data);
        }

        fetchData();
    }, []);

    return <CompaniesContext.Provider value={{ companies }}>{children}</CompaniesContext.Provider>;
};
