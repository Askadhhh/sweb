import { duplicateElements, shufle, flip } from "./helper.js";

const gameField = document.getElementById("gameField");
const countClicks = document.getElementById("countClicks");

fillGame(["⭐", "😭", "🚀", "😶‍🌫️", "❤️"]);

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
  let countClick = 0;
  const correntCardStep = [];
  const duplicatedContent = duplicateElements(arrContent);
  const shuffledContent = shufle(duplicatedContent);

  gameField.addEventListener("click", (event) => {
    const card = cards.find((element) => element.element === event.target);
    if (card) {
      if (card.isOpen === false) {
        countClick += 1;
        countClicks.textContent = `количество кликов: ${countClick}`;
        if (correntCardStep.length === 2) {
          if (correntCardStep[0].content !== correntCardStep[1].content) {
            correntCardStep.forEach((el) => flip(el));
          }
          correntCardStep.forEach((el) =>
            el.element.classList.remove("current")
          );
          correntCardStep.length = 0;
        }
        correntCardStep.push(card);
        flip(card);
        card.element.classList.add("current");
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
      element: createCard("❌"),
    });
  }
}
