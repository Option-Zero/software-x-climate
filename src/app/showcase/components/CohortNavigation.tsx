'use client';

import { useEffect, useState } from 'react';

type Props = {
    cohorts: string[];
};

export default function CohortNavigation({ cohorts }: Props) {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5, rootMargin: '-100px 0px -50% 0px' }
        );

        cohorts.forEach((cohort) => {
            const element = document.getElementById(`cohort-${cohort}`);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [cohorts]);

    const handleClick = (cohort: string) => {
        const element = document.getElementById(`cohort-${cohort}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (cohorts.length === 0) {
        return null;
    }

    return (
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex items-center py-3 overflow-x-auto">
                    <span className="text-sm font-medium text-gray-600 mr-4 whitespace-nowrap">
                        See projects from:
                    </span>
                    <div className="flex gap-2">
                        {cohorts.map((cohort, index) => (
                            <button
                                key={cohort}
                                onClick={() => handleClick(cohort)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                                    activeSection === `cohort-${cohort}`
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {cohort} cohort
                                {index < cohorts.length - 1 ? '' : ''}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
