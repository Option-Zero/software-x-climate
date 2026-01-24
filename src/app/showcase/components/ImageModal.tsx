'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';

type Props = {
    imageUrl: string;
    alt: string;
    onClose: () => void;
};

export default function ImageModal({ imageUrl, alt, onClose }: Props) {
    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    // Prevent scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
                aria-label="Close modal"
            >
                <X className="w-8 h-8" />
            </button>
            <img
                src={imageUrl}
                alt={alt}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
}
