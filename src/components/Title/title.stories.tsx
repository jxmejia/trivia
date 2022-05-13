import { ComponentStory, ComponentMeta } from "@storybook/react";
import Title from "./title.component";

export default {
  title: "Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Trivia challenge",
};
