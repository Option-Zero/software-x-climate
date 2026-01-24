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

export const CompaniesContext = createContext<{ companies: Company[]; loading: boolean }>({
    companies: [],
    loading: true,
});

export const CompaniesProvider = ({ children }: { children: React.ReactNode }) => {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/companies');
                const result = await response.json();
                setCompanies(result.data);
            } catch (error) {
                console.error('Failed to fetch companies:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <CompaniesContext.Provider value={{ companies, loading }}>
            {children}
        </CompaniesContext.Provider>
    );
};
