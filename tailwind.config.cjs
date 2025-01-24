const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
            serif: ['Source Code Pro Variable', ...defaultTheme.fontFamily.serif]
        },
        extend: {
            textColor: {
                main: 'rgb(var(--color-text-main) / <alpha-value>)',
                invert: 'rgb(var(--color-bg-main) / <alpha-value>)'
            },
            backgroundColor: {
                main: 'rgb(var(--color-bg-main) / <alpha-value>)',
                muted: 'rgb(var(--color-bg-muted) / <alpha-value>)',
                invert: 'rgb(var(--color-text-main) / <alpha-value>)'
            },
            borderColor: {
                main: 'rgb(var(--color-border-main) / <alpha-value>)'
            },
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1rem' }]
            },
            typography: (theme) => ({
                dante: {
                    css: {
                        '--tw-prose-body': theme('textColor.main / 100%'),
                        '--tw-prose-headings': theme('textColor.main / 100%'),
                        '--tw-prose-lead': theme('textColor.main / 100%'),
                        '--tw-prose-links': theme('textColor.main / 100%'),
                        '--tw-prose-bold': theme('textColor.main / 100%'),
                        '--tw-prose-counters': theme('textColor.main / 100%'),
                        '--tw-prose-bullets': theme('textColor.main / 100%'),
                        '--tw-prose-hr': theme('borderColor.main / 100%'),
                        '--tw-prose-quotes': theme('textColor.main / 100%'),
                        '--tw-prose-quote-borders': theme('borderColor.main / 100%'),
                        '--tw-prose-captions': theme('textColor.main / 100%'),
                        '--tw-prose-code': theme('textColor.main / 100%'),
                        '--tw-prose-pre-code': theme('colors.zinc.100'),
                        '--tw-prose-pre-bg': theme('colors.zinc.800'),
                        '--tw-prose-th-borders': theme('borderColor.main / 100%'),
                        '--tw-prose-td-borders': theme('borderColor.main / 100%')
                    }
                },
                DEFAULT: {
                    css: {
                        a: {
                            fontWeight: 'normal',
                            textDecoration: 'underline',
                            textDecorationStyle: 'dashed',
                            textDecorationThickness: '1px',
                            textUnderlineOffset: '2px',
                            '&:hover': {
                                textDecorationStyle: 'solid'
                            }
                        },
                        'h1,h2,h3,h4,h5,h6': {
                            fontFamily: 'Source Code Pro Variable',
                            fontWeight: 500
                        },
                        blockquote: {
                            border: 0,
                            fontFamily: 'Source Code Pro Variable',
                            fontSize: '1.3125em',
                            fontStyle: 'italic',
                            fontWeight: 'normal',
                            lineHeight: 1.4,
                            paddingLeft: 0,
                            '@media (min-width: theme("screens.sm"))': {
                                fontSize: '1.66667em',
                                lineHeight: 1.3
                            }
                        }
                    }
                },
                lg: {
                    css: {
                        blockquote: {
                            paddingLeft: 0
                        }
                    }
                }
            }),
            animation: {
                'fade-in': 'fade-in 1.5s ease-in-out forwards'
            },
            keyframes: {
                'fade-in': {
                    '0%, ': { opacity: 0 },
                    '100%': { opacity: 1 }
                }
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
