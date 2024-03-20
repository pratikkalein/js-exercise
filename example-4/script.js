function generateFizzBuzz() {
  const startNumber = document.getElementById("startNumber").value;
  const endNumber = document.getElementById("endNumber").value;
  const resultContainer = document.getElementById("fizzBuzzResult");

  resultContainer.innerHTML = "";

  if (isNaN(startNumber) || isNaN(endNumber) || startNumber > endNumber) {
    resultContainer.innerHTML =
      "<p>Please enter valid start and end numbers, with start less than or equal to end.</p>";
    return;
  }

  for (let i = startNumber; i <= endNumber; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    resultContainer.innerHTML += `<p>${output || i}</p>`;
  }
}
