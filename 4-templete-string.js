function printUser({ firstname = "luc", lastname = "Dupres", age = 22 }) {
  return "M. " + firstname + " " + lastname + " a " + age + " ans";
}

function printUser2({ firstname = "luc", lastname = "Dupres", age = 22 }) {
  return `M. ${firstname} ${lastname} a ${age} ans`;
}

console.log(printUser({}));
