import "nextra-theme-docs/style.css";

import { Layout, Navbar } from "nextra-theme-docs";

import { Head } from "nextra/components";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { getPageMap } from "nextra/page-map";

export const metadata: Metadata = {
  title: "JavaScript Code Challenges",
  description: "JavaScript Code Challenges",
  keywords: ["javascript", "code Challenges"],
  authors: [
    {
      name: "Sadanand",
      url: "https://github.com/sadanandpai",
    },
  ],
};

const navbar = (
  <Navbar
    logo={<>JavaScript Code Challenges</>}
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
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
