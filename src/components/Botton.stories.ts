import "../styles/tokens.css";

import Button from './Button.vue';

export default {
  title: 'Components/Button',
  component: Button
};

import type { StoryFn } from '@storybook/vue3';

const Template: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">Hello World</Button>'
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary'
};