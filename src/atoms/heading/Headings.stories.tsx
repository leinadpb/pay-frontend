import Heading, { HeadingProps } from "./Heading";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Headings",
  component: Heading,
};

const Template: ComponentStory<typeof Heading> = (args: HeadingProps) => (
  <Heading {...args} />
);

export const HeadingH1 = Template.bind({});
HeadingH1.args = {
  type: "h1",
  label: "Heading H1",
  colorWeight: 700,
  fontWeight: "font-normal",
};
HeadingH1.storyName = "Heading H1";
HeadingH1.argTypes = {
  colorWeight: {
    defaultValue: 700,
    options: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    control: { type: "select" },
  },
  fontWeight: {
    defaultValue: "font-normal",
    options: ["font-normal", "font-medium", "font-semibold", "font-bold"],
    control: { type: "select" },
  },
};

export const HeadingH2 = Template.bind({});
HeadingH2.args = {
  type: "h2",
  label: "Heading H2",
  colorWeight: 700,
};
HeadingH2.storyName = "Heading H2";
HeadingH2.argTypes = { ...HeadingH1.argTypes };

export const HeadingH3 = Template.bind({});
HeadingH3.args = {
  type: "h3",
  label: "Heading H3",
  colorWeight: 700,
};
HeadingH3.storyName = "Heading H3";
HeadingH3.argTypes = { ...HeadingH1.argTypes };

export const HeadingH4 = Template.bind({});
HeadingH4.args = {
  type: "h4",
  label: "Heading H4",
  colorWeight: 700,
};
HeadingH4.storyName = "Heading H4";
HeadingH4.argTypes = { ...HeadingH1.argTypes };

export const HeadingH5 = Template.bind({});
HeadingH5.args = {
  type: "h5",
  label: "Heading H5",
  colorWeight: 700,
};
HeadingH5.storyName = "Heading H5";
HeadingH5.argTypes = { ...HeadingH1.argTypes };

export const HeadingH6 = Template.bind({});
HeadingH6.args = {
  type: "h6",
  label: "Heading H6",
};
HeadingH6.storyName = "Heading H6";
HeadingH6.argTypes = { ...HeadingH1.argTypes };
