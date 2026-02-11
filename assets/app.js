(function () {
  var yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  var copyButton = document.getElementById("copy-template");
  var copyState = document.getElementById("copy-state");
  if (!copyButton || !copyState) {
    return;
  }

  var template = [
    "- App version:",
    "- macOS version:",
    "- File type/size:",
    "- Steps to reproduce:",
    "- Expected result:",
    "- Actual result:"
  ].join("\n");

  copyButton.addEventListener("click", function () {
    navigator.clipboard.writeText(template).then(function () {
      copyState.textContent = "Template copied.";
    }).catch(function () {
      copyState.textContent = "Copy failed. Select text manually.";
    });
  });
})();
