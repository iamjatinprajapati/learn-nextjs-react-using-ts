import { ReactElement } from "react";
import { DefaultLayout } from "@layouts/default";
import { NextPageWithLayout } from "../../_app";
import Codeblock from "@components/codeblock";
import Head from "next/head";
import BackLink from "@components/backlink";
import function01 from "@images/01function.jpg";
import function02 from "@images/02function.jpg";
import Image from "next/image";
import Variablebadge from "@components/variablebadge";
import Heading1 from "@components/h1";
import Heading3 from "@components/heading3";
import Quote from "@components/quote";
import NextLink from "@components/nextlink";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>03 - Functions and Union Types</title>
      </Head>
      <div className="flex flex-row space-x-3 items-center mb-10">
        <BackLink
          href="/learning/typescript/02-variables-types-enums"
          title="Back"
        >
          <>Back</>
        </BackLink>
        <Heading1>03. Functions and Union Types</Heading1>
      </div>
      <Heading3>Functions</Heading3>
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
        <div className="flex flex-col space-y-3">
          <p>
            <em>Function Overloads: </em>Some JavaScript functions can be called
            in a variety of argument counts and types. For example, you might
            write a function to produce a <Variablebadge text="Date" /> that
            takes either a timestampe (one argument) or a month/day/year
            specification (three arguments).
          </p>
          <p>
            In TypeScript, we can specificy a function that can be called in
            different ways by writing <em>overload signatures.</em> The
            following code snippet shows function signatures, followed by the
            body of the function:
          </p>
          <Codeblock>{`function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  }
  return new Date(mOrTimestamp);
}`}</Codeblock>
          <p>
            If you have tried the above code, you must got confused, why the
            function call with two paramters is not alled.
          </p>
          <p>
            So, the signature used to write the function body cannot be
            &quot;seen&quot; from the outside.
          </p>
          <Quote className="font-semibold text-xl">
            <>
              The signature of the <em>implementation</em> is not visible from
              the outside. When writing an overload function, you should always
              have <em>two</em> or more signatures above the implementation of
              the function.
            </>
          </Quote>
        </div>
      </div>
      <Heading3 className="mt-5">Union Types</Heading3>
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col space-y-3">
          <p>
            TypeScript&apos;s type system allows you to build new types out of
            existing ones using a large variety of operators. Let&apos;s start
            combining the types in interesting ways.
          </p>
          <p>
            The first way to combine types you might see is a <em>union</em>{" "}
            type. A union type is a type formed from two or more other types,
            represeting values that may be <em>any one</em> of those types. We
            can refer to each of these types as the union&apos;s{" "}
            <em>members</em>. The following code snippet shows a function that
            accepts a union type as parameter which takes an input value either
            of type <Variablebadge text="string"></Variablebadge> or{" "}
            <Variablebadge text="number"></Variablebadge>.
          </p>
          <Codeblock>{`function printValue(id: number | string) {
  console.log(\`Your value is: \${id}\`);
}

// OK
printValue(10);
// OK
printValue("Jatin Prajapati");
// Error
printValue(false);`}</Codeblock>
        </div>
        <div className="flex flex-col space-y-3">
          <p>
            As we did see in the above example, it is so easy to provide a value
            matching a union type - simply provide a type matching any of the
            union&apos;s members. But there is something important that we have
            to take care while workig with union types.
          </p>
          <p>
            TypeScript will only allow an operation if it is valid for{" "}
            <em>every</em> member of the union. For example, if you have the
            union <Variablebadge text="string | number" />, you cannot use
            methods that are only available on <Variablebadge text="string" />
          </p>
          <Image
            alt="Union type error"
            src={function02}
            width="970"
            height="170"
          />
          <p>
            The solution is to <em>narrow</em> the union with code, the same as
            you would in JavaScript without type annotations. <em>Narrowing</em>{" "}
            occurs when TypeScript can deduce a more specific type for a value
            based on the structure of the code. As show in the following
            snippet, TypeScript knows that only a{" "}
            <Variablebadge text="string" /> value has a{" "}
            <Variablebadge text=".toUpperCase()" /> function.
          </p>
          <Codeblock>{`function printValue(id: number | string) {
  //console.log(\`Your value is: \${id.toUpperCase()}\`);
  if (typeof id === "string") {
    // In thie if block the TypeScript compile know that the value of the id parameter is of
    // type string and allow to use the .toUpperCase() function.
    console.log(\`Your value is: \${id.toUpperCase()}\`);
  } else {
    console.log(\`Your value is: \${id}\`);
  }
}`}</Codeblock>
        </div>
        <Quote className="font-semibold text-l">
          <>
            It might be confusing that a <em>union</em> of types appears to have
            the <em>intersection</em> of those types&apos; properties. This is
            not an accident - the name <em>union</em> comes from the type
            theory. The union <Variablebadge text="number | string" /> is
            composed by taking the union <em>of the values</em> from each type.
            Notice that given two sets with corresponding facts about each set,
            only the <em>intersection</em> of those facts applies to the{" "}
            <em>union</em> of the sets themselves. For example, if we had a room
            of tall people wearing hats, and another room of Spanish speakers
            wearing hats, after combining those rooms, the only thing we know
            about <em>every</em> person is that they must be wearing a hat.
          </>
        </Quote>
      </div>
      <div className="flex justify-end mt-3">
        <p>
          <NextLink title="Next" href="/learning/typescript/04-interfaces">
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
