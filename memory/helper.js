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
