// const user = {
//   firstname: "kevin",
//   lastname: "tillot",
//   age: 30
// };

// const { firstname, lastname } = user;
// console.log(firstname, lastname);

function printUser({ firstname = "luc", lastname, age = 22 }) {
  return "M. " + firstname + " " + lastname + " a " + age + " ans";
}

printUser({
  age: 30,
  firstname: "Poette"
});

function printUserNoDescruturing(firstname = "luc", lastname, age = 22) {
  return "M. " + firstname + " " + lastname + " a " + age + " ans";
}

// const user = { lastname: 'dupont' }
// console.log(printUser(user))

const otheruser = printUser({
  lastname: "skywalwer",
  age: "60"
});
console.log(otheruser);

const otheruser = printUserNoDescruturing("skywalwer", null, "60"); // pb on peut pas ne pas mettre le premier parametre
