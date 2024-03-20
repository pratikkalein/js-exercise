function checkSpeed() {
  const speedLimit = document.getElementById("speedLimit").value;
  const vehicleSpeed = document.getElementById("vehicleSpeed").value;
  const resultContainer = document.getElementById("speedResult");

  if (isNaN(speedLimit) || isNaN(vehicleSpeed)) {
    resultContainer.textContent =
      "Please enter valid numbers for both speed limit and vehicle speed.";
    return;
  }

  const speedOverLimit = vehicleSpeed - speedLimit;
  if (speedOverLimit <= 0) {
    resultContainer.textContent = "Speed is within the limit.";
    return;
  } else {
    resultContainer.textContent = `Speed is over the limit by ${speedOverLimit} km/h.`;
  }
}
