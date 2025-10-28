/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'NewNepal.org',
  tagline: 'A Digital Platform for Nepali Youth, by Nepali Youth',
  url: 'https://newnepal.org/', // Replace it with your deployed Pages URL
  baseUrl: '/', // When the unique domain is disabled, replace it with your project’s name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'NewNepal', // Usually your GitHub org/user name.
  projectName: 'NewNepal.org', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ne'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
    },
  },
  themeConfig: {
    navbar: {
      title: 'NewNepal.org',
      logo: {
        alt: 'NewNepal.org Logo',
        src: 'img/Logo1.png',
      },
      items: [
        {
          to: 'genz-registry/',
          activeBasePath: 'genz-registry',
          label: 'GenZ Registry',
          position: 'left',
        },
        {
          to: 'debate/',
          activeBasePath: 'debate',
          label: 'Debate',
          position: 'left',
        },
        {
          to: 'corruption/',
          activeBasePath: 'corruption',
          label: 'CorruptionDB',
          position: 'left',
        },
        {
          to: 'mission/',
          activeBasePath: 'mission',
          label: 'Mission',
          position: 'left',
        },
        {
          to: 'about/',
          activeBasePath: 'about',
          label: 'About',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contribute',
          items: [
            {
              label: 'Partner with Us',
              to: 'partner',
            },
            {
              label: 'Guidelines and Documentation',
              to: 'docs/',
            },
            {
              href: 'https://gitlab.com/newnepal/newnepal.org',
              label: 'GitLab',
              position: 'right',
            },
            {
              href: 'https://discord.gg/mRYbcEAuaQ',
              label: 'Discord',
              position: 'right',
            },
            {
              href: 'https://www.facebook.com/newnepal.org',
              label: 'Facebook',
              position: 'right',
            },
          ],
        },
        {
          title: 'Projects',
          items: [
            {
              label: 'GenZ Registry',
              to: 'genz-registry',
            },
            {
              label: 'Weekly Debates',
              to: 'debate',
            },
            {
              label: 'Corruption Database',
              to: 'corruption',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Announcements',
              to: 'blog',
            },
            {
              label: 'Contact',
              to: 'contact',
            },
            {
              label: 'About',
              to: 'about',
            },
            {
              label: 'Mission',
              to: 'mission',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NewNepal.org. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://gitlab.com/newnepal/newnepal.org/-/blob/mainline/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://gitlab.com/newnepal/newnepal.org/-/blob/mainline/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-98C0Q59JNE',
          anonymizeIP: true,
        },
      },
    ],
  ],

};
