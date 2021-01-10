export const updateElem = (arr, id, updatedTitle) => {
  const indx = arr.findIndex((elem) => elem.id === id);
  arr[indx] = { ...arr[indx], title: updatedTitle };
  return arr;
};

export const updateStatus = (arr, id, status) => {
  const indx = arr.findIndex((elem) => elem.id === id);
  arr[indx] = { ...arr[indx], completed: !status };
  return arr;
};
