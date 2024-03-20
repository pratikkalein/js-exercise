const numbersArray = [1, 2, 3, 4, 5, 1, 2, 1, 1, 3, 4, 5, 5, 5, 5];
document.getElementById("originalArray").textContent = `Array: ${JSON.stringify(
  numbersArray
)}`;

function countOccurrences() {
  const numberToSearch = parseInt(
    document.getElementById("searchNumber").value
  );
  let count = 0;
  for (let number of numbersArray) {
    if (number === numberToSearch) {
      count++;
    }
  }
  document.getElementById(
    "occurrencesResult"
  ).textContent = `The number ${numberToSearch} occurs ${count} time(s) in the array.`;
}
