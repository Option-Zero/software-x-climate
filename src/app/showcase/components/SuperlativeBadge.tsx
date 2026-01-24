'use client';

import { useState, useRef } from 'react';

type Props = {
    label: string;
    count?: number;
};

const BADGE_COLORS: Record<string, string> = {
    'Best Overall': 'bg-yellow-100 text-yellow-800 border-yellow-300',
    'Most Interesting': 'bg-purple-100 text-purple-800 border-purple-300',
    'Best Execution': 'bg-blue-100 text-blue-800 border-blue-300',
    default: 'bg-green-100 text-green-800 border-green-300',
};

export default function SuperlativeBadge({ label, count }: Props) {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const badgeRef = useRef<HTMLDivElement>(null);
    const colorClass = BADGE_COLORS[label] || BADGE_COLORS.default;

    // Format tie text if multiple winners
    const tieText = count && count > 1 ? ` (${count}-way tie)` : '';

    const handleMouseEnter = () => {
        if (badgeRef.current) {
            const rect = badgeRef.current.getBoundingClientRect();
            setTooltipPosition({
                x: rect.left + rect.width / 2,
                y: rect.top,
            });
        }
        setShowTooltip(true);
    };

    return (
        <div
            ref={badgeRef}
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border cursor-help ${colorClass}`}
            >
                ⭐ {label}
                {tieText}
            </span>
            {showTooltip && (
                <div
                    className="fixed w-64 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-[100] pointer-events-none"
                    style={{
                        left: `${tooltipPosition.x}px`,
                        top: `${tooltipPosition.y}px`,
                        transform: 'translate(-50%, calc(-100% - 0.5rem))',
                    }}
                >
                    Awarded by student vote within this cohort
                    {count && count > 1 && `. In this case, there was a ${count}-way tie.`}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                        <div className="border-8 border-transparent border-t-gray-900"></div>
                    </div>
                </div>
            )}
        </div>
    );
}
