const menu = [
  { name: "Pizza Margherita", price: 36 },
  { name: "Pizza Prosciutto e Funghi", price: 40 },
  { name: "Pizza Quatro Stagioni", price: 42 },
  { name: "Pizza Diavola", price: 38 },
  { name: "Pizza Canibale", price: 42 },
];

const cashInRegister = 100;
const nextOrderId = 1;
const orderQueue = [];

///// CHALLENGE #1 /////
// Add a utility function "addNewPizza" that takes a pizza object and adds it to the menu.

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

///// CHALLENGE #2 /////
// Write another utility function "placeOrder" that takes a pizza name parameter and:
// 1. Finds that pizza object in the menu;
// 2. adds the income to the cashInRegister;
// 3. pushes a new "order object" to the orderQueue (e.g. {pizza: selectedPizzaObjectFromStep1, status: "ordered"});
// 4. returns the new order object.

function placeOrder(pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

///// CHALLENGE #3 /////
// Write the "completeOrder" function that takes an orderedId as a parameter, finds the correct order in the orderQueue, and marks its status as "completed".
// For good MediaSource, return the found order from the function.

function completeOrder(orderId) {
  const order = orderQueue.find((order) => order.id === orderId);
  order.status = "completed";
  return order;
}

addNewPizza({ name: "Pizza Salami", price: 36 });
addNewPizza({ name: "Pizza Tonno e Cipola", price: 42 });
addNewPizza({ name: "Pizza Hawaii", price: 40 });

placeOrder("Pizza Salami");
completeOrder(1);

console.log("Menu: ", menu);
console.log("Cash in register: ", cashInRegister);
console.log("Order queue: ", orderQueue);
