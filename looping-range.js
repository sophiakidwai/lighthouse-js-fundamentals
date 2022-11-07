const range = function (start, end, step) {
  const output = [];

  if (start === null || end === null || step === null || start > end || step <= 0) {
    return output;
  } else {
    for (let i = start; i <= end; i += step) {
      output.push(i);
    }
    return output;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));