function generateBingoCard() {
  const card = document.getElementById("bingoCard");
  card.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    let row = card.insertRow();
    for (let j = 0; j < 5; j++) {
      let cell = row.insertCell();
      if (i === 2 && j === 2) {
        cell.innerHTML = "Free";
        continue;
      }
      cell.innerHTML = getRandomNumber(j * 15 + 1, j * 15 + 15);
    }
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
