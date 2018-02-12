// function add(a, b) {
//   return a + b;
// }

// const add2 = (a, b) => {
//   return a + b;
// };

// attention au this

// function add(a, b) {
//   console.log(this);
//   return a + b;
// }

const add2 = (a, b) => {
  console.log(this);
  return a + b;
};

add2();
