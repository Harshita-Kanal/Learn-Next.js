import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Harshita Kanal</span>,
  project: {
    link: "https://github.com/Harshita-Kanal",
  },

  docsRepositoryBase: "https://github.com/Harshita-Kanal",
  footer: {
    text: "Made with ❤️ using Next and Nextra",
  },

  head: function useHead() {
    return (
      <>
        <title>Harshita Kanal</title>
        <link rel="icon" href="/assets/logo.svg" type="image/svg+xml" />
      </>
    );
  },
  darkMode: true,
  primaryHue: { light: 330, dark: 196 },
  feedback: { content: null },
  editLink: { text: null },
  search: { placeholder: "Search here.." },
};

export default config;
