import { ReactElement } from "react";
import { DefaultLayout } from "@layouts/default";
import { NextPageWithLayout } from "../../_app";
import Codeblock from "@components/codeblock";
import Head from "next/head";
import BackLink from "@components/backlink";
import function01 from "@images/01function.jpg";
import Image from "next/image";
import Variablebadge from "@components/variablebadge";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>03 - Functions</title>
      </Head>
      <div className="flex flex-row space-x-3 items-center mb-10">
        <BackLink
          href="/learning/typescript/02-variables-types-enums"
          title="Back"
        >
          <>Back</>
        </BackLink>
        <div className="text-4xl font-bold">03. Functions</div>
      </div>
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col space-y-3">
          <p>
            Functions are the primary means of passing data around in
            JavaScript. A valid JavaScript function can be presented as
            following.
          </p>
          <Codeblock>{`//This is a function which has no input parameters.
function functionWithNoParameters() {
  return "This is the function which as no input parameters";
}`}</Codeblock>
        </div>
        <div className="flex flex-col space-y-3">
          <p>
            <em>Parameter type annotations: </em>TypeScript allows you to
            specify the types of both the input and output values of functions.
            When you declare a function, you can add type annotations after each
            paramter to declare what types of parameters the function accepts.
            The paramter type annotation goes after the parameter name.
          </p>
          <Codeblock>{`//This is normal function which take parameters.
function showMessageWithParameters(message: string, elementId: string) {
  const element = document.querySelector(\`#\${elementId}\`);
  if (element !== null) {
    element.innerHTML = message;
  }
}`}</Codeblock>
          <p>
            When a paramter has a type annotation, arguments to that function
            will be checked at compile time.
          </p>
          <Image
            alt="Function paramter type annoation error"
            src={function01}
            width="800"
            height="60"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <p>
            <em>Return type annotations: </em>TypeScript also allows you to
            specify the return type annotations. Return type annotations appear
            after the parameter list:
          </p>
          <Codeblock>{`function functionWithReturnTypeAnnoation(): number {
  let x: number = 100;
  let y: number = 500;
  const sum = x + y;
  return sum;
}`}</Codeblock>
        </div>
        <div className="flex flex-col space-y-3">
          <p>
            <em>Anonymous Funtions: </em>Anonymous functions are a little bit
            different from function declarations. When a function appreas in a
            place where TypeScript can determine how it&apos;s going to be
            called, the paramters of that function are automatically given
            types. For the following example, the anonymous function for the
            <Variablebadge text=".forEach"></Variablebadge> method infers the
            type to <Variablebadge text="string"></Variablebadge> while
            iterating each name item.
          </p>
          <Codeblock>{`const names = ["Jatin", "Varun", "Daivegna"];

names.forEach(function (name) {
  console.log(name);
});`}</Codeblock>
          <p>
            We annotate the paramter type explicitly for the anonymous function
            as show in the below snippet.
          </p>
          <Codeblock>{`const names = ["Jatin", "Varun", "Daivegna"];

names.forEach(function (name: string) {
  console.log(name);
});`}</Codeblock>
        </div>
        <div className="flex flex-col space-y-3">
          <p>
            <em>Default value parameters: </em>TypeScript allow to define the
            functions with default paramter values as well like other
            programming languages.
          </p>
          <Codeblock>{`//We can also have default value parameters.
function showMessage(message: string, elementId: string = "output") {
  const element = document.querySelector(\`#\${elementId}\`);
  if (element !== null) {
    element.innerHTML = message;
  }
}`}</Codeblock>
        </div>
      </div>
    </>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default Page;
