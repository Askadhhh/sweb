const addAnswerForm = document.querySelector("#addAnswerForm");
const containerAnswer = document.querySelector("#containerAnswer");
const createQuestionForm = document.querySelector("#createQuestionForm");

addAnswer();

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
