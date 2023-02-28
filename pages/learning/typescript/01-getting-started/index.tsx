import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactElement } from "react";
import { DefaultLayout } from "../../../../layouts/default";
import { NextPageWithLayout } from "../../../_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="flex flex-row space-x-3 items-center mb-10">
        <Link href="/learning/typescript" title="Back">
          <ArrowUturnLeftIcon className="w-5 h-5 text-indigo-500" />
        </Link>
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
        <code>
          console.log('This is a valid JavaScript as well as Typescript');
        </code>
      </p>
      <p className="flex flex-col space-y-3 mt-3">
        <em className="font-bold">2. Defining variables</em>
        <div className={`bg-zinc-800 text-white px-4 py-3 rounded`}>
          let x = 10;{" "}
          <span className="text-sm">
            //The compile infers the type from the assigned value.
          </span>
          <br />
          let y: number = 20;{" "}
          <span className="text-sm">
            // We can explicitly say the compile to use the 'number' type for
            the variable.
          </span>
        </div>
      </p>
    </>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default Home;
