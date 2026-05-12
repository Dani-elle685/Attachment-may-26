        const form = document.getElementById("contactForm");

        form.addEventListener("submit", function (event) {
            event.preventDefault(); // prevents page from refreshing

            let isValid = true;

            // Inputs
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const phone = document.getElementById("phone");
            const gender = document.getElementById("gender");
            const country = document.getElementById("country");

            // Error fields
            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const phoneError = document.getElementById("phoneError");
            const genderError = document.getElementById("genderError");
            const countryError = document.getElementById("countryError");
            const checkboxError = document.getElementById("checkboxError");
            const radioError = document.getElementById("radioError");

            // Reset errors
            document.querySelectorAll(".error-message").forEach(el => {
                el.textContent = "";
            });

            document.querySelectorAll("input, select").forEach(el => {
                el.classList.remove("error", "success");
            });

            // Name validation
            if (name.value.trim() === "") {
                nameError.textContent = "Name is required";
                name.classList.add("error");
                isValid = false;
            } else {
                name.classList.add("success");
            }

            // Email validation
            const emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regex for basic email validation

            if (email.value.trim() === "") {
                emailError.textContent = "Email is required";
                email.classList.add("error");
                isValid = false;
            } else if (!emailPattern.test(email.value)) {
                emailError.textContent = "Enter a valid email";
                email.classList.add("error");
                isValid = false;
            } else {
                email.classList.add("success");
            }

            // Phone validation
            const phonePattern = /^[0-9]{10}$/;

            if (phone.value.trim() === "") {
                phoneError.textContent = "Phone number is required";
                phone.classList.add("error");
                isValid = false;
            } else if (!phonePattern.test(phone.value)) {
                phoneError.textContent =
                    "Phone must be 10 digits";
                phone.classList.add("error");
                isValid = false;
            } else {
                phone.classList.add("success");
            }

            // Gender validation
            if (gender.value === "") {
                genderError.textContent =
                    "Please select gender";
                gender.classList.add("error");
                isValid = false;
            } else {
                gender.classList.add("success");
            }

            // Country validation
            if (country.value === "") {
                countryError.textContent =
                    "Please select country";
                country.classList.add("error");
                isValid = false;
            } else {
                country.classList.add("success");
            }

            // Checkbox validation
            const checkboxes =
                document.querySelectorAll(
                    'input[name="checkbox"]:checked'
                );

            if (checkboxes.length === 0) {
                checkboxError.textContent =
                    "Select at least one checkbox";
                isValid = false;
            }

            // Radio validation
            const radio =
                document.querySelector(
                    'input[name="radio"]:checked'
                );

            if (!radio) {
                radioError.textContent =
                    "Select a radio option";
                isValid = false;
            }

            // Submit if valid
            if (isValid) {
                const formData = new FormData(form);

                let data = {};

                formData.forEach((value, key) => {
                    if (data[key]) {
                        if (!Array.isArray(data[key])) {
                            data[key] = [data[key]];
                        }

                        data[key].push(value);
                    } else {
                        data[key] = value;
                    }
                });

                console.log(data);

                alert(
                    "Form submitted successfully!\n\n" +
                    JSON.stringify(data, null, 2)
                );

                form.reset();

                document
                    .querySelectorAll("input, select")
                    .forEach(el => {
                        el.classList.remove(
                            "success"
                        );
                    });
            }
        });
  