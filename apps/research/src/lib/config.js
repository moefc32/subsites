const siteName = `Faizal Chan's Website`;
const title = `${import.meta.env.PUBLIC_APP_NAME} - ${siteName}`;
const pageSize = parseInt(import.meta.env.PUBLIC_PAGINATION_ITEMS || '10', 10);

export const owner = {
    displayName: 'Faizal Chan.',
    displayPicture: '/res/favicon.png',
    introduction: 'I approach problems by questioning assumptions and focusing on what truly matters.',
    shortTitle: 'UX Engineer & Researcher',
};

export const metadata = {
    siteName,
    title,
    description: 'Access a collection of research publications by Faizal Chan, covering studies, articles, and scholarly insights.',
    type: 'website',
};

export const blog = {
    title: {
        long: 'Published Works',
        short: 'Works',
    },
    path: '/published-works',
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

