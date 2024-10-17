const foo = [1, 2, 3, 4, 5];
console.log(foo.reduce((acc, el) => acc + el, 100));
const roma = [
  ["name", "Рома"],
  ["age", "15"],
  ["gender", "Мужской"],
];
let result = roma.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});

// result = Object.fromEntries(roma);

console.log(result);
console.log(foo.join(";").split(";"));
