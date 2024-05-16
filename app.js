document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");  // Select the form element

    form.onsubmit = function(event) {  // Event handler for form submission
        if (!validate()) {  // Validate the form
            event.preventDefault();  // Prevent form submission if validation fails
        }
    };

    function validate() {
        const username = document.getElementById("username").value;
        const creditCardNo = document.getElementById("creditcardno").value;
        const cvv = document.getElementById("cvv").value;
        const month = document.getElementById("month").value;
        const year = document.getElementById("year").value;

        let errors = [];

        // Validate username
        if (username.trim() === "") {
            errors.push("Username cannot be empty.");
        }

        // Validate credit card number
        if (!/^\d{16}$/.test(creditCardNo)) {
            errors.push("Credit card number must be 16 digits.");
        }

        // Validate CVV
        if (!/^\d{3}$/.test(cvv)) {
            errors.push("CVV must be 3 digits.");
        }

        // Validate expiry month
        const monthNumber = parseInt(month, 10);
        if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
            errors.push("Expiry month must be between 01 and 12.");
        }

        // Validate expiry year
        const currentYear = new Date().getFullYear();
        const yearNumber = parseInt(year, 10);
        if (isNaN(yearNumber) || yearNumber < currentYear) {
            errors.push("Expiry year must be the current year or later.");
        }

        if (errors.length > 0) {  // If there are validation errors
            alert(errors.join("\n"));  // Display errors in an alert box
            return false;  // Return false to prevent form submission
        }

        return true;  // Return true to allow form submission
    }
});
