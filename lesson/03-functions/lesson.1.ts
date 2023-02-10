//This is normal function which take parameters.
//We can also have default value parameters.
function showMessage(message: string, elementId: string = "output") {
  const element = document.querySelector(`#${elementId}`);
  if (element !== null) {
    element.innerHTML = message;
  }
}

// We can define the function as async to load data from remote api.
async function getProducts() {
  let response = await fetch("https://dummyjson.com/products");
  let products = await response.json();
  console.log("getProducts()");
  console.log(products);
  return products;
}

export { showMessage, getProducts };
