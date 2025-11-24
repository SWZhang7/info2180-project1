document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.querySelector(".newsletter .message");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload

        const email = emailInput.value.trim();

        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
        } else {
            messageDiv.textContent =
                `Thank you! Your email address ${email} has been added to our mailing list!`;
            form.reset();
        }
    });
});
