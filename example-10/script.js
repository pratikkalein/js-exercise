function generatePattern() {
  const n = document.getElementById("lines").value;
  const patternContainer = document.getElementById("pattern");

  if (isNaN(n) || n <= 0) {
    patternContainer.textContent =
      "Please enter a positive number greater than zero.";
    return;
  }

  let pattern = "";
  for (let rows = 1; rows <= n; rows++) {
    for (let cols = 1; cols <= rows; cols++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  patternContainer.textContent = pattern;
}
