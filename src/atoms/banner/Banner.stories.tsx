import Banner, { BannerProps } from "./Banner";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Banner",
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args: BannerProps) => (
  <Banner {...args} />
);

export const MyBanner = Template.bind({});
MyBanner.args = {
  title: "My Banner",
  message:
    "Vestibulum faucibus, ipsum vel aliquam consectetur, elit turpis rutrum eros, ut scelerisque nibh eros vulputate mi. Aenean ac lorem non enim fringilla gravida nec sagittis justo. Sed accumsan erat condimentum quam tristique, sit amet facilisis orci pharetra. Curabitur rutrum sit amet urna vitae tempor.",
};
MyBanner.storyName = "Banner Styles";
