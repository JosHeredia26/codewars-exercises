// Instructions: https://www.codewars.com/kata/5b55c49d4a317adff500015f

function pointsNumber(radius) {
  let points = 0;
  for (let a = -radius; a < radius + 1; a++) {
    for (let b = -radius; b < radius + 1; b++) {
      if (a ** 2 + b ** 2 <= radius ** 2) {
        points++;
      }
    }
  }
  return points;
}
