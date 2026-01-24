import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProjectCard from './ProjectCard';
import type { Project } from '@/types/project';

const mockProject: Project = {
    id: 'rec123',
    Name: 'Sample Climate Project',
    Description: `# Climate Action Dashboard

A comprehensive dashboard for tracking climate metrics and visualizing environmental data.

## Key Features
- Real-time data updates
- Interactive visualizations
- Mobile-responsive design
`,
    Team: 'Alice Johnson, Bob Smith, Carol Williams',
    Cohort: 'Feb 2025',
    'Hero Image': [
        {
            id: 'att123',
            url: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800',
            filename: 'project-hero.png',
            size: 1024000,
            type: 'image/png',
            width: 1200,
            height: 630,
            thumbnails: {
                small: {
                    url: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=200',
                    width: 200,
                    height: 105,
                },
                large: {
                    url: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=500',
                    width: 500,
                    height: 263,
                },
                full: {
                    url: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800',
                    width: 800,
                    height: 420,
                },
            },
        },
    ],
    'Code repository': 'https://github.com/example/project',
    'Demo app': 'https://example.com/demo',
    'Presentation slides': 'https://example.com/slides',
    Created: '2025-02-15T00:00:00.000Z',
};

const mockSuperlativeProject: Project = {
    ...mockProject,
    id: 'rec456',
    Name: 'Award-Winning Climate Solution',
    Superlative: ['Best Overall'],
    'Has Superlative': true,
};

const meta = {
    title: 'Showcase/ProjectCard',
    component: ProjectCard,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Collapsed: Story = {
    args: {
        project: mockProject,
        isExpanded: false,
        onToggle: () => {},
        showSuperlative: false,
        alwaysExpanded: false,
    },
};

export const Expanded: Story = {
    args: {
        project: mockProject,
        isExpanded: true,
        onToggle: () => {},
        showSuperlative: false,
        alwaysExpanded: false,
    },
};

export const SuperlativeExpanded: Story = {
    args: {
        project: mockSuperlativeProject,
        isExpanded: true,
        onToggle: () => {},
        showSuperlative: true,
        alwaysExpanded: true,
    },
};

export const NoImage: Story = {
    args: {
        project: {
            ...mockProject,
            'Hero Image': undefined,
        },
        isExpanded: true,
        onToggle: () => {},
        showSuperlative: false,
        alwaysExpanded: false,
    },
};

export const NoLinks: Story = {
    args: {
        project: {
            ...mockProject,
            'Code repository': undefined,
            'Demo app': undefined,
            'Presentation slides': undefined,
        },
        isExpanded: true,
        onToggle: () => {},
        showSuperlative: false,
        alwaysExpanded: false,
    },
};
