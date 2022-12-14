import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "./text.component";

export default {
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Trivia challenge",
};
