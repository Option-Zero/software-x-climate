import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import InfoTooltip from './InfoTooltip';

const meta = {
    title: 'Showcase/InfoTooltip',
    component: InfoTooltip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof InfoTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        content:
            'Superlatives are assigned within each cohort by a vote of all the students in that cohort.',
    },
};

export const ShortText: Story = {
    args: {
        content: 'This is a short tooltip.',
    },
};

export const LongText: Story = {
    args: {
        content:
            'This is a much longer tooltip that contains more detailed information about something. It should wrap nicely and display properly even with longer content.',
    },
};
