const metaTags = (
  <>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <meta
      name="description"
      content="Collection of modern interview code challenges on JavaScript suitable for Interviewees | Interviewers | Knowledge test | Practice"
    />
    <meta property="og:url" content="https://jscodechallenges.vercel.app/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="JavaScript Code Challenges" />
    <meta
      property="og:description"
      content="Collection of modern interview code challenges on JavaScript suitable for Interviewees | Interviewers | Knowledge test | Practice"
    />
    <meta
      property="og:image"
      content="https://jscodechallenges.vercel.app/hero.svg"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="jscodechallenges.vercel.app" />
    <meta
      property="twitter:url"
      content="https://jscodechallenges.vercel.app/"
    />
    <meta name="twitter:title" content="JavaScript Code Challenges" />
    <meta
      name="twitter:description"
      content="Collection of modern interview code challenges on JavaScript suitable for Interviewees | Interviewers | Knowledge test | Practice"
    />
    <meta
      name="twitter:image"
      content="https://jscodechallenges.vercel.app/hero.svg"
    />
  </>
);

const config = {
  head: metaTags,
  logo: <span>JavaScript Code Challenges</span>,
  project: {
    link: "https://github.com/sadanandpai/javascript-code-challenges/",
  },
  docsRepositoryBase:
    "https://github.com/sadanandpai/javascript-code-challenges/tree/main/web",
  search: {
    placeholder: "Search",
  },
  sidebar: { toggleButton: true },
  toc: { backToTop: true },
  feedback: { content: null },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – JS Code Challenges",
    };
  },
  gitTimestamp: null,
  footer: {
    text: (
      <span>
        <a
          href="https://github.com/sadanandpai/javascript-code-challenges/blob/main/LICENSE"
          target="_blank"
        >
          MIT License - Copyright (c) 2020
        </a>
      </span>
    ),
  },
};

export default config;
