import "nextra-theme-docs/style.css";

import { Head, Search } from "nextra/components";
import { Layout, Navbar } from "nextra-theme-docs";

import { Metadata } from "next";
import { ReactNode } from "react";
import { getPageMap } from "nextra/page-map";

export const metadata: Metadata = {
  title: "JavaScript Code Challenges",
  description:
    "Collection of modern interview code challenges on JavaScript suitable for Interviewees | Interviewers | Knowledge test | Practice",
  keywords: ["javascript", "code Challenges"],
  authors: [
    {
      name: "Sadanand Pai",
      url: "https://github.com/sadanandpai",
    },
  ],

  openGraph: {
    url: "https://jscodechallenges.vercel.app/",
    type: "website",
    title: "JavaScript Code Challenges",
    description:
      "Collection of modern interview code challenges on JavaScript suitable for Interviewees | Interviewers | Knowledge test | Practice",
    images: [
      {
        url: "https://jscodechallenges.vercel.app/banner.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "jscodechallenges.vercel.app",
    title: "JavaScript Code Challenges",
    description:
      "Collection of modern interview code challenges on JavaScript suitable for Interviewees | Interviewers | Knowledge test | Practice",
    images: ["https://jscodechallenges.vercel.app/banner.png"],
  },
  creator: "Sadanand Pai",
  publisher: "Sadanand Pai",
};

const navbar = (
  <Navbar
    logo={<strong>JavaScript Code Challenges</strong>}
    projectLink="https://github.com/sadanandpai/javascript-code-challenges"
  />
);

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/sadanandpai/javascript-code-challenges/tree/main/web"
          search={<Search placeholder="Search" />}
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
