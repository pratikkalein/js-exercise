function displayStringProps() {
  const jsonInput = document.getElementById("jsonInput").value;
  const stringPropsResult = document.getElementById("stringPropsResult");
  try {
    const obj = JSON.parse(jsonInput);
    const stringProps = getObjectStringProperties(obj);

    stringPropsResult.innerHTML = `<p>String Properties:</p><code><pre>${JSON.stringify(
      stringProps,
      null,
      2
    )}</pre></code>`;
  } catch (error) {
    stringPropsResult.innerText = "Error: Please enter a valid JSON object.";
  }
}

function getObjectStringProperties(obj) {
  const stringProps = {};
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      stringProps[key] = obj[key];
    }
  }
  return stringProps;
}
