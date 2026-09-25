import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary', label: 'Button' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', label: 'Button' },
};

export const Large: Story = {
  args: { size: 'large', label: 'Button' },
};

export const Small: Story = {
  args: { size: 'small', label: 'Button' },
};
