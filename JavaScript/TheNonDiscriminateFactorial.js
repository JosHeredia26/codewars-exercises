// Instructions: https://www.codewars.com/kata/53fe2171d5679bff300007d9

function factorial(n) {
  return n > 0 ? n * factorial(n - 1) : n < 0 ? n * factorial(n + 1) : 1;
}
