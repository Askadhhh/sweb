export const saveData = (array, name) => {
  localStorage.setItem(name, JSON.stringify(array));
};
export const loadData = (name) => {
  const data = localStorage.getItem(name);
  return data ? JSON.parse(data) : []; // Если данных нет, возвращаем пустой массив
};
