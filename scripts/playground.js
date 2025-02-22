// Playground: Run Code Functionality
document.getElementById("runButton").addEventListener("click", function () {
  const code = document.getElementById("codeInput").value;
  const previewFrame = document.getElementById("preview");
  previewFrame.contentDocument.open();
  previewFrame.contentDocument.write(code);
  previewFrame.contentDocument.close();
});
