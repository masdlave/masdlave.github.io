const toggleButton = document.getElementById("toggle-mode");
const icon = document.getElementById("mode-icon");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    if (body.classList.contains("dark-mode")) {
        icon.classList.replace("bi-moon", "bi-sun");
    } else {
        icon.classList.replace("bi-sun", "bi-moon");
    }
});
