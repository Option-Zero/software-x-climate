'use client';

import { ChevronDown, Link as LinkIcon } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import { Project } from '@/types/project';
import { parseTeamMembers } from '@/lib/utils';
import SuperlativeBadge from './SuperlativeBadge';
import ProjectLinks from './ProjectLinks';
import TeamMembers from './TeamMembers';
import ImageModal from './ImageModal';

type Props = {
    project: Project;
    isExpanded: boolean;
    onToggle: () => void;
    showSuperlative?: boolean;
    alwaysExpanded?: boolean;
    superlativeCounts?: Record<string, number>;
};

export default function ProjectCard({
    project,
    isExpanded,
    onToggle,
    showSuperlative = false,
    alwaysExpanded = false,
    superlativeCounts,
}: Props) {
    const anchorId = project.id.slice(-6);
    const teamMembers = parseTeamMembers(project.Team);
    const heroImage = project['Hero Image']?.[0];
    const [showImageModal, setShowImageModal] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopyLink = (e: React.MouseEvent) => {
        e.stopPropagation();
        const url = `${window.location.origin}${window.location.pathname}#${anchorId}`;
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);

        // Expand the project if it's not already expanded
        if (!isExpanded && !alwaysExpanded) {
            onToggle();
        }

        // Update the URL hash
        window.history.replaceState(null, '', `#${anchorId}`);
    };

    return (
        <>
            <div
                id={anchorId}
                className="bg-white rounded-lg shadow-lg overflow-hidden scroll-mt-24 h-full w-full flex flex-col"
            >
                {/* Header (always visible) */}
                <button
                    onClick={alwaysExpanded ? undefined : onToggle}
                    className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                        alwaysExpanded ? 'cursor-default' : 'hover:bg-gray-50'
                    }`}
                    aria-expanded={isExpanded}
                    disabled={alwaysExpanded}
                >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                        {/* Thumbnail when collapsed */}
                        {!isExpanded && heroImage && !alwaysExpanded && (
                            <div className="flex-shrink-0 w-16 h-16 rounded overflow-hidden animate-in fade-in slide-in-from-left-2 duration-300">
                                <img
                                    src={heroImage.thumbnails.small.url}
                                    alt={project.Name}
                                    className="w-16 h-16 object-cover"
                                />
                            </div>
                        )}

                        <div className="flex-1 min-w-0">
                            <div className="flex items-start gap-3 mb-2 flex-wrap">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {project.Name}{' '}
                                    <a
                                        href={`#${anchorId}`}
                                        onClick={handleCopyLink}
                                        className="inline-flex items-center p-1 hover:bg-gray-200 rounded transition-colors align-middle"
                                        title={
                                            copied ? 'Copied!' : 'Link to project (click to copy)'
                                        }
                                        aria-label="Link to project"
                                    >
                                        <LinkIcon
                                            className={`w-4 h-4 ${copied ? 'text-green-600' : 'text-gray-400'}`}
                                        />
                                    </a>
                                </h3>
                                {showSuperlative && project.Superlative && (
                                    <div className="flex gap-2 flex-wrap">
                                        {project.Superlative.map((badge) => (
                                            <SuperlativeBadge
                                                key={badge}
                                                label={badge}
                                                count={superlativeCounts?.[badge]}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                            <TeamMembers members={teamMembers} />
                        </div>
                    </div>

                    {!alwaysExpanded && (
                        <ChevronDown
                            className={`w-6 h-6 transition-transform flex-shrink-0 ml-4 duration-300 ${
                                isExpanded ? 'rotate-180' : ''
                            }`}
                        />
                    )}
                </button>

                {/* Expanded content with smooth animation */}
                <div
                    className={`border-t border-gray-200 transition-all duration-300 ease-in-out ${
                        isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 border-t-0'
                    }`}
                    style={{ overflow: 'hidden' }}
                >
                    <div className="p-6">
                        {/* Responsive layout: image + description */}
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Hero image */}
                            {heroImage && (
                                <div className="lg:w-1/3 flex-shrink-0">
                                    <img
                                        src={heroImage.url}
                                        alt={project.Name}
                                        className="w-full rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                        onClick={() => setShowImageModal(true)}
                                        loading="lazy"
                                    />
                                </div>
                            )}

                            {/* Description */}
                            <div className="flex-1">
                                {project.Description ? (
                                    <div className="prose max-w-none text-gray-700">
                                        <ReactMarkdown>{project.Description}</ReactMarkdown>
                                    </div>
                                ) : (
                                    <p className="text-gray-500 italic">No description available</p>
                                )}
                            </div>
                        </div>

                        {/* Project links */}
                        <ProjectLinks project={project} />
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {showImageModal && heroImage && (
                <ImageModal
                    imageUrl={heroImage.url}
                    alt={project.Name}
                    onClose={() => setShowImageModal(false)}
                />
            )}
        </>
    );
}
