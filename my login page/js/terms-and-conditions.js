const acceptCheckbox = document.getElementById("acceptCheckbox");
const proceedButton = document.getElementById("proceedButton");

acceptCheckbox.addEventListener("change", function () {
    proceedButton.disabled = !acceptCheckbox.checked;
});

proceedButton.addEventListener("click", function () {
    if (acceptCheckbox.checked) {
        window.location.href = "login.html";
    }
});
