abstract class Base {
    abstract getName(): string;

    printName(): void {
        console.log("Hello, " + this.getName());
    }
}

// Non-abstract class 'Derived' does not implement inherited abstract member 'getName' from class 'Base'.
class Derived extends Base {
    getName() {
        return "world";
    }
}

const d = new Derived();
d.printName();


export {};