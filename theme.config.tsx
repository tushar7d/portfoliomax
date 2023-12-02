import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/logo";

const config: DocsThemeConfig = {
  head: () => {
    return (
      <>
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tushar Debnath</title>
      </>
    );
  },
  logo: <Logo />,
  search: { component: null },
  feedback: { content: null },
  editLink: { text: null },

  footer: {
    text: "© 2023 · Tushar Debnath",
  },
};

export default config;
