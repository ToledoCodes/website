import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "DenverScript",
  description: "DenverScript",
  cleanUrls: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/denverscript' },
      { icon: 'twitter', link: 'https://twitter.com/DenverScript' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCIatzpIjlgtFsGofeZSdVLQ' }
    ],
    nav: [
      { text: "Organizers", link: "/organizers/" },
      { text: "Code of Conduct", link: "/code-of-conduct/" },
      { text: "JS News", link: "/news/"},
      { text: "Activities", link: "/activities/"},
      { text: "Submit a Talk", link: "https://forms.gle/5A26sY5475X8J14S8" },
    ],
    sidebar: {
      '/news/': [{
        text: 'JS News Archive',
        items: [{
          text: "May 2024",
          link: "/news/2024-05.md",
        },{
          text: "April 2024",
          link: "/news/2024-04.md",
        },{
          text: "March 2024",
          link: "/news/2024-03.md",
        },{
          text: "January 2024",
          link: "/news/2024-01.md",
        }, {
          text: "September 2023",
          link: "/news/2023-09.md",
        }, {
          text: "August 2023",
          link: "/news/2023-08.md",
        }, {
          text: "June 2023",
          link: "/news/2023-06.md",
        }]
      }]
    }
  }
})
