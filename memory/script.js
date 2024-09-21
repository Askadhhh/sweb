import { duplicateElements, shufle } from "./helper.js";

const gameField = document.getElementById("gameField");

fillGame(["1", "2", "4", "5", "7"]);

function createCard(textCard) {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.textContent = textCard;
  gameField.appendChild(newCard);

  return newCard;
}
/**
 *
 * @param {Array<string>} arrContent
 * @returns
 */
function fillGame(arrContent) {
  const cards = [];
  const duplicatedContent = duplicateElements(arrContent);
  const shuffledContent = shufle(duplicatedContent);

  gameField.addEventListener("click", (event) => {
    const card = cards.find((element) => element.element === event.target);
    if (card) {
      if (card.isOpen === false) {
        card.element.textContent = card.content;
      }
    }
  });

  if (arrContent.length < 2) {
    alert("Карт должно быть минимум 2");
    return;
  }

  for (let i = 0; i < shuffledContent.length; i++) {
    cards.push({
      isOpen: false,
      content: shuffledContent[i],
      element: createCard("x"),
    });
  }
}
