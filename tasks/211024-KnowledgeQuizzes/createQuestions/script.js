const text = document.querySelector("#title");
const containerAnswer = document.querySelector("#containerAnswer");
const correctAnswer = containerAnswer.querySelectorAll('input[type="radio"]');
const createAnswer = document.querySelector("#createAnswer");
const creatingAResponse = document.querySelector("#creatingAResponse");
const createQuestion = document.querySelector("#createQuestion");

containerAnswer.addEventListener("click", (event) => {
  const answers = containerAnswer.querySelectorAll("div");
  const deliteAnsewrs = containerAnswer.querySelectorAll(
    'input[type="button"]'
  );
  const delite = [...deliteAnsewrs].filter((el) => el === event.target);

  if (delite[0]) {
    const indexDeliteAnswer = [...deliteAnsewrs].findIndex(
      (el) => el === delite[0]
    );
    answers[indexDeliteAnswer].remove();
  }
});

createAnswer.addEventListener("click", (event) => {
  const allAnswers =
    containerAnswer.innerHTML +
    `<div><label> <input type="radio" name="answer" />${creatingAResponse.value} </label><input type="button" value="Удалить" /></div>`;
  containerAnswer.innerHTML = allAnswers;
  creatingAResponse.value = "";
});

createQuestion.addEventListener("click", (event) => {
  const answers = containerAnswer.querySelectorAll("div");
  const correctAnswer = containerAnswer.querySelectorAll('input[type="radio"]');

  const question = {
    title: text.value,
    answers: [...answers].map((el) => el.innerText),
    correctAnswer: [...correctAnswer].findIndex((el) => el.checked),
  };
  console.log(question);
});
