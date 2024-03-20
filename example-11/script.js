function calculateGrade() {
  const marksInput = document.getElementById("marksInput").value;
  const marksArray = marksInput.split(",");
  let sum = 0;
  let count = 0;

  for (let i = 0; i < marksArray.length; i++) {
    const mark = parseFloat(marksArray[i].trim());
    if (!isNaN(mark)) {
      sum += mark;
      count++;
    }
  }

  if (count === 0) {
    document.getElementById("gradeResult").textContent =
      "Please enter valid marks.";
    return;
  }

  const average = sum / count;
  let grade;

  if (average >= 90) grade = "A";
  else if (average >= 80) grade = "B";
  else if (average >= 70) grade = "C";
  else if (average >= 60) grade = "D";
  else grade = "F";

  document.getElementById(
    "gradeResult"
  ).textContent = `Average: ${average.toFixed(2)}, Grade: ${grade}`;
}
