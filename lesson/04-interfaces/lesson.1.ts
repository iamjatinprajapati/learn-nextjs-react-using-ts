type name = {
  firstName: string;
  lastName: string;
};
interface IName {
  firstName: string;
  lastName: string;
}
function printName(obj: IName): void {
  console.log(`${obj.firstName} ${obj.lastName}`);
}

type Point = {
  x: number;
  y: number;
};

export interface Product {
  brancd: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
  images: ProductImage[];
}

export interface ProductImage {
  url: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://dummyjson.com/products");
  const products: Product[] = (await response.json()).products;
  return products;
};

const fetchCategories = async () => {
  const response = await fetch("https://dummyjson.com/products/categories");
  const categories = await response.json();
  return categories;
};

export async function getProducts1() {}

export { fetchProducts, fetchCategories };

// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;

// function getBear(): Bear {
//   return {
//     name: "John Doe",
//     honey: true,
//   };
// }

type Animal = {
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
}

type TypeScriptAPI = string | number;

interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
const window: Window = { title: "This is window.", ts: 1 };
window.ts = src;

// type TypeScriptAPI = string | number;

// type TWindow = {
//   title: string;
// };

// type TWindow = {
//   ts: TypeScriptAPI;
// };

// Error: Duplicate identifier 'Window'.
