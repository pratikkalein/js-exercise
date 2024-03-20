function createArray() {
  const input = document.getElementById("inputs").value;
  const items = input.split(",");

  const convertedItems = items.map((item) => {
    item = item.trim();
    const asNumber = Number(item);
    if (!isNaN(asNumber)) return asNumber;

    if (item.toLowerCase() === "true") return true;
    if (item.toLowerCase() === "false") return false;
    if (
      (item.startsWith("'") && item.endsWith("'")) ||
      (item.startsWith('"') && item.endsWith('"'))
    ) {
      return item.substring(1, item.length - 1);
    }
    return item;
  });

  document.getElementById("resultArray").textContent =
    "Array: " + JSON.stringify(convertedItems);
}
