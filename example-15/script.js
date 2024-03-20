function calculateTotalSum() {
  const input = document.getElementById("inputArgs").value;

  let args;
  try {
    args = eval(`[${input}]`);
  } catch (e) {
    document.getElementById("totalSumResult").textContent =
      "Invalid input. Please follow the format [1,2],3.";
    return;
  }

  const sum = sumOfAllNumbers(...args);
  document.getElementById("totalSumResult").textContent = `Total Sum: ${sum}`;
}

function sumOfAllNumbers(...args) {
  let sum = 0;
  for (const arg of args) {
    if (Array.isArray(arg)) {
      for (const num of arg) {
        if (typeof num === "number") {
          sum += num;
        }
      }
    } else if (typeof arg === "number") {
      sum += arg;
    }
  }
  return sum;
}
