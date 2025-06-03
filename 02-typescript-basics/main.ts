// PRIMITIVE DATA TYPES: string, number, boolean
let myName: string = "Anca";
let numberOfWheels: number = 4;
let isStudent: boolean = false;

// DEFINING CUSTOM TYPES
type Food = string;
let favoriteFood = "pizza";

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address; // adding the address property here
};

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: false,
  address: {
    street: "123 Main",
    city: "New York",
    country: "USA",
  },
};

let person2: Person = {
  name: "Jill",
  age: 24,
  isStudent: true,
};

// NESTED OBJECT TYPES: adding an "address" property inside an already defined type - the Person type

type Address = {
  street: string;
  city: string;
  country: string;
};

// OPTIONAL PROPERTIES: using the "?" after the property name makes it optional (address?: Address)

function displayInfo(person) {
  console.log(`${person.name} lives at ${person.address.street}.`);
}

// TYPING ARRAYS
let ages: number[] = [100, 101, 102];

let people: Person[] = [person1, person2];

// let people: Array<Person> = [person1, person2] // option 2

// LITERAL TYPES
