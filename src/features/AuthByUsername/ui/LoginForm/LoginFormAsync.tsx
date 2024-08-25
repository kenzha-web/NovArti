import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () => new Promise((resolve) => {
        // @ts-ignore
        // Так в реальных проектах не буду делать
        setTimeout(() => resolve(import('./LoginForm')), 1500);
    }),
);
