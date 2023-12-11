const userDay = 20;
const userMonth = 2;
const userYear = 1990;
const daysInMonthIndex = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// make userMonth the starting month in the array
const daysInMonth = [
  ...daysInMonthIndex.slice(userMonth - 1),
  ...daysInMonthIndex.slice(0, userMonth - 1),
];

let days =
  (new Date() - new Date(`${userMonth}-${userDay}-${userYear}`)) / 86400000; // miliseconds to days

let daysRemainder = days % 365.25;
let months = 0; // assigned in for loop

for (let i = 0; i < 12; i++) {
  if (daysRemainder - daysInMonth[i] <= 0) {
    months = i;
    break;
  } else {
    daysRemainder -= daysInMonth[i];
  }
}

console.log(Math.floor(daysRemainder), months, Math.floor(days / 365.25));
