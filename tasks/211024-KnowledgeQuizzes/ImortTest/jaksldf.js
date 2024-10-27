const foo = {
  name: 12,
  age: 12,
  bar: 21,
};
const bar = {
  ...foo,
  name: 44,
};
console.log(bar, foo);
