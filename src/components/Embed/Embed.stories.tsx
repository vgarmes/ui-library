import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Embed from './Embed';

export default {
  title: 'Embed',
  component: Embed,
} as ComponentMeta<typeof Embed>;

const Template: ComponentStory<typeof Embed> = (args) => <Embed {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://www.w3docs.com/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf',
  width: 500,
  height: 500,
};
