import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import defaultTheme from '../../theme';
import Box from './Box';

export default {
  title: 'Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  m: 1,
  p: 1,
  bg: 'customGreen',
  width: [1, 1 / 2, 1 / 4],
  height: '100px',
  theme: defaultTheme,
};
