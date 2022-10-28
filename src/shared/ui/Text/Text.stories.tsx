import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title Primary',
  text: 'Text Primary',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Error Primary',
  text: 'Error Primary',
  theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Title Primary',
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Text Primary',
};

// DARK

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title Primary',
  text: 'Text Primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'Title Primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'Text Primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
