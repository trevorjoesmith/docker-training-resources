// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docker Training Resources',
  tagline: 'Your comprehensive guide to learning Docker',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://trevorjoesmith.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/docker-training-resources/',

  // GitHub pages deployment config.
  organizationName: 'trevorjoesmith',
  projectName: 'docker-training-resources',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/trevorjoesmith/docker-training-resources/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/trevorjoesmith/docker-training-resources/tree/main/',
          blogTitle: 'Docker Blog Updates',
          blogDescription: 'Latest updates from the Docker blog',
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
      image: 'img/docker-social-card.jpg',
      navbar: {
        title: 'Docker Training',
        logo: {
          alt: 'Docker Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Learn',
          },
          {to: '/blog', label: 'Blog Updates', position: 'left'},
          {
            href: 'https://github.com/trevorjoesmith/docker-training-resources',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
              {
                label: 'Language Guides',
                to: '/docs/language-guides',
              },
              {
                label: 'AI & ML',
                to: '/docs/ai-ml',
              },
            ],
          },
          {
            title: 'Docker Resources',
            items: [
              {
                label: 'Official Documentation',
                href: 'https://docs.docker.com',
              },
              {
                label: 'Docker Hub',
                href: 'https://hub.docker.com',
              },
              {
                label: 'Docker Blog',
                href: 'https://www.docker.com/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Docker Forums',
                href: 'https://forums.docker.com',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docker',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/trevorjoesmith/docker-training-resources',
              },
            ],
          },
        ],
        copyright: `Built with ❤️ for the Docker community. Powered by Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'docker', 'yaml', 'json'],
      },
      algolia: {
        // You can add Algolia search later if you want
        // For now, we'll use the built-in search
      },
    }),
};

module.exports = config;
