const tasks = {
  1: 16,
  2: 16,
  3: 19,
};
const randomTaskList = getRandomNumber(Object.keys(tasks).length);
const randomTaskNumber = getRandomNumber(tasks[randomTaskList]);

function getRandomNumber(number) {
  return Math.floor(Math.random() * number) + 1;
}
console.log(
  `номер списка: ${randomTaskList} номер задачи: ${randomTaskNumber}`
);
