// Instructions: https://www.codewars.com/kata/5592e3bd57b64d00f3000047

function findNb(m) {
  let i = 1;
  let result = 0;
  while (m > 0) {
    m -= i ** 3;
    if (m == 0) {
      result = i;
    }
    i++;
  }
  return m == 0 ? result : -1;
}
