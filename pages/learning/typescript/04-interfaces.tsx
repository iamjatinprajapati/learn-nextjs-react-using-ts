import {ReactElement} from "react";
import {DefaultLayout} from "@layouts/default";
import {NextPageWithLayout} from "pages/_app";
import Codeblock from "@components/codeblock";
import BackLink from "@components/backlink";
import NextLink from "@components/nextlink";
import Head from "next/head";
import Heading1 from "@components/h1";
import Variablebadge from "@components/variablebadge";
import Link from "next/link";
import Quote from "@components/quote";
import Heading3 from "@components/heading3";

const Page: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>04 - Interfaces</title>
            </Head>
            <div className="flex flex-row space-x-3 items-center mb-10">
                <BackLink
                    href="/learning/typescript/03-functions-and-union-types"
                    title="Back"
                >
                    <>Back</>
                </BackLink>
                <Heading1>04. Interfaces</Heading1>
            </div>
            <div className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-3">
                    <p>
                        Before staring with <em>Interfaces</em>, let&apos;s get some basic
                        information about <em>Type Aliases.</em>
                    </p>
                    <p>
                        Observe the below code snippt, which shows a function named{" "}
                        <em>printName</em> which takes <Variablebadge text="obj"/> as input
                        parameter.
                    </p>
                    <Codeblock>{`function printName(obj: { firstName: string; lastName: string }): void {
  console.log(\`\${obj.firstName} \${obj.lastName}\`);
}`}</Codeblock>
                    <p>
                        Here, the <Variablebadge text="obj"/> input paramter uses the type
                        annotation to define the inner properties with their own type
                        annotations. We have also seen the examples of <em>union types</em>{" "}
                        being used as the input parameters, in the{" "}
                        <Link
                            href="/learning/typescript/03-functions-and-union-types"
                            className="text-indigo-500 hover:underline"
                        >
                            previous chapter
                        </Link>
                        .
                    </p>
                    <p>
                        This is convenient, but it&apos;s common to want to use the same
                        type more than once and refer to it by a single name.
                    </p>
                    <p>
                        A <em>type alias</em> is exacly that - a <em>name</em> of any{" "}
                        <em>type</em>. The syntax for a type alias is:
                    </p>
                    <Codeblock>{`type Point = {
  x: number;
  y: number;
};`}</Codeblock>
                    <p>
                        We can transform the code <Variablebadge text="printName"/>{" "}
                        function using <em>type alias</em> as following.
                    </p>
                    <Codeblock>{`type name = {
  firstName: string;
  lastName: string;
}

function printName(obj: name): void {
  console.log(\`\${obj.firstName} \${obj.lastName}\`);
}`}</Codeblock>
                    <p>
                        You can actually use a type alias to give a name to any type at all,
                        not just an object type. For example, a type alias can name a union
                        type:
                    </p>
                    <Codeblock>{`type ID = number | string;`}</Codeblock>
                </div>
                <div className="flex flex-col space-y-3">
                    <p>
                        An <em>interface declaration</em> is another way to name an object
                        type as <em>type alias</em>.
                    </p>
                    <Codeblock>{`interface IName {
  firstName: string;
  lastName: string;
}
function printName(obj: IName): void {
  console.log(\`\${obj.firstName} \${obj.lastName}\`);
}`}</Codeblock>
                    <p>
                        Just like when we used a type alias above, the example works just as
                        if we had used an anonymous object type. TypeScript is only
                        concerned with the <em>structure</em> of the value we passed to{" "}
                        <Variablebadge text="printName"/> - it only cares that it has the
                        expected properties.
                    </p>
                    <Quote>
                        <>
                            Being concerned only with the structure and capabilities of types
                            is why we call TypeScript a <em>structurally typed</em> type
                            system.
                        </>
                    </Quote>
                </div>
                <div className="flex flex-col space-y-3">
                    <Heading3 className="text-base">
                        Differences between Type Aliases and Interfaces
                    </Heading3>
                    <p>
                        Type aliases and interfaces are very similar, and in many cases you
                        can choose between them freely. Almost all features of an{" "}
                        <Variablebadge text="interface"/> are available in{" "}
                        <Variablebadge text="type"/>, the key distinction is that a type
                        cannot be re-opened to add new properties vs an interface which is
                        always extendabled.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>Interface</div>
                        <div>Type</div>
                        <div className="col-span-2 border-b border-zinc-200"></div>
                        <div className="px-3 flex flex-col space-y-3">
                            <p>Extending an interface</p>
                            <Codeblock>{`interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;

function getBear(): Bear {
  return {
    name: "John Doe",
    honey: true,
  };
}`}</Codeblock>
                        </div>
                        <div className="px-3 flex flex-col space-y-3">
                            <p>Extending a type via intersections</p>
                            <Codeblock>{`type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};

const bear = getBear();
bear.name;
bear.honey;

function getBear(): Bear {
  return {
    name: "John Doe",
    honey: true,
  };
}`}</Codeblock>
                        </div>
                        <div className="px-3 flex flex-col space-y-3">
                            <p>Adding new fields to an existing interface</p>
                            <Codeblock>{`type TypeScriptAPI = string | number;

interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
const window: Window = { title: "This is window.", ts: 1 };
window.ts = src;`}</Codeblock>
                        </div>
                        <div className="px-3 flex flex-col space-y-3">
                            <p>A type cannot be changed after being created</p>
                            <Codeblock>{`type TypeScriptAPI = string | number;

type TWindow = {
  title: string;
};

type TWindow = {
  ts: TypeScriptAPI;
};

// Error: Duplicate identifier 'Window'.

`}</Codeblock>
                        </div>
                    </div>
                    <div className="px-3 flex flex-col space-y-3">
                        <p>
                            We&apos;ll learn more about these concepts in later chapters, so
                            do not worry understand all of these right away.
                        </p>
                        <p>
                            For the most part, you can choose based on personal preference,
                            and TypeScript will tell you if it needs something to be the other
                            kind of declaration. If you would like a heuristic, use{" "}
                            <Variablebadge text="interface"/> until you need to use features
                            from <Variablebadge text="type"/>.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-3">
                <p>
                    <NextLink title="Next" href="/learning/typescript/05-classes">
                        <>Next</>
                    </NextLink>
                </p>
            </div>
        </>
    );
};
Page.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout>{page}</DefaultLayout>;
};
export default Page;
