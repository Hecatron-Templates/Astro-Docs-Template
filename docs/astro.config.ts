// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from '@hecatron/starlight-theme-black-category'
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightAutoDrafts from 'starlight-auto-drafts';
import { generateSidebarGroups } from './src/sidebar_grps.mjs';

console.log(generateSidebarGroups('topic1/', './src/content/docs/topic1'));

// https://astro.build/config
export default defineConfig({
  site: 'https://hecatron-templates.github.io/docs-astro-template/',
  base: '/docs-astro-template',
  integrations: [
    starlight({
      title: 'Template Docs Page',
       logo: {
        dark: './src/assets/logo-dark.svg',
        light: './src/assets/logo-light.svg',
        alt: 'Template Docs Page',
      },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Hecatron-Templates/docs-astro-template' }],
      customCss: [
        './src/styles/themes/theme-deep-purple.css',
      ],
      editLink: {
        baseUrl: 'https://github.com/Hecatron-Templates/docs-astro-template/edit/master/docs/',
      },
      plugins: [
        starlightThemeBlack({
          navLinks: [
            {
              label: 'Home',
              link: '/',
            },
            'topic1',
            {
              label: 'Starlight',
              link: 'https://starlight.astro.build',
              badge: 'External',
              attrs: {
                target: '_blank',
                rel: 'noopener',
              },
            },
          ],
        }),
        starlightSidebarTopics([
          {
            label: 'Topic1',
            icon: 'open-book',
            link: '/topic1/',
	          items: generateSidebarGroups('topic1/', './src/content/docs/topic1'),
          },
          {
            label: 'Topic2',
            icon: 'open-book',
            link: '/topic2/',
            items: generateSidebarGroups('topic2/', './src/content/docs/topic2'),
          },
        ]),
        starlightAutoDrafts(),
      ],
    }),
  ],
});
