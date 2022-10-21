// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Real Own Things',
  baseUrl: '/my-website/',
  url: 'https://ycfcando.github.io',

  tagline: 'Write down my thoughts',
  favicon: 'img/favicon.jpg',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  organizationName: 'ycfcando',
  projectName: 'my-website',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {

        },
        blog: {
          showReadingTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
      },
      navbar: {
        title: 'Hypoxia',
        logo: {
          alt: 'logo',
          src: '/img/favicon.jpg',
          style: {
            borderRadius: '50%'
          }
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'Software',
            items: []
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Hardware',
            items: []
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          }
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
