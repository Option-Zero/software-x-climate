import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SuperlativeBadge from './SuperlativeBadge';

const meta = {
    title: 'Showcase/SuperlativeBadge',
    component: SuperlativeBadge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SuperlativeBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BestOverall: Story = {
    args: {
        label: 'Best Overall',
    },
};

export const MostInteresting: Story = {
    args: {
        label: 'Most Interesting',
    },
};

export const BestExecution: Story = {
    args: {
        label: 'Best Execution',
    },
};

export const UnknownSuperlative: Story = {
    args: {
        label: 'Some Other Award',
    },
};

export const TwoWayTie: Story = {
    args: {
        label: 'Best Overall',
        count: 2,
    },
};

export const ThreeWayTie: Story = {
    args: {
        label: 'Most Interesting',
        count: 3,
    },
};
