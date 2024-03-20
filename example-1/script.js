function swapValues() {
  let value1 = document.getElementById("value1").value;
  let value2 = document.getElementById("value2").value;
  let result = document.getElementById("result");

  if (value1 === "" || value2 === "") {
    result.innerHTML = "Please enter both values";
    return;
  }

  [value1, value2] = [value2, value1];

  document.getElementById("value1").value = value1;
  document.getElementById("value2").value = value2;

  result.innerHTML = `Swapped Values: Value 1 = ${value1}, Value 2 = ${value2}`;
}
