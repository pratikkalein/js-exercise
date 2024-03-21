function generateBingoCard() {
  const card = document.getElementById("bingoCard");
  card.innerHTML = "";
  let usedNumber = [];

  for (let i = 0; i < 5; i++) {
    let row = card.insertRow();
    for (let j = 0; j < 5; j++) {
      let cell = row.insertCell();
      if (i === 2 && j === 2) {
        cell.innerHTML = "Free";
        continue;
      }
      let min = j * 15 + 1;
      let max = j * 15 + 15;
      let num = getUniqueNumber(min, max, usedNumber);
      usedNumber.push(num);
      cell.innerHTML = num;
    }
  }
}

function getUniqueNumber(min, max, usedNumber) {
  let num;
  do {
    num = getRandomNumber(min, max);
  } while (usedNumber.includes(num));
  return num;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
