function swapValues() {
  // Get the input elements
  let value1 = document.getElementById("value1").value;
  let value2 = document.getElementById("value2").value;

  // Swap the values
  let temp = value1;
  value1 = value2;
  value2 = temp;

  // Update the inputs with swapped values
  document.getElementById("value1").value = value1;
  document.getElementById("value2").value = value2;

  // Display the swapped values
  document.getElementById(
    "result"
  ).innerHTML = `Swapped Values: Value 1 = ${value1}, Value 2 = ${value2}`;
}
