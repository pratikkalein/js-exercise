function displayOddEvenNumbers() {
  const startNumber = document.getElementById("startNumber").value;
  const endNumber = document.getElementById("endNumber").value;
  const oddNumbersDiv = document.getElementById("oddNumbers");
  const evenNumbersDiv = document.getElementById("evenNumbers");

  oddNumbersDiv.innerHTML = "<h3>Odd Numbers:</h3>";
  evenNumbersDiv.innerHTML = "<h3>Even Numbers:</h3>";

  if (startNumber === "" || endNumber === "") {
    oddNumbersDiv.innerHTML =
      "<p>Please fill in both start and end numbers.</p>";
    evenNumbersDiv.innerHTML = "";
    return;
  }

  if (isNaN(startNumber) || isNaN(endNumber) || startNumber > endNumber) {
    oddNumbersDiv.innerHTML =
      "<p>Please enter a valid start and end number, with start less than or equal to end.</p>";
    evenNumbersDiv.innerHTML = "";
    return;
  }

  for (let i = startNumber; i <= endNumber; i++) {
    if (i % 2 === 0) {
      evenNumbersDiv.innerHTML += `<p>${i}</p>`;
    } else {
      oddNumbersDiv.innerHTML += `<p>${i}</p>`;
    }
  }
}
