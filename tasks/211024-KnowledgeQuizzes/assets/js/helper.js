export const saveData = (array, name) => {
  localStorage.setItem(name, JSON.stringify(array));
};
export const loadData = (name) => {
  const data = localStorage.getItem(name);
  return data ? JSON.parse(data) : []; // Если данных нет, возвращаем пустой массив
};
export const getId = () => {
  const now = Date.now();
  const randomNumberA = Math.floor(Math.random() * 1e8);
  const randomNumberB = Math.floor(Math.random() * 1e8);
  const randomNumberC = Math.floor(Math.random() * 1e8);
  const id = `${now.toString(36)}-${randomNumberA.toString(
    36
  )}-${randomNumberB.toString(36)}-${randomNumberC.toString(36)}`;
  return id;
};
