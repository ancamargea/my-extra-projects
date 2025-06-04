/// PRIMITIVE DATA TYPES ///
// string, number, boolean
let myName: string = "Anca";
let numberOfWheels: number = 4;
let isStudent: boolean = false;

/// DEFINING CUSTOM TYPES ///
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

/// NESTED OBJECT TYPES ///
// Adding an "address" property inside an already defined type - the Person type
type Address = {
  street: string;
  city: string;
  country: string;
};

/// OPTIONAL PROPERTIES ///
// Using the "?" after the property name makes it optional (address?: Address)
function displayInfo(person) {
  console.log(`${person.name} lives at ${person.address.street}.`);
}

/// TYPING ARRAYS ///
let ages: number[] = [100, 101, 102];
let people: Person[] = [person1, person2];

/// LITERAL TYPES ///
let myName1: "Bob" = "Bob";
const myName2: "Bob" = "Bob";

/// UNIONS ///
type UserRole1 = "guest" | "member" | "admin";

type User1 = {
  username: string;
  role: UserRole1;
};

let userRole: UserRole1 = "member";

/// FUNCTION RETURN TYPES ///
const users: User1[] = [
  { username: "john-doe", role: "admin" },
  { username: "jane-doe", role: "member" },
  { username: "guest_user", role: "guest" },
];

function fetchUserDetails(username: string): User1 {
  const user1 = users.find((user) => user.username === username);
  if (!user1) {
    throw new Error(`User with username ${username} not found.`);
  }
  return user1;
}

/// TYPESCRIPT ANY TYPE ///
// DON'T use it!
// One legitimate use-case: moving your code base from JavaScript to TypeScript and you don't have the time to write all your complex tyes.
let value: any = 1;
value.toUpperCase();
value = "Hi!";
value.map();

/// VOID RETURN TYPE ///
// A function that doesn't return anything

/// UTILITY TYPES AND PARTIAL ///
// UTILITY TYPES - Like a function, they take other types in as a parameter and return a new type, with some changes made to it.
// Built-in to TS; perform commonly-needed modifications to existing types.
// They use "Generics" syntax using angle brackets <>.

type User2 = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin";
};

// PARTIAL TYPE modifies the type you pass in and turns all properties into optional properties.
type UpdatedUser = Partial<User2>;

let nextUserId = 1;

const users2: User2[] = [
  { id: nextUserId++, username: "john-doe", role: "member" },
  { id: nextUserId++, username: "jane-smith", role: "contributor" },
  { id: nextUserId++, username: "alice_jones", role: "admin" },
  { id: nextUserId++, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: any) {
  const foundUser = users2.find((user2) => user2.id === id);
  if (!foundUser) {
    console.error("User not found.");
    return;
  }
  Object.assign(foundUser, updates);
}

updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });
console.log(users2);

/// OMIT UTILITY TYPES ///
// Takes in a type AND a string (or union of strings) property name(s), and returns a new type with those properties removed.
function addNewUser(newUser: Omit<User2, "id" | "user">): User2 {
  const user2: User2 = {
    id: nextUserId++,
    ...newUser,
  };
  users2.push(user2);
  return user2;
}

addNewUser({ username: "joe_schmoe", role: "member" });
console.log(users2);

/// GENERICS <T> ///
// Add flexibility to existing functions, types etc.
// Act like function parameters, but for types.
// Use angle brackets syntax (<>).

const gameScores = [14, 21, 33, 42, 59];
const favoriteThings = [
  "raindrops on roses",
  "whiskers on kittens",
  "bright copper kettles",
  "warm woolen mittens",
];
const voters = [
  { name: "Alice", age: 42 },
  { name: "Bob", age: 77 },
];

function getLastItem<Type>(array: Type[]): Type | undefined {
  return array[array.length - 1];
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
