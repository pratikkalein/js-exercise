function Circle(radius) {
  this.radius = radius;

  Object.defineProperty(this, "area", {
    get: function () {
      return Math.PI * this.radius * this.radius;
    },
    configurable: false,
  });
}

let circle = new Circle(0);
function updateCircleArea() {
  const radius = parseFloat(document.getElementById("radiusInput").value);
  if (isNaN(radius) || radius <= 0) {
    alert("Please enter a valid radius greater than 0.");
    return;
  }

  circle.area = 0;

  circle.radius = radius;
  document.getElementById("circleArea").textContent =
    "Area: " + circle.area.toFixed(2);
}
