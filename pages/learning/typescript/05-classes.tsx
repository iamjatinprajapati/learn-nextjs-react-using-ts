import {ReactElement} from "react";
import {DefaultLayout} from "@layouts/default";
import {NextPageWithLayout} from "pages/_app";
import Codeblock from "@components/codeblock";
import BackLink from "@components/backlink";
import NextLink from "@components/nextlink";
import Head from "next/head";
import Heading1 from "@components/h1";
import {ProductOutput} from "lesson/05-classes/lesson.1";
import Variablebadge from "@components/variablebadge";
import Quote from "@components/quote";
import Link from "next/link";
import Heading3 from "@components/heading3";
import class01 from "@images/classes-01.png";
import Image from "next/image";

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
                TypeScript offers full support for the <Variablebadge text="class"/>{" "}
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
            <div className="flex flex-col space-y-5">
                <section className="flex flex-col space-y-3">
                    <Heading3><>Class members</>
                    </Heading3>
                    <p>Here is the most basic class - an empty one. Empty class isn&apos;t very useful yet.</p>
                    <Codeblock>{`class Point {
  //An empty class
}`}</Codeblock>
                    <p>Let&apos;s add some members.</p>
                </section>
                <section className="flex flex-col space-y-3">
                    <Heading3 className="text-base"><>Fields</>
                    </Heading3>
                    <p>A field declaration creates a public writable property on a class</p>
                    <Codeblock>{`class Point {
  x: number;
  y: number;
}

const point = new Point();
point.x = 100;
point.y = 20;`}</Codeblock>
                    <p>As with previous learnings, the type annotation is optional, but will be an
                        implicit <Variablebadge text="any"/> if not specified.</p>
                    <p>Just like with <Variablebadge text={`const`}/>, <Variablebadge text={`let`}/>, and <Variablebadge
                        text={`var`}/>, the initializer of a class property will be used to infer the type.</p>
                    <Codeblock>{`const userAccount = new UserAccount("Jatin Prajapati");
userAccount.accountType = 12345;    //Property 'accountType' is not assignable to type 'number'.`}</Codeblock>
                    <div className="px-8 py-8 border border-zinc-300 bg-zinc-700 text-white rounded">
                        <Heading3 className="border-none text-base"><Variablebadge
                            text="strictPropertyInitialization"/></Heading3>
                        <p className="mb-2">When we set the <strong>strictPropertyInitialization</strong> to true,
                            TypeScript will raise
                            an
                            error when a class property was declared but not set in the constructor.</p>
                        <p>
                            <Image src={class01} alt="strictPropertyInitialization error" width="1255" height="485"/>
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-3">
                            <li><Variablebadge text="this.name"/> is set specifically.</li>
                            <li><Variablebadge text="this.accountType"/> is set by default.</li>
                            <li><Variablebadge text="this.email"/> is not set and raises an error.</li>
                            <li><Variablebadge text={`this.address`}/> is declared as potentially <Variablebadge
                                text={`undefined`}/> which means it does not have to be set.
                            </li>
                        </ul>
                    </div>
                    <section className="flex flex-col space-y-3">
                        <p>Note that the field needs to be initialized <em>in the constructor itself</em>. TypeScript
                            does not analyze methods you invoke from the constructor to detect initializations, because
                            a derived class might override those methods and fail to initialize the members.</p>
                        <p>If you intend to definitely initialize a field through means other that the constructor (for
                            example, maybe an external library is filling in part of your class for you), you can use
                            the <em>definite assignment assertion operator,</em> <Variablebadge text={`!`}/>.</p>
                        <Codeblock>{`class UserAccount {
    name: string;
    accountType = "user";
    //Not initialized, but no error
    email!: string;
    address: string | undefined;

    constructor(name: string) {
        this.name = name;
    }
}`}</Codeblock>
                    </section>
                    <section className="flex flex-col space-y-3">
                        <p><Variablebadge text={`readonly`}/></p>
                        <p>Fields may be prefixed with the <Variablebadge text={`readonly`}/> modified. This prevents
                            assignments to the field outside of the constructor.</p>
                        <Codeblock>{`class Greeter {
    readonly name: string = "Jatin";

    constructor(otherName?: string) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }

    error() {
        this.name = "not allowed"; //Cannot assign to 'name' because it is a read-only property.
    }
}`}</Codeblock>
                    </section>
                </section>
                <section className="flex flex-col space-y-3">
                    <Heading3 className="text-base"><>Constructors</>
                    </Heading3>
                    <p>Class constructors are very similar to functions. You can add parameters with type
                        annotations, default values, and overloads:</p>
                    <Codeblock>{`class Point {
    x: number;
    y: number;

    constructor(x = 0, y = 1) {
        this.x = x;
        this.y = y;
    }
}

class PointWithConstructorOverloads {
    x: number;
    y: number;
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y? any) {
        //Implement the logic
    }
}`}</Codeblock>
                    <p>There are just a few differences between class constructor signatures and function
                        signatures:</p>
                    <ul className="list-disc list-inside">
                        <li>Constructors can&apos;t have type parameters - these belong on the outer class
                            declaration, which we&apos;ll learn about later
                        </li>
                        <li>Constructors cannot have return type annotations - the class instance type is always
                            what&apos;s returned
                        </li>
                    </ul>
                </section>
                <section className="flex flex-col space-y-3">
                    <Heading3 className="text-base"><>Super calls</>
                    </Heading3>
                    <p>Just as in JavaScript, if you have a base class, you&apos;ll need to call <Variablebadge
                        text={`super();`}/> in you constructor body before using any <Variablebadge text={`this`}/>.
                    </p>
                    <Codeblock>{`class Base {
    k = 4;
    constructor(anotherK: number) {
        this.k = anotherK;
    }
}

class Derived extends Base{
    constructor() {
        console.log(this.k); //'super' must be called before accessing 'this' in the constructor of a derived class.
        super(20);
    }
}`}</Codeblock>
                    <Quote><>Forgetting to call <Variablebadge text={`super`}/> is an easy mistake in JavaScript,
                        but TypeScript will tell you when it&apos;s necessary.
                    </>
                    </Quote>
                </section>
                <section className="flex flex-col space-y-3">
                    <Heading3 className="text-base"><>Methods</>
                    </Heading3>
                    <p>A function property on a class is called a <em>method</em>. Methods can use all the same type
                        annotations as functions and constructors.</p>
                    <Codeblock>{`class Point {
    x = 10;
    y = 10;

    scale(n: number): void {
        this.x *= n;
        this.y *= n;
    }
}`}</Codeblock>
                    <p>As seen in the above snippet, we should not prefix the method with <Variablebadge
                        text={`function`}/> keyword. If you do, the TypeScript will complain about it with an error.
                    </p>
                </section>
                <section className="flex flex-col space-y-3">
                    <Heading3 className="text-base"><>Getters/Setters</>
                    </Heading3>
                    <p>Classes can also have <em>accessors</em>. Just like C# provides property get and set
                        methods, we can have getter and setter for the private fields.</p>
                    <Codeblock>{`class A {
    private _length: number = 0;

    get length() {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }
}

class ClassUser {
    private classA = new A();

    testGetter() {
        console.log(this.classA.length); //This calls the get length() method in class A.
    }

    testSetter() {
        this.classA.length = 25; //This calls the set length(value: number) method in class A.
    }
}`}</Codeblock>
                    <Quote><>Note that a field-backed get/set pair with no extra logic is very rarely used in
                        JavaScript. It&apos;s fine to expose public fields if you don&apos;t need to add additional
                        logic during the get/set operations.
                    </>
                    </Quote>
                    <p>TypeScript has some special inference rules for accessors:</p>
                    <ul className="list-disc list-inside">
                        <li>If <Variablebadge text={`get`}/> exists but no <Variablebadge text={`set`}/>, the
                            property is automatically <Variablebadge text={`readonly`}/>.
                        </li>
                        <li>If the type of the setter parameter is not specified, it is inferred from the return tpe
                            of the getter.
                        </li>
                        <li>Getters and setters must have the same Member Visibility, e.g. <Variablebadge
                            text={`public`}/> / <Variablebadge text={`protected`}/> / <Variablebadge
                            text={`private`}/>.
                        </li>
                    </ul>
                    <p>Since TypeScript 4.3, it is possible to have accessors with different types for getting and
                        settings.</p>
                    <Codeblock>{`class Thing {
    private _size: number = 0;

    get size(): number {
        return this._size;
    }

    set size(value: string | number | boolean) {
        let num = Number(value);
        // Do not allow NaN, Infinity, etc
        if (!Number.isFinite(num)) {
            this._size = 0;
            return;
        }
        this._size = num;
    }
}`}</Codeblock>
                </section>
                <section className="flex flex-col space-y-3">
                    <Heading3 className="text-base"><>Class heritage</>
                    </Heading3>
                    <p>Like other languages with object-oriented features, classes in JavaScript can inherit from base
                        classes.</p>
                    <p><Variablebadge text={`implements`}/> clauses</p>
                    <p>You can use an <Variablebadge text={`implements`}/> clause to check that a class satisfies a
                        particular <Variablebadge text={`interface`}/>. An error will be issued if a class fails to
                        correctly implement it.</p>
                    <Codeblock>{`interface IPingable {
    ping(): string;
}

class Sonar implements IPingable {
    ping() {
        return 'Ping!';
    }
}

// Class 'Ball' incorrectly implements interface 'IPingable'.
// Property 'ping' is missing in type 'Ball' but required in type 'IPingable'.
class Ball implements IPingable {
    pong() {
        console.log('Pong!');
    }
}`}</Codeblock>
                    <Quote><>Classes may also implement multiple interfaces, e.g. <Variablebadge
                        text={`class C implements A, B {`}/></>
                    </Quote>
                    <p><Variablebadge text={`extends`}/> clauses</p>
                    <p>Classes may <Variablebadge text={`extend`}/> from a base class. A derived class has all the
                        properties and methods of its base class, and also define additional members.</p>
                    <Codeblock>{`class Animal {
    move() {
        console.log("Moving along!");
    }
}

class Dog extends Animal {
    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}

const dog = new Dog();
// Base class method
dog.move();
// Derived class method
dog.woof(3);`}</Codeblock>
                    <p className="font-semibold">Overriding Methods</p>
                    <p>A derived class can also override a base class field or property. You can use the <Variablebadge
                        text={`super`}/> syntax to access base class methods. Note that because JavaScript classes are a
                        simple lookup object, there is no notion of a &quot;super field&quot;.</p>
                    <p>TypeScript enforces that a derived class is always a subtype of its base class.</p>
                    <Codeblock>{`class Base {
    greet() {
        console.log("Hello, world!");
    }
}

class Derived extends Base {
    greet(name?: string) {
        if (name === undefined) {
            super.greet();
        } else {
            console.log(\`Hello, \${name.toUpperCase()}\`);
        }
    }
}

const d = new Derived();
d.greet();  //prints "Hello, world!"
d.greet("reader");  //prints "Hello, reader"`}</Codeblock>
                </section>
                <section className="flex flex-col space-y-3">
                    <Heading3 className="text-base"><>Static members</>
                    </Heading3>
                    <p>Classes may have <Variablebadge text={`static`}/> members. These members aren&apos;t associated
                        with a particular instance of the class. They can be accessed through the class constructor
                        object itself. </p>
                    <Codeblock>{`class MyClass {
    static x = 0;

    static printX() {
        console.log(MyClass.x);
    }
}

console.log(MyClass.x);
MyClass.printX();`}</Codeblock>
                    <p>Static members can also use the same <Variablebadge
                        text={`public`}/>, <Variablebadge text={`protected`}/>, and <Variablebadge
                        text={`private`}/> visibility modifiers.</p>
                    <Codeblock>{`class YourClass {
    private static x = 0;
}

console.log(YourClass.x);   // Property 'x' is private and only accessible within class 'YourClass'.`}</Codeblock>
                </section>
            </div>
        </>
    );
};
Page.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout>{page}</DefaultLayout>;
};
export default Page;
