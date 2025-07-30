import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Toledo Codes",
  description: "Toledo Codes",
  cleanUrls: true,
  themeConfig: {
    logo: {
      light: "./images/toledocodes-logo.png",
      dark: "./images/toledocodes-logo-dark.png",
      alt: "Toledo Codes",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/toledocodes" },
      { icon: "youtube", link: "https://www.youtube.com/@ToledoCodes" },
      {
        icon: "slack",
        link: "https://join.slack.com/t/toledo-codes/shared_invite/zt-3an3p3kds-l_DKfRWRcU4s_qklD04TbQ",
      },
      {
        icon: "facebook",
        link: "https://www.facebook.com/profile.php?id=61573722176815",
      },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/toledo-codes/",
      },
      {
        icon: "twitch",
        link: "https://www.twitch.tv/toledocodes",
      },
      {
        icon: "instagram",
        link: "https://www.instagram.com/toledocodes/",
      },
    ],
    nav: [
      { text: "Events", link: "https://lu.ma/toledocodes" },
      {
        text: "Community",
        items: [
          { text: "Mission", link: "/mission" },
          { text: "Organizers", link: "/organizers/" },
          { text: "Partners", link: "/partners/" },
          { text: "Sponsorships", link: "/sponsorships" },
          { text: "Code of Conduct", link: "/code-of-conduct/" },
        ],
      },
      { text: "Presentations", link: "/presentations/" },
      {
        text: "Submit a Talk",
        link: "https://toledo.codes/submit-talk/",
        target: "_self",
      },
    ],
  },
  head: [
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-726E4NX7W9",
      },
    ],
    [
      "script",
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-726E4NX7W9'); 
      `,
    ],
  ],
  vite: {
    server:
      process.env.NODE_ENV === "development"
        ? {
            proxy: {
              "/survey": {
                target:
                  "https://docs.google.com/forms/d/e/1FAIpQLSff3SkO92jTEirw2z8uhGvSsXM2hMz9QmaRYjS6sobzKkrAFw/viewform?usp=sharing",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/survey/, ""),
              },
              "/submit-talk": {
                target:
                  "https://docs.google.com/forms/d/e/1FAIpQLSdmtoPEoZJ-V300oVOFj5twtTZBcLcDmr-sKHlD6WUrxsSZ0g/viewform?usp=sharing",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/submit-talk/, ""),
              },
              "/demo": {
                target: "https://forms.gle/6UDkvTjyWUrn2Wrv8",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/demo/, ""),
              },
            },
          }
        : undefined,
  },
});
