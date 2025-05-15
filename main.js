function addText() {
  // Get the input element and its value
  const input = document.getElementById("userInput");
  const text = input.value.trim();

  // Only proceed if input is not empty
  if (text !== "") {
    // Create a new paragraph element
    const newParagraph = document.createElement("p");
    newParagraph.className = "text-item";
    newParagraph.textContent = text;

    // Get the output div and append the new paragraph
    const outputDiv = document.getElementById("output");
    outputDiv.appendChild(newParagraph);

    // Clear the input field
    input.value = "";
    input.focus(); // Optional: keep cursor in input
  }
}
