import { Github, ExternalLink, Presentation, Book, Code } from 'lucide-react';
import { Project } from '@/types/project';

type LinkConfig = {
    url: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
};

type Props = {
    project: Project;
};

export default function ProjectLinks({ project }: Props) {
    const links: LinkConfig[] = [];

    if (project['Code repository']) {
        links.push({
            url: project['Code repository'],
            icon: Github,
            label: 'Code',
        });
    }
    if (project['Demo App']) {
        links.push({
            url: project['Demo App'],
            icon: ExternalLink,
            label: 'Demo',
        });
    }
    if (project['Presentation recording']) {
        links.push({
            url: project['Presentation recording'],
            icon: Presentation,
            label: 'Recording',
        });
    }
    if (project['Presentation slides']) {
        links.push({
            url: project['Presentation slides'],
            icon: Book,
            label: 'Slides',
        });
    }
    if (project['Hex notebook']) {
        links.push({
            url: project['Hex notebook'],
            icon: Code,
            label: 'Notebook',
        });
    }

    if (links.length === 0) return null;

    return (
        <div className="mt-6 flex flex-wrap gap-3">
            {links.map(({ url, icon: Icon, label }) => (
                <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition text-gray-700 text-sm font-medium"
                >
                    <Icon className="w-4 h-4" />
                    {label}
                </a>
            ))}
        </div>
    );
}
