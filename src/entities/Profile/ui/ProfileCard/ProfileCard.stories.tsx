import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/style/index.scss';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/avatar-for-storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 23,
        country: Country.Kazakhstan,
        lastname: 'kenzha',
        first: 'web',
        city: 'Astana',
        currency: Currency.KZT,
        avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};
export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
