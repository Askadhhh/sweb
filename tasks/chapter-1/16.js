let daysOfWeek = {
  понедельник: "monday",
  вторник: "tuesday",
  среда: "wednesday",
  четверг: "thursday",
  пятница: "friday",
  суббота: "saturday",
  воскресенье: "sunday",
  //   monday: "понедельник",
  //   tuesday: "вторник",
  //   wednesday: "среда",
  //   thursday: "четверг",
  //   friday: "пятница",
  //   saturday: "суббота",
  //   sunday: "воскресенье",
};

function translate(word, dictionary) {
  if (word in dictionary) {
    return `${word} перевод: ${dictionary[word]}`;
  }
  return `${word} перевод: Перевод еще не добавлен`;
}
console.log(translate("friday", daysOfWeek));
console.log(translate("пятница", daysOfWeek));
console.log(translate("fridaфывy", daysOfWeek));

/*
  
  Напиши программу-переводчик.
  
  Создай функцию translate с двумя параметрами.
  
  Первый параметр — строка со словом на русском языке,которое нужно перевести на английский.
  
  Второй параметр — объект с данными, в котором хранится перевод слов.
  
  Функция должна возвращать строку вида: 'понедельник по-английски: monday'.
  
  */
