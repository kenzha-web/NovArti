import { lazy } from 'react';

export const ArticleDetailsAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        // Так в реальных проектах не буду делать
        setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
    }),
);
