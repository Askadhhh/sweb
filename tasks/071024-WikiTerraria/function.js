export const renderCards = (cards, elContainer) => {
  const htmlCards = cards.map((el) => {
    const result = `<div class="card">
          <h3>${el.name}</h3>
          <ul>
            <li>health: ${el.health}</li>
            <li>damage: ${el.damage}</li>
            <li>biome: ${el.biome}</li>
            <li>preHardmode: ${el.preHardmode}</li>
            <li>evilBiome: ${el.evilBiom}</li>
          </ul>
          <p>
          ${el.description}
          </p>
        </div>`;
    return result;
  });
  elContainer.innerHTML = htmlCards.join("");
};
export const sortBosses = (cards, sortValue) => {
  cards.sort((a, b) => {
    [b, a] = [a, b];
    if (b[sortValue] > a[sortValue]) {
      return 1;
    }
    if (b[sortValue] < a[sortValue]) {
      return -1;
    }
    if (b[sortValue] === a[sortValue]) {
      return 0;
    }
  });
};

export const saveData = (bossArray) => {
  localStorage.setItem("bossData", JSON.stringify(bossArray));
};

// Функция для загрузки данных из localStorage
export const loadData = () => {
  const data = localStorage.getItem("bossData");
  return data ? JSON.parse(data) : []; // Если данных нет, возвращаем пустой массив
};
