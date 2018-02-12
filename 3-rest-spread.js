// EXAMPLE 1

// function sum(x, y, z) {
//   return x + y + z;
// }

// const numbers = [1, 2, 3];

// console.log(sum(numbers));

// EXAMPLE 2

// const a = {
//   name: "toto",
//   age: 22
// };
// const b = {
//   ...a,
//   address: "5 rue clery"
// };

// console.log(a);

// EXPAMPLE 3 REST

// [a, b, ...objetIterable] = [1, 2, 3, 4, 5];
// console.log({ a, b, objetIterable });

// EXPAMPLE 4 CLONE

const a = {
  name: "toto",
  age: 22
};

let objClone = { ...a };
objClone.name = "kevin";

console.log({ objClone, a });

// !!! REFERENCE

// const a = {
//   name: "toto",
//   age: 22
// };

// const objClone = a;
// objClone.name = "kevin";
// console.log({ objClone, a });
