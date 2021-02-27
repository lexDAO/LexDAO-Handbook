module.exports = {
  title: 'LexDAO',
  tagline: 'The Decentralized Legal Engineering Guild Handbook',
  url: 'https://lexdao.coop',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lexdao', // Usually your GitHub org/user name.
  projectName: 'lexdao-handbook', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'LexDAO',
      logo: {
        alt: 'LexDAO Logo',
        src: 'img/Logo.png',
      },
      items: [
        {
          to: '/',
          activeBasePath: 'docs',
          label: 'Handbook',
          position: 'left',
        },
        {
          href: 'https://lexdao.coop',
          label: 'LexDAO Home',
          position: 'right',
        },
        {
          href: 'https://github.com/lexDAO',
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
              label: 'Mission',
              to: '/',
            },
            {
              label: 'Join LexDAO',
              to: '/join/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/lexdao/lexdao-handbook/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/lexdao/lexdao-handbook/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
