const students = [
  { name: "Alice", rank: 2, division: "Science", city: "New York" },
  { name: "Bob", rank: 5, division: "Arts", city: "New York" },
  { name: "Charlie", rank: 1, division: "Commerce", city: "Chicago" },
  { name: "David", rank: 3, division: "Science", city: "Miami" },
  { name: "Eva", rank: 4, division: "Commerce", city: "Dallas" },
  { name: "Frank", rank: 10, division: "Arts", city: "Seattle" },
  { name: "Grace", rank: 8, division: "Science", city: "Denver" },
  { name: "Hannah", rank: 6, division: "Commerce", city: "Atlanta" },
  { name: "Ian", rank: 7, division: "Arts", city: "Boston" },
  { name: "Jill", rank: 9, division: "Science", city: "San Francisco" },
];

function applyFilterAndSort(sortBy = "rank") {
  const divisionFilter = document.getElementById("divisionFilter").value;
  let filteredStudents = students.filter((student) =>
    divisionFilter ? student.division === divisionFilter : true
  );

  filteredStudents.sort((a, b) => {
    if (sortBy === "rank") {
      return a.rank - b.rank;
    } else if (sortBy === "city") {
      return a.city.localeCompare(b.city);
    }
  });

  displayStudents(filteredStudents);
}

function displayStudents(studentArray) {
  const tbody = document
    .getElementById("studentTable")
    .getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  studentArray.forEach((student) => {
    const row = tbody.insertRow();
    row.insertCell(0).textContent = student.name;
    row.insertCell(1).textContent = student.rank;
    row.insertCell(2).textContent = student.division;
    row.insertCell(3).textContent = student.city;
  });
}

document.getElementById("divisionFilter").onchange = () => applyFilterAndSort();
window.onload = () => applyFilterAndSort();
