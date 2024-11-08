const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

// HTML-форма для отправки данных
const formHTML = `
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
`;

// Создание сервера
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    // Отправляем HTML-форму при запросе GET на главную страницу
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(formHTML);
  } else if (req.method === "POST" && req.url === "/submit") {
    // Получаем данные формы при запросе POST на '/submit'
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const formData = querystring.parse(body);

      // Обрабатываем полученные данные и отправляем ответ
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        `<h1>Thank you, ${formData.name}!</h1><p>Your email: ${formData.email}</p>`
      );
    });
  } else if (req.method === "GET" && req.url === "/foo/bar") {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Секретная страница</h1>");
  } else {
    // Обработка ненайденных маршрутов
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Такой страницы не существует");
  }
});

// Запуск сервера
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
