function findLargestNumber() {
  const numberArrayInput = document.getElementById("numberArray").value;
  const numberArray = numberArrayInput
    .split(",")
    .map((item) => parseFloat(item))
    .filter((item) => !isNaN(item));

  if (numberArray.length === 0) {
    document.getElementById("largestNumber").textContent =
      "Please enter valid numbers.";
    return;
  }

  const maxNumber = Math.max(...numberArray);
  document.getElementById("largestNumber").textContent =
    "Largest Number: " + maxNumber;
}
