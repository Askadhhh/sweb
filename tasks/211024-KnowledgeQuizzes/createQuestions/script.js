const addAnswerForm = document.querySelector("#addAnswerForm");
const containerAnswer = document.querySelector("#containerAnswer");
const createQuestionForm = document.querySelector("#createQuestionForm");

// Добавление нового варианта ответа
addAnswerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const text = formData.get("newTextAnswer").trim();

  containerAnswer.innerHTML += `<div>
          <input type="radio" name="currectAnswer" required />
          <input
            type="text"
            name="answers"
            value="${text}"
            required
          />
          <input class="deleteButton" type="button" value="Удалить" />
        </div>`;

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

  const formData = new FormData(event.target);

  const newQuestion = {
    title: formData.get("title"),
    answers: formData.getAll("answers"),
    correctAnswer: [
      ...containerAnswer.querySelectorAll('input[type="radio"]'),
    ].findIndex((radio) => radio.checked),
  };

  console.log(newQuestion);
});
