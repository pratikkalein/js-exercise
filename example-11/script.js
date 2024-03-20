function calculateGrade() {
  const marksInput = document.getElementById("marksInput").value;
  const gradeResult = document.getElementById("gradeResult");
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
    gradeResult.textContent = "Please enter valid marks.";
    return;
  }

  const average = sum / count;
  let grade;

  if (average >= 90) grade = "A+";
  else if (average >= 80) grade = "A";
  else if (average >= 70) grade = "B";
  else if (average >= 60) grade = "C";
  else if (average >= 40) grade = "D";
  else grade = "F";

  gradeResult.textContent = `Average: ${average.toFixed(2)}, Grade: ${grade}`;
}
