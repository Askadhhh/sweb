/*

В этой задаче вам нужно проанализировать данные — вычислить повторы каждого слова.

Создайте функцию getRepeats с одним параметром. В этот параметр будет приходить массив данных.

Функция должна возвращать объект, в котором указано сколько раз каждое слово встречается в массиве.


*/
function getRepeats(strings) {
  const result = {};
  strings.forEach((string) => {
    if (string in result) {
      result[string] += 1;
    } else {
      result[string] = 1;
    }
  });
  return result;
}
const testArray = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "banana",
  "grape",
];
console.log(getRepeats(testArray));
