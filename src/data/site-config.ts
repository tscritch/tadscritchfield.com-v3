export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Tad Scritchfield',
    subtitle: 'designer - engineer - creator',
    description: 'Personal website of Tad Scritchfield, a designer, engineer, and creator.',
    // image: {
    //     src: '/dante-preview.jpg',
    //     alt: 'Dante - Astro.js and Tailwind CSS theme'
    // },
    headerNavLinks: [
        {
            text: 'home',
            href: '/'
        },
        {
            text: 'work',
            href: '/work'
        },
        {
            text: 'blog',
            href: '/blog'
        }
    ],
    footerNavLinks: [
        {
            text: 'about',
            href: '/about'
        },
        {
            text: 'contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/tscritch'
        },
        {
            text: 'Youtube',
            href: 'https://youtube.com/@tadly'
        },
        {
            text: 'X',
            href: 'https://x.com/tadscritch'
        }
    ],
    hero: {
        // title: 'Hi There & Welcome to My Corner of the Web!',
        text: "I'm Tad Scritchfield, an engineer at SmartRent developing software for customer support and internal tools. I'm also a designer and creator. I love to build things and share what I learn along the way.",
        // image: {
        //     src: '/hero.jpeg',
        //     alt: 'A person sitting at a desk in front of a computer'
        // },
        actions: [
            {
                text: 'see work →',
                href: '/work'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
