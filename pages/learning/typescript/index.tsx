import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import { DefaultLayout } from "../../../layouts/default";
import { NextPageWithLayout } from "../../_app";

const pages = [
  {
    title: "01. Getting Started",
    href: "/learning/typescript/01-getting-started",
  },
  {
    title: "02. Variables, Types and Enums",
    href: "/learning/typescript/02-variables-types-enums",
  },
  {
    title: "03. Functions",
    href: "/learning/typescript/03-functions",
  },
  {
    title: "04. Interfaces",
    href: "/learning/typescript/04-interfaces",
  },
];

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Learn Typescript</title>
      </Head>
      <div className="text-4xl font-bold mb-10">Learn Typescript</div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {pages.map((page, index) => (
          <div
            key={index}
            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            {/* <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
          </div> */}
            <div className="min-w-0 flex-1">
              <Link href={page.href} className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">
                  {page.title}
                </p>
                {/* <p className="truncate text-sm text-gray-500">{person.role}</p> */}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default Home;
