let firstName: string | null;

firstName = "Jatin Prajapati";

// firstName = 1234; //Cannot set number to string variable

let age: number = 45;

let hasPurchased = true;

let products: string[] = [];
products.push("Mango");
products.push("Banana");

let petCount: number[] = [];
petCount.push(5);
petCount.push(10);

console.log(firstName, age, hasPurchased, products, petCount);

let productType = "sports"; // can be sports or homeGoods or grocery
if (productType === "sports") {
  console.log('This product is from "sports" type.');
}

// We can use enums for the same purpose
enum ProductType {
  Sports,
  HomeGoods,
  Groceries,
}

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(`Direction enum: ${Direction.Down}`);

enum DirectionStrings {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(`DirectionStrings enum: ${DirectionStrings.Down}`);

let pt = ProductType.Sports;
if (pt === ProductType.Groceries) {
  console.log("This is grocery product");
} else {
  console.log("OTHER PRODUCT");
}

export {};
