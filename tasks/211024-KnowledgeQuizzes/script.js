const conteinerQuestion = document.querySelector("#conteinerQuestions");
const questionForm = document.querySelector("#questionForm");

const questions = getQuestions();

let currentQuestionIndex = 0;
let points = 0;
renderQuestion(questions[currentQuestionIndex], conteinerQuestion);

questionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formDataObject = Object.fromEntries(formData.entries());

  if (
    formDataObject.answer === `${questions[currentQuestionIndex].correctAnswer}`
  ) {
    points += 1;
  }

  currentQuestionIndex += 1;

  if (currentQuestionIndex >= questions.length) {
    document.body.innerHTML = `<p>Кол-во правильных ответов: ${points} из ${questions.length}.</p>`;
  } else {
    renderQuestion(questions[currentQuestionIndex], conteinerQuestion);
  }

  console.log(formDataObject);
});

function renderQuestion(question, conteiner) {
  const titleHtml = `<p>${question.title}</p>`;
  const shufledAnswersHtml = shufle(
    question.answers.map(
      (answer, index) =>
        `<div><label><input type="radio" name="answer" value="${index}" required /> ${answer}</label></div>`
    )
  );
  const answersHtml = shufledAnswersHtml.join("");

  conteiner.innerHTML = titleHtml + answersHtml;
}
function getQuestions() {
  return [
    {
      title: "Что делает оператор **?",
      answers: [
        "Возводит в степень.",
        "Умножает число само на себя",
        "Нет такого оператора",
      ],
      correctAnswer: 0,
    },
    {
      title: "Что делает оператор ++?",
      answers: [
        "Увеличивает значение на 1.",
        "Уменьшает значение на 1.",
        "Нет такого оператора",
      ],
      correctAnswer: 0,
    },
    {
      title: "Что вернет выражение 5 === '5'?",
      answers: ["true", "false", "Ошибка"],
      correctAnswer: 1,
    },
    {
      title: "Как объявить переменную в JavaScript?",
      answers: ["var", "let", "const", "Все вышеупомянутое"],
      correctAnswer: 3,
    },
    {
      title: "Какой метод массива добавляет элемент в конец?",
      answers: ["push()", "pop()", "shift()"],
      correctAnswer: 0,
    },
    {
      title: "Какой тип данных может хранить 'null'?",
      answers: ["Объект", "Число", "Строка"],
      correctAnswer: 0,
    },
  ];
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
