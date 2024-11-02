"use strict";
import { saveData, loadData, getId } from "./assets/js/helper.js";

const dataName = "tests";
const state = {
  dataName,
  tests: loadData(dataName),
  selectedTest: null,
  answersTest: null,
  currentQuestionIndex: 0,
  points: 0,
};
console.log(state);

renderSelectTest();

function renderQuestion(question, conteiner) {
  const titleHtml = `<p>${question.title}</p>`;
  const shufledAnswersHtml = shufle(
    question.answers.map(
      (answer) =>
        `<div><label><input type="radio" name="answer" value="${answer.id}" required /> ${answer.text}</label></div>`
    )
  );
  const answersHtml = shufledAnswersHtml.join("");

  conteiner.innerHTML = titleHtml + answersHtml;
}

function shufle(arr) {
  const result = arr.map((el) => el);

  result.sort(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      return 1;
    } else {
      return -1;
    }
  });
  return result;
}
function renderQuestionProgress(current, count, container) {
  container.innerHTML = `${current} задание из ${count}`;
}
function renderSelectTest() {
  const optionHtml = state.tests
    .map((test) => `<option value="${test.id}" label="${test.title}"></option>`)
    .join("");
  document.body.innerHTML = `
    <a href="./createQuestions/index.html">Создать тест</a>
    <a href="./imortTest/index.html">Импортировать тест</a>
  
  <div id="selectTestContainer">
      <form id='selectTestForm'>
        <label>
          Выберите тест:
<select  name='testId'>
          ${optionHtml}
        </select>
          
        </label>

        

        <input type="submit" value="Пройти тест" />
      </form>
    </div>`;
  const selectTestForm = document.querySelector("#selectTestForm");

  if (selectTestForm) {
    selectTestForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const dataForm = new FormData(event.target);

      const test = state.tests.find(
        (test) => test.id === dataForm.get("testId")
      );

      if (test) {
        state.selectedTest = test;
        // state.answersTest = {
        //   testId: state.selectedTest.id /* id теста */,
        //   startDate: Date.now() /* Время начала теста Date.now() */,
        //   endDate: null /* Время начала теста Date.now() */,
        //   answers: [],
        // };

        console.log(state.answersTest);
      } else {
        alert("Тест не нашелся");
      }
      renderTestList();
      console.log(test);
    });
  }
}
function renderTestList() {
  state.answersTest = {
    id: getId(),
    testId: state.selectedTest.id /* id теста */,
    startDate: Date.now() /* Время начала теста Date.now() */,
    endDate: null /* Время начала теста Date.now() */,
    answers: [],
  };
  state.currentQuestionIndex = 0;
  state.points = 0;
  document.body.innerHTML = `<div id="testContainer">
      <div id="questionProgress"></div>
      <form id="questionForm">
        <div id="conteinerQuestions"></div>
        <input type="submit" />
      </form>
    </div>
    <div id="testActions">
      <button id="restartButton">Начать заного</button>
      <button id="backButton">Вернуться к выбору теста</button>
    </div>`;
  const testContainer = document.getElementById("testContainer");
  const conteinerQuestion = document.querySelector("#conteinerQuestions");
  const questionForm = document.querySelector("#questionForm");
  const questionProgress = document.querySelector("#questionProgress");
  const restartButton = document.getElementById("restartButton");
  const backButton = document.getElementById("backButton");

  //обработка ответа пользователя

  questionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());

    if (
      formDataObject.answer ===
      state.selectedTest.questions[state.currentQuestionIndex].correctAnswer
    ) {
      console.log("-------------", formDataObject);

      state.points += 1;
    }

    state.answersTest.answers.push({
      questionId: state.selectedTest.questions[state.currentQuestionIndex].id,
      answerId: formDataObject.answer,
    });

    state.currentQuestionIndex += 1;

    if (state.currentQuestionIndex >= state.selectedTest.questions.length) {
      const countPoint = state.answersTest.answers.reduce(
        (accumulator, currentValue, index) =>
          currentValue.answerId ===
          state.selectedTest.questions[index].correctAnswer
            ? ++accumulator
            : accumulator,
        0
      );
      testContainer.innerHTML = `<p>Кол-во правильных ответов: ${countPoint} из ${state.selectedTest.questions.length}.</p>`;
      state.answersTest.endDate = Date.now();
      console.log(countPoint);

      testContainer.innerHTML += `<div id="testContainer">
      
        <h2>${state.selectedTest.title}</h2>
        <div>
          ${state.selectedTest.questions
            .map((question, index) => {
              const answerQuStyle =
                question.correctAnswer ===
                state.answersTest.answers[index].answerId
                  ? `border:3px solid green`
                  : `border:3px solid red`;
              return `<div style="${answerQuStyle}"><p>${question.title}</p>
            <ul>
            ${question.answers
              .map((answer) =>
                answer.id === state.answersTest.answers[index].answerId
                  ? `<li><strong>${answer.text}</strong></li>`
                  : `<li>${answer.text}</li>`
              )
              .join("")}
          </ul>
          </div>
            `;
            })
            .join("")}
          
        </div>
      
    </div>`;
      //`<pre><code>${JSON.stringify(
      //   state.answersTest,
      //   null,
      //   2
      // )}</code></pre>`;
      pushTestResult(state.answersTest);
    } else {
      renderQuestionProgress(
        state.currentQuestionIndex + 1,
        state.selectedTest.questions.length,
        questionProgress
      );
      renderQuestion(
        state.selectedTest.questions[state.currentQuestionIndex],
        conteinerQuestion
      );
    }

    console.log(formDataObject);
  });

  //начать тест заного

  restartButton.addEventListener("click", () => {
    renderTestList();
  });

  //Вернуться к выбору теста

  backButton.addEventListener("click", () => {
    renderSelectTest();
  });

  renderQuestionProgress(
    state.currentQuestionIndex + 1,
    state.selectedTest.questions.length,
    questionProgress
  );
  renderQuestion(
    state.selectedTest.questions[state.currentQuestionIndex],
    conteinerQuestion
  );
}
function pushTestResult(testResult) {
  const keyData = "testResults";
  const data = loadData(keyData);
  data.push(testResult);

  saveData(data, keyData);
}
