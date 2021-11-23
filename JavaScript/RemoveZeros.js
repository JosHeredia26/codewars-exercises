// Instructions: https://www.codewars.com/kata/52aae14aa7fd03d57400058f

function removeZeros(array) {
  let newArray = new Array(array.length);
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0 && array[i] !== "0") {
      newArray[index] = array[i];
      index++;
    }
  }
  for (let j = 0; j < array.length; j++) {
    if (array[j] === 0) {
      newArray[index] = 0;
      index++;
    }
    if (array[j] === "0") {
      newArray[index] = "0";
      index++;
    }
  }
  return newArray;
}
