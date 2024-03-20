const originalArray = [15, 23, 8, 42, 54, 3, 29, 30, 91, 82];
document.getElementById(
  "originalArray"
).textContent = `Original Array: ${JSON.stringify(originalArray)}`;

function excludeNumber() {
  const numberToExclude = document.getElementById("excludeNumber").value;
  const newArray = originalArray.filter((item) => item !== numberToExclude);
  document.getElementById(
    "newArray"
  ).textContent = `New Array: ${JSON.stringify(newArray)}`;
}
