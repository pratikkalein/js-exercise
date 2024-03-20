function calculateSumOfMultiples() {
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const number = document.getElementById("number").value;
  const result = document.getElementById("result");

  if (isNaN(start) || isNaN(end) || isNaN(number)) {
    result.textContent = "Please enter valid numbers";
    return;
  }

  let sum = 0;

  for (let i = start; i <= end; i++) {
    if (i % number === 0) {
      sum += i;
    }
  }

  result.textContent = `Sum: ${sum}`;
}
