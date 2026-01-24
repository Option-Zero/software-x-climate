'use client';

import { useState } from 'react';

type Props = {
    label: string;
};

const BADGE_COLORS: Record<string, string> = {
    'Best Overall': 'bg-yellow-100 text-yellow-800 border-yellow-300',
    'Most Interesting': 'bg-purple-100 text-purple-800 border-purple-300',
    'Best Execution': 'bg-blue-100 text-blue-800 border-blue-300',
    default: 'bg-green-100 text-green-800 border-green-300',
};

export default function SuperlativeBadge({ label }: Props) {
    const [showTooltip, setShowTooltip] = useState(false);
    const colorClass = BADGE_COLORS[label] || BADGE_COLORS.default;

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border cursor-help ${colorClass}`}
            >
                ⭐ {label}
            </span>
            {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-20 pointer-events-none">
                    Awarded by student vote within this cohort
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                        <div className="border-8 border-transparent border-t-gray-900"></div>
                    </div>
                </div>
            )}
        </div>
    );
}
