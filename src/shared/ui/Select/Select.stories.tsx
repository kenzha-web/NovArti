import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/style/index.scss';
import Select from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите значение',
    options: [
        { value: '1', content: 'Первый пункт' },
        { value: '2', content: 'Второй пункт' },
    ],
};
