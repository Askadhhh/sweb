const express = require("express");
const bodyParser = require("body-parser");
const fs = require("node:fs");
const app = express();
const PORT = 3000;

// Используем bodyParser для обработки данных из формы
app.use(bodyParser.urlencoded({ extended: true }));

// Маршрут для отображения HTML-формы
app.get("/", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>HTML Form</title>
        </head>
        <body>
            <h1>Submit Form</h1>
            <form action="/submit" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <br><br>
                <input type="submit" value="Submit">
            </form>
        </body>
        </html>
    `);
});

// Маршрут для обработки данных формы
app.post("/submit", (req, res) => {
  const { name, email } = req.body;

  // Отправляем ответ с подтверждением
  res.send(`
        <h1>Спасибо, ${name}!</h1>
        <p>Ваша электронная почта: ${email}</p>
    `);
});

// Маршрут для обработки данных формы
app.get("/foo/bar", (req, res) => {
  res.send("<h1>Скрытная страница</h1>");
});

const users = loadData("users");

app.get("/users", (req, res) => {
  res.send(
    `<form action="/users" method="POST">
                <label for="name">Имя:</label>
                <input type="text" id="name" name="name" required>
                <br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <br><br>
                <input type="submit" value="Создать пользователя">
            </form>
    Пользователи: <ul>${users
      .map((user) => `<li><a href="/users/${user.id}">${user.name}</a></li>`)
      .join("")}</ul>`
  );
});
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: getId(),
    name,
    email,
  };
  users.push(newUser);
  saveData("users", users);
  res.redirect(`/users/${newUser.id}`);
});
app.get("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const user = users.find((user) => user.id === userId);
  console.log(user);
  if (user) {
    // res.send(
    //   `
    //   <ul>
    //     <li>Имя:${user.name}</li>
    //     <li>Электронная почта:${user.email}</li>
    //     </ul>
    //     <a href="/users">Вернуться к списку пользователей</a>
    //     `
    // );
    res.json(user);
  } else {
    res.send(
      `Пользователь не найден <a href="/users">Вернуться к списку пользователей</a>`
    );
  }
});
// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

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
function loadData(fileName) {
  const data = JSON.parse(fs.readFileSync(`${fileName}.json`, "utf8"));
  return data;
}
function saveData(fileName, data) {
  fs.writeFileSync(`${fileName}.json`, JSON.stringify(data, null, 2));
}
