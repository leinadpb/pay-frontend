import { ComponentStory, ComponentMeta } from "@storybook/react";
import GoogleButton from "./GoogleButton";

export default {
  title: "Google Button",
  component: GoogleButton,
} as ComponentMeta<typeof GoogleButton>;

const Template: ComponentStory<typeof GoogleButton> = (args: {}) => (
  <GoogleButton {...args} />
);

export const SocialButton = Template.bind({});
SocialButton.args = {};
SocialButton.storyName = "Social Button";
