import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header, { HeaderProps } from "./Header";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: HeaderProps) => (
  <Header {...args} />
);

export const MyHeader = Template.bind({});
MyHeader.args = {
  actionButtonText: undefined,
};
MyHeader.storyName = "App Header";
