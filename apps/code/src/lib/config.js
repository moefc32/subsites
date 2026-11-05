const siteName = `Faizal Chan's Website`;
const title = `${import.meta.env.PUBLIC_APP_NAME} - ${siteName}`;
const pageSize = parseInt(import.meta.env.PUBLIC_PAGINATION_ITEMS || '10', 10);

export const owner = {
    displayName: 'Faizal Chan.',
    displayPicture: '/res/favicon.png',
    introduction: 'I build solutions by prioritizing clarity, efficiency, and long-term sustainability over trends.',
    shortTitle: 'UX Engineer & Researcher',
};

export const metadata = {
    siteName,
    title,
    description: 'Browse coding portfolios by Faizal Chan, featuring projects, applications, and programming expertise.',
    type: 'website',
};

export const blog = {
    title: {
        long: 'Architecture Recipes',
        short: 'Architectures',
    },
    path: '/architecture-recipes',
    pageSize,
};

export const navigations = [
    {
        name: 'Main Website',
        link: 'https://mf-chan.com',
    },
    {
        name: 'Research',
        link: 'https://research.mf-chan.com',
    },
    {
        name: 'Design',
        link: 'https://design.mf-chan.com',
    },
    {
        name: 'Code',
        link: 'https://code.mf-chan.com',
    },
    {
        name: 'Mentor',
        link: 'https://mentor.mf-chan.com',
    },
    {
        name: 'Certificate',
        link: 'https://certificate.mf-chan.com',
    },
];
