function findMaxNumber() {
  const num1 = document.getElementById("number1").value;
  const num2 = document.getElementById("number2").value;
  result = document.getElementById("result");

  if (num1 === "" || num2 === "") {
    result.innerText = "Please enter both numbers";
    return;
  }
  const maxNumber = Math.max(num1, num2);

  result.innerText = `The maximum number is: ${maxNumber}`;
}
