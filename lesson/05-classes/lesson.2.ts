class UserAccount {
    name: string;
    accountType = "user";
    //Not initialized, but no error
    email!: string;
    address: string | undefined;

    constructor(name: string) {
        this.name = name;
    }
}

const userAccount = new UserAccount("Jatin Prajapati");
// userAccount.accountType = 12345;    //Property 'accountType' is not assignable to type 'number'.

export {UserAccount};

class Greeter {
    readonly name: string = "Jatin";

    constructor(otherName?: string) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }

    error() {
        // this.name = "not allowed"; //Cannot assign to 'name' because it is a read-only property.
    }
}

class Point {
    x: number;
    y: number;

    constructor(x = 0, y = 1) {
        this.x = x;
        this.y = y;
    }
}

class PointWithConstructorOverloads {
    x!: number;
    y!: number;

    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
        //Implement the logic
    }
}

class Base {
    k = 4;

    constructor(anotherK: number) {
        this.k = anotherK;
    }
}

class Derived extends Base {
    constructor() {
        // console.log(this.k);    //'super' must be called before accessing 'this' in the constructor of a derived class.
        super(20);
    }
}