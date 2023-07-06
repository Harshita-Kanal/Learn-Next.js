import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Harshita Kanal</span>,
  project: {
    link: "https://github.com/Harshita-Kanal",
  },

  docsRepositoryBase: "https://github.com/Harshita-Kanal",
  footer: {
    text: "Nextra Docs Template",
  },
  darkMode: true,
  primaryHue: { light: 330, dark: 196 },
  feedback: { content: null },
  editLink: { text: null },
  search: { placeholder: "Search here.." },
};

export default config;
