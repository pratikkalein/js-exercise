function findMaxNumber() {
  const num1 = document.getElementById("number1").value;
  const num2 = document.getElementById("number2").value;

  const maxNumber = Math.max(num1, num2);

  document.getElementById(
    "result"
  ).innerText = `The maximum number is: ${maxNumber}`;
}
