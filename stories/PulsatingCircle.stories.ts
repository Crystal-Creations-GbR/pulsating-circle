import type { Meta, StoryObj } from "@storybook/vue3";
import { PulsatingCircle } from "../src";

const meta: Meta<typeof PulsatingCircle> = {
  component: PulsatingCircle,
  argTypes: {
    color: {
      control: { type: "color", presetColors: ["red", "green", "blue"] },
    },
    size: "number",
  },
  args: {
    size: 64,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Red: Story = {
  args: {
    color: "red",
  },
};

export const Green: Story = {
  args: {
    color: "green",
  },
};

export const Blue: Story = {
  args: {
    color: "blue",
  },
};
