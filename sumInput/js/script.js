function sumInput() {
  const arr = [];
  while (true) {
    let a = prompt('enter number');
    if (isFinite(a) === false || a === null) break;
    arr.push(a);
  }
  let sum = 0;
  arr.forEach((el) => (sum += +el));
  alert(sum);
}
sumInput();
