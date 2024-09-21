export const duplicateElements = function duplicateElements(arr) {
  const result = [];
  arr.forEach((element) => {
    result.push(element, element);
  });
  return result;
};

export const shufle = (arr) => {
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
};

export const flip = (card) => {
  if (card.isOpen === false) {
    card.element.textContent = card.content;
    card.isOpen = true;
  } else {
    card.element.textContent = "x";

    card.isOpen = false;
  }
};
