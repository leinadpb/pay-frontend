import Button, { ButtonProps } from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ChevronSvg from "@/svgs/Chevron";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const MyButton = Template.bind({});
MyButton.args = {
  text: "I'm a button",
  disabled: false,
  outlined: false,
  color: "primary",
  fullWidth: false,
};
MyButton.storyName = "Button Styles";

export const MyIconButton = Template.bind({});
MyIconButton.args = {
  text: "I'm a button with icon",
  disabled: false,
  outlined: false,
  color: "primary",
  fullWidth: false,
  icon: <ChevronSvg />,
};
MyIconButton.storyName = "Icon Button";
