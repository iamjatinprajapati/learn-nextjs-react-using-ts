import { ReactElement } from "react";
import { DefaultLayout } from "@layouts/default";
import { NextPageWithLayout } from "pages/_app";
import Codeblock from "@components/codeblock";
import BackLink from "@components/backlink";
import NextLink from "@components/nextlink";
import Head from "next/head";
import Heading1 from "@components/h1";
import { ProductOutput } from "lesson/05-classes/lesson.1";
import Variablebadge from "@components/variablebadge";
import Quote from "@components/quote";
import Link from "next/link";

const Page: NextPageWithLayout = () => {
  const productOutput = new ProductOutput();
  productOutput.getCategories();
  return (
    <>
      <Head>
        <title>05 - Classes</title>
      </Head>
      <div className="flex flex-row space-x-3 items-center mb-10">
        <BackLink href="/learning/typescript/04-interfaces" title="Back">
          <>Back</>
        </BackLink>
        <Heading1>05. Classes</Heading1>
      </div>
      <p>
        TypeScript offers full support for the <Variablebadge text="class" />{" "}
        keyword introduced in ES2015.
      </p>
      <Quote className="my-4">
        <>
          Classes are a tempalte for creating objects. They encapsulate data
          with code to work on that data. Classes in JavaScript are built on
          prototypes but also have some syntax and semantics that are unique to
          classes.{" "}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"
            target="_blank"
            className="text-blue-900 underline"
          >
            Background Reading: Classes (MDN)
          </Link>
        </>
      </Quote>
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default Page;
