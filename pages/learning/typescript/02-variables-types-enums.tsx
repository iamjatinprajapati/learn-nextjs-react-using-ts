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
import Heading3 from "@components/heading3";
import Quote from "@components/quote";

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
                <div className="text-l">
                    <Heading3>
                        The primitive types
                    </Heading3>
                    <div><em>string</em>, <em>number</em>, and <em>boolean</em></div>
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
                <Quote>
                    <>The type names <Variablebadge text={`String`}/>, <Variablebadge text={`Number`}/>,
                        and <Variablebadge text={`Boolean`}/> (starting with capital letters) are legal, but refer to
                        some special built-in types that will very rarely appear in your
                        code. <em>Always</em> use <Variablebadge text={`string`}/>, <Variablebadge
                            text={`number`}/> or <Variablebadge text={`boolean`}/> for types.
                    </>
                </Quote>
                <section className="space-y-3">
                    <Heading3 className="">
                        Enums
                    </Heading3>
                    <p>
                        Enums are a feature added to JavaScript by TypeScript which allows
                        for describing a value which could be one of a set of possible named
                        constants. Unlike most TypeScript features, this is <em>not</em> a
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
                </section>
                <section className="flex flex-col space-y-3">
                    <Heading3>Return Type Annotations</Heading3>
                    <p>You can also add return type annotations. Return type annotations appear after the parameter
                        list.</p>
                    <Codeblock>{`function getFavoriteNumber(): number {
  return 27;
}`}</Codeblock>
                    <p>Much like variable type annotations, you usually don&apos;t need a return type annotation because
                        TypeScript will infer the function&apos;s return type based on its <Variablebadge
                            text={`return`}/> statements.</p>
                </section>
                <section className="flex flex-col space-y-3">
                    <Heading3>Object Types</Heading3>
                    <p>Apart from primitives, the most common sort of type you&apos;ll encounter is
                        an <em>object</em> type. This refers to any <em>JavaScript</em> value with properties, which is
                        almost all of them! To define an object type, we simply list its properties and their types.</p>
                    <Codeblock>{`function printCoord(point: {x: number, y: number}) {
  console.lot("The coordinate's x value is " + point.x);
  console.log("The coordinate's y value is " + point.y);
}

printCoord({x: 3, y: 7});`}</Codeblock>
                    <p>Here we annotated the parameter with a type with two properties - <Variablebadge
                        text={`x`}/> and <Variablebadge text={`y`}/> - which are both of type <Variablebadge
                        text={`number`}/>. You can use <Variablebadge text={`,`}/> or <Variablebadge text={`;`}/> to
                        separate the properties, and the last separator is optinal either way.</p>
                    <p>The type part of each property is also optional. If you do not specify a type, it will be assumed
                        to be <Variablebadge text={`any`}/>.</p>
                </section>
                <section className="flex flex-col space-y-3">
                    <Heading3>Optional Properties</Heading3>
                    <p>Object types can also specify that some or all of their properties are <em>optional</em>. To do
                        this, add a <Variablebadge text={`?`}/> after the property name.</p>
                    <Codeblock>{`function printName(obj: { firstName: string, lastName?: string}) {
  //....
}

//Both OK
printName({firstName: "Jatin"});
printName({firstName: "Jatin", lastName: "Prajapati"});`}</Codeblock>
                    <p>In JavaScript, if you access a property that doesn&apos;t exists, you&apos;ll get the
                        value <Variablebadge text={`undefined`}/> rather than a runtime error. Because of this, when
                        you <em>read</em> from an optional property, you&apos;ll have to check for <Variablebadge
                            text={'undefined'}/> before using it.</p>
                    <Codeblock>{`function printName(obj: { firstName: string, lastName?: string}) {
  console.log(obj.firstName.toUpperCase()); //OK
  // Error - might crash if 'obj.lastName' is not provided!
  console.log(obj.lasttName.toUpperCase());
  
  if(obj.lastName !== undefined) {
    console.log(obj.lasttName.toUpperCase());
  }
  
  // A safe alternative using modern JavaScript syntax:
  console.log(obj.lastName?.toUpperCase());
}`}</Codeblock>
                </section>
                <section className="flex flex-col space-y-3">
                    <Heading3>Type Assertions</Heading3>
                    <p>Sometimes you will have information about the type of a value that TypeScript can&apos;t know
                        about.</p>
                    <p>For example, if you&apos;re using <Variablebadge text={`document.getElementById`}/>, TypeScript
                        only knows that this will return <em>some</em> kind of <Variablebadge text={`HTMLElement`}/>,
                        but you might know that your page will always have an <Variablebadge
                            text={`HTMLCanvasElement`}/> with a given ID.</p>
                    <p>In this situation, you can use a <em>type assertion</em> to specify a more specific type.</p>
                    <Codeblock>{`const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;`}</Codeblock>
                    <Quote>Like a type annotation, type assertions are removed by the compiler and won&apos;t affect the
                        runtime behavior of your code.</Quote>
                    <p>You can also use the angle-bracket syntax (except if the code is in a <Variablebadge
                        text={`.tsx`}/> file), which is equivalent:</p>
                    <Codeblock>{`const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");`}</Codeblock>
                    <Quote><>Reminder: Because type assertions are removed at compile-time, there is no runtime checking
                        associated with a type assertion. There won&apos;t be an exception or <Variablebadge
                            text={`null`}/> generated if the type assertion is wrong.
                    </>
                    </Quote>
                </section>
                <section className="flex flex-col space-y-3">
                    <Heading3><><Variablebadge text={`null`}/> and <Variablebadge text={`undefined`}/></>
                    </Heading3>
                    <p>JavaScript has two primitive values used to signal absent or uninitialized value: <Variablebadge
                        text={`null`}/> and <Variablebadge text={`undefined`}/>.</p>
                    <p>TypeScript has two corresponding <em>types</em> by the same names. How these types behave depends
                        on whether you have the <Variablebadge text={`strictNullChecks`}/> option on.</p>
                    <p><Variablebadge text={`strictNullChecks`}/> off</p>
                    <p>With <Variablebadge text={`strictNullChecks`}/> <em>off</em>, values that might be <Variablebadge
                        text={`null`}/> or <Variablebadge text={`undefined`}/> can still be accessed normally, and the
                        values <Variablebadge
                            text={`null`}/> or <Variablebadge text={`undefined`}/> can be assigned to a property of any
                        type. This is similar to how languages without null checks (e.g. C#, Java) behave. The lack of
                        checking for these values tends to be a major source of bugs; <strong>we always recommend people
                            turn <Variablebadge text={`strictNullChecks`}/> on if it&apos;s practical to do so in their
                            codebase.</strong></p>
                    <p><Variablebadge text={`strictNullChecks`}/> on</p>
                    <p>With <Variablebadge text={`strictNullChecks`}/> <em>on</em>, when a value is <Variablebadge
                        text={`null`}/> or <Variablebadge text={`undefined`}/>, you will need to test for those values
                        before using methods or properties on that value. Just like checking for <Variablebadge
                            text={`undefined`}/> before using an optional property, we can use <em>narrowing</em> to
                        check for values that might be <Variablebadge text={`null`}/>.</p>
                    <Codeblock>{`function doSomething(x: string | null) {
  if(x === null) {
    // do nothing
  }
  else {
    console.log("Hello, " + x.toUpperCase());
  }
}`}</Codeblock>
                    <Heading3 className={"text-base"}><>Non-null Assertion Operator (Postfix <Variablebadge
                        text={`!`}/>)
                    </>
                    </Heading3>
                    <p>TypeScript also has a special syntax for removing <Variablebadge
                        text={`null`}/> and <Variablebadge text={`undefined`}/> from a type without doing any explicit
                        checking. Writing <Variablebadge text={`!`}/> after any expression is effectively a type
                        assertion that the value isn&apos;t <Variablebadge
                            text={`null`}/> or <Variablebadge text={`undefined`}/>.</p>
                    <Codeblock>{`function liveDangerously(x?: number | null) {
  //No error
  console.log(x!.toFixed());
}`}</Codeblock>
                </section>
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
