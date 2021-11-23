// Instructions: https://www.codewars.com/kata/58856a06760b85c4e6000055

function bitsBattle(numbers) {
  const odds = numbers
    .filter((number) => number % 2 != 0)
    .map((num) => num.toString(2));
  const evens = numbers
    .filter((number) => number % 2 == 0)
    .map((num) => num.toString(2));
  const oddsQ = odds
    .join("")
    .split("")
    .filter((n) => n != 0).length;
  const evensQ = evens
    .join("")
    .split("")
    .filter((n) => n != 1).length;
  return oddsQ == evensQ ? "tie" : oddsQ > evensQ ? "odds win" : "evens win";
}
