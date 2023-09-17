const config = {
  head: (
    <>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </>
  ),
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
