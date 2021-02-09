const allowFunction = (array, field) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element[field].length === 0) {
      return false;
    }
  }
};
export { allowFunction };
