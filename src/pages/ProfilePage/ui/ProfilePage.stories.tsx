import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/style/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;
export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 23,
                country: Country.Kazakhstan,
                lastname: 'kenzha',
                first: 'web',
                city: 'Astana',
                currency: Currency.KZT,
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 23,
                country: Country.Kazakhstan,
                lastname: 'kenzha',
                first: 'web',
                city: 'Astana',
                currency: Currency.KZT,
            },
        },
    }),
];
