//task7
const form = document.querySelector("form");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");
const errorMsg = document.getElementById("error");

if (document.getElementById("submit")) {
    form.addEventListener("click", function (event) {
        if (nameField.value.trim() === "" || emailField.value.trim() === "" || messageField.value.trim() === "") {
            event.preventDefault();
            errorMsg.textContent = "Please fill in all fields before submitting!";
        } else {
            errorMsg.textContent = "";
        }
    });

}




