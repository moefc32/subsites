const siteName = `Faizal Chan's Website`;
const title = `${import.meta.env.PUBLIC_APP_NAME} - ${siteName}`;
const pageSize = parseInt(import.meta.env.PUBLIC_PAGINATION_ITEMS || '10', 10);

export const owner = {
    displayName: 'Faizal Chan.',
    displayPicture: '/res/favicon.png',
    introduction: 'I shape solutions by balancing usability, structure, and intent beyond surface-level visuals.',
    shortTitle: 'UX Engineer & Researcher',
};

export const metadata = {
    siteName,
    title,
    description: 'Discover design portfolios by Faizal Chan, highlighting visual design projects, videography, and creative solutions.',
    type: 'website',
};

export const blog = {
    title: {
        long: 'Reasoning Processes',
        short: 'Reasoning',
    },
    path: '/reasoning-processes',
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

