import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import remarkToc from 'remark-toc';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeVideo from 'rehype-video';
import rehypeHighlight from 'rehype-highlight';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeColorChips from 'rehype-color-chips';

// https://astro.build/config
export default defineConfig({
    site: 'https://tadscritchfield.com',
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ],
    markdown: {
        remarkPlugins: [[remarkToc, { heading: 'toc', maxDepth: 3 }]],
        rehypePlugins: [
            rehypeAccessibleEmojis,
            rehypeVideo,
            rehypeHighlight,
            [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
            [rehypeColorChips, { customClassName: 'color-chip' }]
        ]
    }
});
