import Card, { CardProps } from "./Card";
import { ComponentStory } from "@storybook/react";
import Heading from "../../atoms/heading/Heading";

export default {
  title: "Card",
  component: Card,
};

const Template: ComponentStory<typeof Card> = (args: CardProps) => (
  <Card {...args} />
);

export const MyCard = Template.bind({});
MyCard.args = {
  full: false,
  fullHeight: false,
  fullWidth: false,
  title: "My custom card",
  content: (
    <div>
      <p>This is my custom card, you can add any content in here.</p>
    </div>
  ),
};
MyCard.storyName = "Basic Card";

export const EmptyCard = Template.bind({});
EmptyCard.args = {
  full: false,
  fullHeight: false,
  fullWidth: false,
  title: "",
  content: undefined,
};
EmptyCard.storyName = "Empty Card";

export const CardRenderTitle = Template.bind({});
CardRenderTitle.args = {
  full: true,
  fullHeight: false,
  fullWidth: false,
  renderTitle: () => (
    <Heading type={"h6"} label={"Custom Heading"} color={"primary"} />
  ),
  content: (
    <div>
      <p>
        This is my custom card, you can add any content in here. When using the
        &quot;renderTitle&#34; property the &quot;title&#34; is ignored.
      </p>
    </div>
  ),
};
CardRenderTitle.storyName = "Render Title";
