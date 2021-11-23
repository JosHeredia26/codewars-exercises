// Instructions: https://www.codewars.com/kata/5a90c9ecb171012b47000077

function testIt(a, b) {
  return (
    a
      .toString()
      .split("")
      .reduce((a, b) => parseInt(a) + parseInt(b)) *
    b
      .toString()
      .split("")
      .reduce((a, b) => parseInt(a) + parseInt(b))
  );
}
