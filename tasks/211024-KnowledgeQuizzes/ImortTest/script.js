import { loadData, saveData, getId } from "../assets/js/helper.js";
const importJsonTestForm = document.querySelector("#importJsonTestForm");
importJsonTestForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const textAreaValue = formData.get("jsonTest");
  try {
    const test = JSON.parse(textAreaValue);
    if (validateTest(test)) {
      console.log("импорт успешен");
      const finalTest = replaceAllIds(test);
      document.body.innerHTML += `<pre><code>${JSON.stringify(
        finalTest,
        null,
        2
      )}</code></pre>`;
      const tests = loadData("tests");
      tests.push(finalTest);
      saveData(tests, "tests");
    } else {
      throw new Error("формату jsona не соответсвует");
    }
    console.log(test);
  } catch (error) {
    alert(`Ошибка импорта: ${error.message}`);
  }
});
function validateTest(test) {
  return (
    isNotEmptyString(test.id) &&
    isNotEmptyString(test.title) &&
    isNotEmptyArray(test.questions, 1) &&
    test.questions.every((question) => {
      return (
        isNotEmptyString(question.id) &&
        isNotEmptyArray(question.answers, 2) &&
        isNotEmptyString(question.correctAnswer) &&
        isNotEmptyString(question.title) &&
        question.answers.every((answer) => {
          return isNotEmptyString(answer.id) && isNotEmptyString(answer.text);
        })
      );
    })
  );
}
function isNotEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function isNotEmptyArray(value, minLength) {
  return Array.isArray(value) && value.length >= minLength;
}
function replaceAllIds(test) {
  return {
    ...test,
    id: getId(),
    questions: test.questions.map((question) => {
      const newCorrectAnswerId = getId();

      return {
        ...question,
        id: getId(),
        answers: question.answers.map((answer) => {
          const id =
            answer.id === question.correctAnswer ? newCorrectAnswerId : getId();
          return {
            ...answer,
            id,
          };
        }),
        correctAnswer: newCorrectAnswerId,
      };
    }),
  };
}
