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
