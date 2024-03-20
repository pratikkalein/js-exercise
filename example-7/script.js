function countValues() {
  const input = document.getElementById("valuesInput").value;
  const values = input.split(",").map((value) => value.trim());

  if (input.length === 0) {
    document.getElementById("valuesResult").innerText = "No values provided";
    return;
  }

  let truthyCount = 0;
  let falsyCount = 0;

  values.forEach((value) => {
    const convertedValue = convertToOriginalType(value);
    if (convertedValue) {
      truthyCount++;
    } else {
      falsyCount++;
    }
  });

  document.getElementById(
    "valuesResult"
  ).innerText = `Truthy values: ${truthyCount}, Falsy values: ${falsyCount}`;
}

function convertToOriginalType(value) {
  if (value === "true") return true;
  if (value === "false") return false;
  if (value === "null") return null;
  if (value === "undefined") return undefined;
  if (!isNaN(Number(value))) return Number(value);
  return value;
}
