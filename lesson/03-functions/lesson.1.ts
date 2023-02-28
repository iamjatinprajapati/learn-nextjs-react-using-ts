//This is a function which has no input parameters.
function functionWithNoParameters() {
  return "This is the function which as no input parameters";
}

//This is normal function which take parameters.
function showMessageWithParameters(message: string, elementId: string) {
  const element = document.querySelector(`#${elementId}`);
  if (element !== null) {
    element.innerHTML = message;
  }
}

// When a paramter has a type annotation, arguments to that function will be checkd.
// showMessageWithParameters("this is message and valid parameter type", 0);

//We can also have default value parameters.
function showMessage(message: string, elementId: string = "output") {
  const element = document.querySelector(`#${elementId}`);
  if (element !== null) {
    element.innerHTML = message;
  }
}

function functionWithReturnTypeAnnoation(): number {
  let x: number = 100;
  let y: number = 500;
  const sum = x + y;
  return sum;
}

// We can define the function as async to load data from remote api.
async function getProducts() {
  let response = await fetch("https://dummyjson.com/products");
  let products = await response.json();
  console.log("getProducts()");
  console.log(products);
  return products;
}

const names = ["Jatin", "Varun", "Daivegna"];

names.forEach(function (name: string) {
  console.log(name);
});

names.forEach(function (name) {
  console.log(name);
});

export { showMessage, getProducts };
