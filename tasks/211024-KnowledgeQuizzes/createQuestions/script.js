const dataName = "tests";

const tests = loadData(dataName);

const addAnswerForm = document.querySelector("#addAnswerForm");
const containerAnswer = document.querySelector("#containerAnswer");
const createQuestionForm = document.querySelector("#createQuestionForm");
const containerQuestions = document.querySelector("#containerQuestions");
const createTestForm = document.querySelector("#createTestForm");

// Добавление нового варианта ответа
addAnswerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const text = formData.get("newTextAnswer").trim();

  addAnswer(text);

  event.target.reset();
});

// Удаление нового варианта ответа
containerAnswer.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteButton")) {
    const divElement = event.target.closest("div");
    if (divElement) {
      divElement.remove();
    }
  }
});

// Создание вопроса
let answersArr = [];
createQuestionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const answersCount = containerAnswer.querySelectorAll("div").length;

  if (answersCount < 2) {
    alert("Должно быть минимум два варианта ответа!");
    return;
  }

  const formData = new FormData(event.target);

  const answersIds = formData.getAll("answersIds");
  const answers = formData.getAll("answers");

  const newQuestion = {
    id: getId(),
    title: formData.get("title"),
    answers: answers.map((answer, index) => {
      return {
        id: answersIds[index],
        text: answer,
      };
    }),
    correctAnswer: formData.get("correctAnswer"),
  };
  answersArr.push(newQuestion);
  event.target.reset();
  containerAnswer.innerHTML = "";
  renderQuestions(answersArr, containerQuestions);
  console.log(answersArr);
});

// Создание теста
createTestForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (answersArr.length === 0) {
    alert("Балбес создай вопросы!");
    return;
  }
  const formData = new FormData(event.target);

  const test = {
    id: getId(),
    title: formData.get("title"),
    questions: [...answersArr],
  };
  tests.push(test);
  answersArr.length = 0;
  event.target.reset();
  containerQuestions.innerHTML = "";
  saveData(tests, dataName);
  console.log(test);
});

function addAnswer(text = "") {
  const id = getId();
  containerAnswer.innerHTML += `<div>
          <input type="radio" name="correctAnswer" value="${id}" required />
          <input type="text" name="answersIds" value="${id}" hidden required />
          <input
            type="text"
            name="answers"
            value="${text}"
            placeholder="Введите текст ответа"
            required
          />
          <input class="deleteButton" type="button" value="Удалить" />
        </div>`;
}

function getId() {
  const now = Date.now();
  const randomNumberA = Math.floor(Math.random() * 1e8);
  const randomNumberB = Math.floor(Math.random() * 1e8);
  const randomNumberC = Math.floor(Math.random() * 1e8);
  const id = `${now.toString(36)}-${randomNumberA.toString(
    36
  )}-${randomNumberB.toString(36)}-${randomNumberC.toString(36)}`;
  return id;
}

function renderQuestions(questions, el) {
  console.log("Массив вопросов ->", questions);

  const renderLiAnswers = (answers, correctAnswer) => {
    return answers
      .map((answer) => {
        console.log(answer, "<- Вариант ответа");
        return `<li>${answer.id === correctAnswer && "* "}${answer.text}</li>`;
      })
      .join("");
  };

  const result = questions
    .map((question) => {
      console.log(question, "<- Вопрос");

      return `<div class="questionCard">
    <h3>${question.title}</h3>
    <ul>${renderLiAnswers(question.answers, question.correctAnswer)}</ul>
  </div>`;
    })
    .join("");

  el.innerHTML = result;
}
function saveData(array, name) {
  localStorage.setItem(name, JSON.stringify(array));
}

// Функция для загрузки данных из localStorage
function loadData(name) {
  const data = localStorage.getItem(name);
  return data ? JSON.parse(data) : []; // Если данных нет, возвращаем пустой массив
}
