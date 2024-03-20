const numbersArray = [15, 23, 8, 42, 54, 3, 29, 30, 91, 82];
document.getElementById("arrayDisplay").textContent =
  JSON.stringify(numbersArray);

function checkIfPresent() {
  const number = parseInt(document.getElementById("numberInput").value, 10);
  const resultElement = document.getElementById("result");

  if (isNaN(number)) {
    resultElement.textContent = "Please enter a valid number.";
    return;
  }

  const isPresent = numbersArray.includes(number);
  resultElement.textContent = isPresent
    ? `${number} is present in the array.`
    : `${number} is not present in the array.`;
}
