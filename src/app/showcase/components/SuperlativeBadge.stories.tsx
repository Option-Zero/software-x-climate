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
        superlative: 'Best Overall',
    },
};

export const MostInteresting: Story = {
    args: {
        superlative: 'Most Interesting',
    },
};

export const BestExecution: Story = {
    args: {
        superlative: 'Best Execution',
    },
};

export const UnknownSuperlative: Story = {
    args: {
        superlative: 'Some Other Award',
    },
};
