let temperatures = [30, 28, 35, 22, 31];
let highest = temperatures[0];
for (let i = 1; i < temperatures.length; i++) {
  if (temperatures[i] > highest) {
    highest = temperatures[i];
  }
}
console.log(highest);