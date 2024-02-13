import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/style/index.scss';
import Modal from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architectodeleniti harum hic molestias nobis nostrum obcaecati perspiciatis quaerat quas similique. Amet beatae impedit nostrum! A natus quaerat similique sint vel.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children:
    // eslint-disable-next-line max-len
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architectodeleniti harum hic molestias nobis nostrum obcaecati perspiciatis quaerat quas similique. Amet beatae impedit nostrum! A natus quaerat similique sint vel.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
