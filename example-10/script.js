function generatePattern() {
  const n = document.getElementById("lines").value;
  const patternContainer = document.getElementById("pattern");

  if (isNaN(n) || n <= 0) {
    patternContainer.textContent =
      "Please enter a positive number greater than zero.";
    return;
  }

  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  patternContainer.textContent = pattern;
}
