// defining custom type
type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza; // nested object type
  status: "ordered" | "completed"; // union and literal type
};

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Pizza Margherita", price: 36 },
  { id: nextPizzaId++, name: "Pizza Prosciutto e Funghi", price: 40 },
  { id: nextPizzaId++, name: "Pizza Quatro Stagioni", price: 42 },
  { id: nextPizzaId++, name: "Pizza Diavola", price: 38 },
  { id: nextPizzaId++, name: "Pizza Canibale", price: 42 },
];

const orderQueue: Order[] = []; // typing an array

///// CHALLENGE #1 /////
// Add a utility function "addNewPizza" that takes a pizza object and adds it to the menu.

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza = {
    id: nextPizzaId++,
    ...pizzaObj,
  };
  menu.push(newPizza);
  return newPizza;
}

///// CHALLENGE #2 /////
// Write another utility function "placeOrder" that takes a pizza name parameter and:
// 1. Finds that pizza object in the menu;
// 2. adds the income to the cashInRegister;
// 3. pushes a new "order object" to the orderQueue (e.g. {pizza: selectedPizzaObjectFromStep1, status: "ordered"});
// 4. returns the new order object.

function placeOrder(pizza: Pizza): Order | undefined {
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: pizza,
    status: "ordered",
  };

  orderQueue.push(newOrder);
  cashInRegister += pizza.price;

  return newOrder;
}

///// CHALLENGE 7 /////
// Add types our generic "addToArray" function. It should work for adding new pizzas to the menu and adding new orders tot the orderQueue.
function addToArray<T>(array: T[], item: T): T[] {
  array.push(item);
  return array;
}

addToArray<Pizza>(menu, {
  id: nextPizzaId++,
  name: "Pizza Capriciosa",
  price: 38,
});

addToArray<Order>(orderQueue, {
  id: nextOrderId++,
  pizza: menu[2],
  status: "completed",
});

console.log(menu);
console.log(orderQueue);

///// CHALLENGE #3 /////
// Write the "completeOrder" function that takes an orderedId as a parameter, finds the correct order in the orderQueue, and marks its status as "completed".
// For good MediaSource, return the found order from the function.

function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find((order) => order.id === orderId);

  if (!order) {
    console.error(`${orderId} was not found in the ${orderQueue}.`);
    return;
  }

  order.status = "completed";
  return order;
}

///// CHALLENGE 4 /////
// Create a function called "getPizzaDetail" that will take a parameter called "identifier". We want this identifier to be allowed to either be the string name of the pizza (e.g. Diavola), OR to be the number ID of the pizza (e.g. 3).

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError(
      "Parameter 'identifier' must be either a string or a number."
    );
  }
}

///// CHALLENGE 5 /////
// Add automatic IDs to the menu items
// Make it so we can use a global variable to track the nextPizzaId and use the same trick you used with "nextOrderId++" when you're calling addNewPizza.
// Update the menu items to use this as well so you don't have to manually enter IDs 1-4.

///// CHALLENGE 6 /////
// Try to move the logic for adding an ID tot the pizza objects inside the addNewPizza function.

// addNewPizza({ name: "Pizza Salami", price: 36 });
// addNewPizza({ name: "Pizza Tonno e Cipola", price: 42 });
// addNewPizza({ name: "Pizza Hawaii", price: 40 });

// placeOrder("Pizza Salami");
// completeOrder(1);
