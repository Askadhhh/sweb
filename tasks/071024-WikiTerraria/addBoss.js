import { saveData, loadData } from "./function.js";
const allBoses = loadData();
document
  .getElementById("createBoss")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Отменяем действие формы

    // Получаем все данные формы
    const formData = new FormData(this);

    // Преобразуем FormData в объект
    const newBoss = Object.fromEntries(formData.entries());

    // Выводим данные в консоль или обрабатываем
    newBoss.preHardmode = !!formData.get("preHardmode");
    allBoses.push(newBoss);
    saveData(allBoses);
    this.reset();
    alert("цспешно создано!!");
  });
