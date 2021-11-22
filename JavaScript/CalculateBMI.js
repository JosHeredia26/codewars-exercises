// Instructions: https://www.codewars.com/kata/57a429e253ba3381850000fb

function bmi(weight, height) {
  const bmi = weight / height ** 2;
  switch (true) {
    case bmi <= 18.5:
      return "Underweight";
    case bmi > 18.5 && bmi <= 25.0:
      return "Normal";
    case bmi > 25 && bmi <= 30:
      return "Overweight";
    case bmi > 30:
      return "Obese";
  }
}
