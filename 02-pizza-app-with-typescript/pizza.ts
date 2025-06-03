// defining custom type
type Pizza = {
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza; // nested object type
  status: string;
};

const menu = [
  { name: "Pizza Margherita", price: 36 },
  { name: "Pizza Prosciutto e Funghi", price: 40 },
  { name: "Pizza Quatro Stagioni", price: 42 },
  { name: "Pizza Diavola", price: 38 },
  { name: "Pizza Canibale", price: 42 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Order[] = []; // typing an array

function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);

  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu.`);
    return;
  }

  cashInRegister += selectedPizza.price;

  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };

  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderQueue.find((order) => order.id === orderId);

  if (!order) {
    console.error(`${orderId} was not found in the ${orderQueue}.`);
    return;
  }

  order.status = "completed";
  return order;
}

//
//
//

addNewPizza({ name: "Pizza Salami", price: 36 });
addNewPizza({ name: "Pizza Tonno e Cipola", price: 42 });
addNewPizza({ name: "Pizza Hawaii", price: 40 });

placeOrder("Pizza Salami");
completeOrder(1);

console.log("Menu: ", menu);
console.log("Cash in register: ", cashInRegister);
console.log("Order queue: ", orderQueue);
