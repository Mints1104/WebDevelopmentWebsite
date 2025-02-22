// Dark Mode Toggle Script

const darkModeToggle = document.getElementById("darkModeToggle");

function handleDarkMode() {
  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    darkModeToggle.textContent = document.body.classList.contains("dark-mode")
      ? "Toggle Light Mode"
      : "Toggle Dark Mode";
  });
}

handleDarkMode();
