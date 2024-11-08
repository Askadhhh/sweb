const btnClickOnMe = document.querySelector("#btnClickOnMe");
const btnPain = document.querySelector("#btnPain");
const action = document.querySelector("#action");
const btnClickOnMeText = document.querySelector("#btnClickOnMe_text");

let onOf = false;
btnPain.hidden = true;
action.hidden = true;

console.log(btnClickOnMe.innerText, btnClickOnMe.innerHTML);

btnClickOnMe.addEventListener("click", function () {
  if (onOf === false) {
    onOf = true;
    btnClickOnMeText.innerText = "ЗАЧЕМ ТЫ НАЖАЛ?!";
  } else if (onOf === true) {
    action.hidden = false;
    onOf = "on";
    btnClickOnMeText.innerText = "ПРЕКРАТИ!! БОЛЬНО ЖЕ. ИЗВЕРГ";
  } else if (onOf === "on") {
    onOf = "of";
    btnClickOnMe.hidden = true;
    btnPain.hidden = false;
  }
});
btnPain.addEventListener("click", function () {
  if (true) {
    btnPain.innerText = "Пожалуйста хватит!ИЛИ Я РАССЕРЖУСЬ";
  }
});
let foo = {
"одно слово": 8,
"одно слово": 8

}