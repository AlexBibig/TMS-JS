function sumInput() {
  let arr = [];
  while (true) {
    let value = prompt('enter number or numbers', 1);
    if (value === '' || value === ' ' || value === null || !isFinite(value))
      break;
    arr.push(+value);
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumInput());
