import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Packistry',
  tagline: 'Open Source, Self-Hosted, Composer repository for PHP packages',

  url: 'https://packistry.github.io',
  baseUrl: '/',

  organizationName: 'packistry',
  projectName: 'docs',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/packistry/docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Packistry',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/packistry/packistry',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Installation',
              to: '/docs/installation',
            },
          ],
        },
        {
          title: 'Guides',
          items: [
            {
              label: 'Behind a Reverse Proxy',
              to: '/docs/guides/behind-a-reverse-proxy',
            },
            {
              label: 'Deploy Packistry with Kamal',
              to: '/docs/guides/kamal',
            },
            {
              label: 'Using MySQL Database',
              to: '/docs/guides/mysql',
            },
            {
              label: 'Store Package Archives in S3',
              to: '/docs/guides/store-archives-s3',
            },

          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Packistry. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
