import { ReactElement } from "react";
import { DefaultLayout } from "../../../../layouts/default";
import { NextPageWithLayout } from "../../../_app";
import Codeblock from "@components/codeblock";
import BackLink from "@components/backlink";
import NextLink from "@components/nextlink";
import Head from "next/head";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>01 - Getting started with Typescript</title>
      </Head>
      <div className="flex flex-row space-x-3 items-center mb-10">
        <BackLink href="/learning/typescript" title="Back">
          <>Back</>
        </BackLink>
        <div className="text-4xl font-bold">01. Getting Started</div>
      </div>
      <p>
        Typescript is a strongly types programming language that builds on
        JavaScript, giving you better tooling at any scale. -{" "}
        <a
          className="text-indigo-500 underline"
          href="https://www.typescriptlang.org"
          target="_blank"
          rel="noreferrer"
        >
          typescriptlang.org
        </a>
      </p>
      <p className="flex flex-col space-y-3 mt-3">
        <em className="font-bold">
          1. Any valid JavaScript is also a valid Typescript
        </em>
        <Codeblock>
          {`console.log(&apos;This is a valid JavaScript as well as Typescript&apos;);`}
        </Codeblock>
      </p>
      <p className="flex flex-col space-y-3 mt-3">
        <em className="font-bold">2. Defining variables</em>
        <Codeblock>{`console.log("A valid javascript is valid typescript.");

let x = 10;
let y: number = 30;
class Lesson1 {
  sum = 0;
  constructor() {
    this.sum = x + y;
  }

  showSum() {
    return "The sum of \${x} + \${y} = \${this.sum}";
  }
}

export { Lesson1 };`}</Codeblock>
      </p>
      <div className="flex justify-end mt-3">
        <p>
          <NextLink
            title="Next"
            href="/learning/typescript/02-variables-types-enums"
          >
            <>Next</>
          </NextLink>
        </p>
      </div>
    </>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default Home;
