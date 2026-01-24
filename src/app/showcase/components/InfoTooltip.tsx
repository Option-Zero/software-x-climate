'use client';

import { Info } from 'lucide-react';
import { useState } from 'react';

type Props = {
    content: string;
};

export default function InfoTooltip({ content }: Props) {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="relative inline-block">
            <button
                className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onClick={() => setShowTooltip(!showTooltip)}
                aria-label="More information"
            >
                <Info className="w-3 h-3" />
            </button>
            {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-10">
                    {content}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                        <div className="border-8 border-transparent border-t-gray-900"></div>
                    </div>
                </div>
            )}
        </div>
    );
}
