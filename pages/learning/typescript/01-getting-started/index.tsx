import {ReactElement} from "react";
import {DefaultLayout} from "@layouts/default";
import {NextPageWithLayout} from "pages/_app";
import Codeblock from "@components/codeblock";
import BackLink from "@components/backlink";
import NextLink from "@components/nextlink";
import Head from "next/head";
import Heading1 from "@components/h1";
import Codepen from "@components/codepen";
import Script from "next/script";

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
                <Heading1>01. Getting Started</Heading1>
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
            <div className="flex flex-col space-y-3 mt-3">
                <em className="font-bold">
                    1. Any valid JavaScript is also a valid Typescript
                </em>
                <section className="mt-3">
                    <Codepen hash={`MWqpjZo`} userName={`@jprajapati`} userDisplayName={`Jatin Prajapati`}
                             title={`01 Getting started defining variables`}/>
                </section>
            </div>
            <div className="flex flex-col space-y-3 mt-6">
                <p><em className="font-bold">2. Defining variables</em></p>
                <Codepen hash={`ZEMeBBo`} userName={`@jprajapati`} userDisplayName={`Jatin Prajapati`}
                         title={`01 Getting started defining variables`}/>
            </div>

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
