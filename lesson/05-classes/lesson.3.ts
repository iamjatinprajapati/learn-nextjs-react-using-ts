class Point {
    x = 10;
    y = 10;

    scale(n: number): void {
        this.x *= n;
        this.y *= n;
    }
}

class A {
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
}

class Thing {
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
}

interface IPingable {
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
    ping() {
        return "Pong!";
    }
}

class Animal {
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
dog.woof(3);

class Base {
    greet() {
        console.log("Hello, world!");
    }
}

class Derived extends Base {
    greet(name?: string) {
        if (name === undefined) {
            super.greet();
        } else {
            console.log(`Hello, ${name.toUpperCase()}`);
        }
    }
}

const d = new Derived();
d.greet();  //prints "Hello, world!"
d.greet("reader");  //prints "Hello, reader"

class MyClass {
    static x = 0;

    static printX() {
        console.log(MyClass.x);
    }
}

console.log(MyClass.x);
MyClass.printX();

class YourClass {
    private static x = 0;
}

// console.log(YourClass.x);   // Property 'x' is private and only accessible within class 'YourClass'.

export {};