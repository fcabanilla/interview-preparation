async function runAlgorithm() {
  const algorithmSelect = document.getElementById("algorithm");
  const inputField = document.getElementById("input");
  const outputDiv = document.getElementById("output");

  const algorithm = algorithmSelect.value;
  const input = inputField.value.split(",").map(Number);

  try {
    const response = await fetch(
      `/run/${algorithm}?input=${JSON.stringify(input)}`
    );
    const data = await response.json();
    if (data.error) {
      outputDiv.textContent = `Error: ${data.error}`;
    } else {
      outputDiv.textContent = `Resultado: ${data.result}`;
    }
  } catch (error) {
    outputDiv.textContent = "Error al comunicarse con el servidor";
  }
}
