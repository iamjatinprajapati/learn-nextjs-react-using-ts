import {ReactElement} from "react";
import {DefaultLayout} from "@layouts/default";
import {NextPageWithLayout} from "../../_app";
import Codeblock from "@components/codeblock";
import Head from "next/head";
import Variablebadge from "@components/variablebadge";
import BackLink from "@components/backlink";
import NextLink from "@components/nextlink";
import Heading1 from "@components/h1";
import Codepen from "@components/codepen";

const Page: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>02 - Variables, Types and Enums</title>
            </Head>
            <div className="flex flex-row space-x-3 items-center mb-10">
                <BackLink href="/learning/typescript/01-getting-started" title="Back">
                    <>Back</>
                </BackLink>
                <Heading1>02. Variables, Types and Enums</Heading1>
            </div>
            <div className="flex flex-col space-y-5">
                <p>
                    There are few most common types of values we use in JavaScript code in
                    day to day development work. We will look into those types in context
                    of TypeScript.
                </p>
                <div className="flex flex-row text-l">
                    <div className="font-semibold">The primitives:</div>
                    <div>&nbsp;
                        <em>string</em>, <em>number</em>, and <em>boolean</em></div>
                </div>
                <div>
                    <ul className="m-0 p-0 list-inside list-disc space-y-3">
                        <li>
                            <Variablebadge text="string"></Variablebadge> represents string
                            values like &quot;Hello, world&quot;
                        </li>
                        <li>
                            <Variablebadge text="number"></Variablebadge> is for numbers like{" "}
                            <Variablebadge text="42"></Variablebadge>. JavaScript does not
                            have a special runtime value for integers, so there&apos;s no
                            equivalent of <Variablebadge text="int"></Variablebadge> or{" "}
                            <Variablebadge text="float"></Variablebadge> - everything is
                            simply <Variablebadge text="number"></Variablebadge>
                        </li>
                        <li>
                            <Variablebadge text="boolean"></Variablebadge> is for the two
                            values <Variablebadge text="true"></Variablebadge> and{" "}
                            <Variablebadge text="false"></Variablebadge>
                        </li>
                        <li>
                            To specify the types of an array like{" "}
                            <Variablebadge text="[1,2,3]"></Variablebadge>, you can use the
                            syntax <Variablebadge text="number[ ]"></Variablebadge>; this
                            syntax works for any type (e.g.{" "}
                            <Variablebadge text="string[ ]"></Variablebadge> is an array of
                            string, and so on.)
                        </li>
                        <li>
                            TypeScript also has a special type{" "}
                            <Variablebadge text="any"></Variablebadge>, that you can use
                            whenever you don&apos;t want a particular value to cause
                            typechecking errors.
                        </li>
                    </ul>
                </div>
                <Codepen hash={`ExeWNBq`} title={`02 variables in typescript`}/>
                <div className="space-y-3">
                    <div className="text-xl font-semibold">Enums</div>
                    <p>
                        Enums are a feature added to JavaScript by TypeScript which allows
                        for describing a value which could be one of a set of possible named
                        constants. Unlinke most TypeScript features, this is <em>not</em> a
                        type-level addition to JavaScript but something added to the
                        language and runtime.
                    </p>
                    <p>
                        <em>Numeric enums</em>: Numeric enums are probably more familiar if
                        you&apos;re coming from other languages. An enum can be defined
                        using the <Variablebadge text="enum"></Variablebadge> keyword.
                        Below, we have a numeric enum where{" "}
                        <Variablebadge text="up"></Variablebadge> is initialized with{" "}
                        <Variablebadge text="1"></Variablebadge>. All of the following
                        members are auto-incremented from that point.
                    </p>
                    <Codeblock>{`enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}`}</Codeblock>
                    <p>
                        <em>String enums</em>: String enums are a similar concept, each
                        member has to be constant-initialized with a string literal, or with
                        another string enum member.
                    </p>
                    <Codeblock>{`enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}`}</Codeblock>
                    <p>Following is the working example of enums:</p>
                    <Codepen hash={`NWLpdNz`} title={`enums in TypeScript`}/>
                </div>
            </div>
            <div className="flex justify-end mt-3">
                <NextLink
                    title="Next"
                    href="/learning/typescript/03-functions-and-union-types"
                >
                    <>Next</>
                </NextLink>
            </div>
        </>
    );
};
Page.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout>{page}</DefaultLayout>;
};
export default Page;
