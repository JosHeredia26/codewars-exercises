// Instructions: https://www.codewars.com/kata/55c9172ee4bb15af9000005d

function countOddPentaFib(n) {
  let array = [];
  for (let i = 0; i < n + 1; i++) {
    array.push(pentaFib(i));
  }
  return n == 0 ? 0 : n == 1 ? 1 : array.filter((e) => e % 2 != 0).length - 1;
}
function pentaFib(n) {
  switch (n) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 2:
      return 1;
    case 3:
      return 2;
    case 4:
      return 4;
    default:
      return (
        pentaFib(n - 1) +
        pentaFib(n - 2) +
        pentaFib(n - 3) +
        pentaFib(n - 4) +
        pentaFib(n - 5)
      );
  }
}
