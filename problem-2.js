var fibonacci = [1, 1];
sum = 0;
for (i = 0; fibonacci[i] < 4000000; i++) {
  j = fibonacci[i] + fibonacci[i + 1];
  fibonacci.push(j);
}

for (i = 0; fibonacci[i] < 4000000; i ++) {
  if (fibonacci[i] % 2 === 0) {
    sum = sum + fibonacci[i];
  }
}
console.log(sum)