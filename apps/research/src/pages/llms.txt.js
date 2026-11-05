import { getCollection } from 'astro:content';
import { metadata, blog, navigations } from '../lib/config';

export async function GET({ url }) {
    const siteUrl = import.meta.env.DEV
        ? url.origin
        : import.meta.env.PUBLIC_SITE_URL.replace(/\/+$/, '');
    const posts = (await getCollection('blog'))
        .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
        .slice(0, 10);

    const content = [
        `# ${metadata.title}`,
        '',
        `> ${metadata.description}`,
        '',
        '## Latest Articles',
        '',
        ...posts.map(item => `- [${item.data.title}](${new URL(`${blog.path}/${item.id}`, siteUrl).href})`),
        '',
        '## Site Navigation',
        '',
        ...navigations
            .filter(item => item.name !== 'Research')
            .map(item => [
                `- [${item.name}](${item.link})`,
            ].join('\n')),
    ].join('\n');

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
