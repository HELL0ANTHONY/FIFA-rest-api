const canBeSplitted = array => {
  if (!array.length) return 0;

  const sum = array.reduce((acc, el) => acc + el, 0);

  let left = 0;
  let right = sum;
  for (let i = 0; left != right && i < array.length; i++) {
    left += array[i];
    right -= array[i];
  }
  return left == right ? 1 : -1;
};

console.log(canBeSplitted([1, 3, 3, 8, 4, 3, 2, 3, 3]));
console.log(canBeSplitted([1, 3, 3, 8, 3, 2, 3, 3]));
console.log(canBeSplitted([]));
