import { Product } from "lesson/04-interfaces/lesson.1";
import { DummyJsonAPIEndPoints } from "lesson/types";

class ProductOutput {
  products: Product[] = [];
  categories: string[] = [];

  constructor() {
    // do nothing
  }

  async getProducts() {
    const response = await fetch(DummyJsonAPIEndPoints.products);
    this.products = await response.json();
  }

  getCategories() {
    fetch(DummyJsonAPIEndPoints.categories).then((response) => {
      response.json().then((result) => {
        this.categories = result;
      });
    });
  }
}

export { ProductOutput };


