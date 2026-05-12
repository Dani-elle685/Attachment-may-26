
    const form = document.getElementById("contactForm");
    const tableBody = document.getElementById("tableBody");
    const submitBtn = document.getElementById("submitBtn");
    const editIndex = document.getElementById("editIndex");

    // Load users when page loads
    window.onload = function () {
        displayUsers();
    };

    // Form Submit
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (validateForm()) {

            const user = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                gender: document.getElementById("gender").value,
                country: document.getElementById("country").value
            };

            
            let users =
                JSON.parse(localStorage.getItem("users")) || [];

            // UPDATE
            if (editIndex.value !== "") {
                users[editIndex.value] = user;

                localStorage.setItem(
                    "users",
                    JSON.stringify(users)
                );

                alert("User updated successfully");

                submitBtn.textContent = "Save User";

                editIndex.value = "";
            }

            // CREATE
            else {
                users.push(user);

                localStorage.setItem(
                    "users",
                    JSON.stringify(users)
                );

                alert("User saved successfully");
            }

            form.reset();

            clearValidation();

            displayUsers();
        }
    });

    // DISPLAY USERS
    function displayUsers() {

        let users =
            JSON.parse(localStorage.getItem("users")) || [];

        tableBody.innerHTML = "";

        users.forEach((user, index) => {

            tableBody.innerHTML += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.gender}</td>
                    <td>${user.country}</td>

                    <td>
                        <button
                            class="edit-btn"
                            onclick="editUser(${index})"
                        >
                            Edit
                        </button>

                        <button
                            class="delete-btn"
                            onclick="deleteUser(${index})"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            `;
        });
    }

    // EDIT USER
    function editUser(index) {

        let users =
            JSON.parse(localStorage.getItem("users")) || [];

        let user = users[index];

        document.getElementById("name").value =
            user.name;

        document.getElementById("email").value =
            user.email;

        document.getElementById("phone").value =
            user.phone;

        document.getElementById("gender").value =
            user.gender;

        document.getElementById("country").value =
            user.country;

        editIndex.value = index;

        submitBtn.textContent = "Update User";
    }

    // DELETE USER
    function deleteUser(index) {

        let users =
            JSON.parse(localStorage.getItem("users")) || [];

        const confirmDelete =
            confirm("Are you sure you want to delete? " + index);

        if (confirmDelete) {

            users.splice(index, 1);

            localStorage.setItem(
                "users",
                JSON.stringify(users)
            );

            displayUsers();

            alert("User deleted successfully");
        }
    }

    // VALIDATION
    function validateForm() {

        let isValid = true;

        clearValidation();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const gender = document.getElementById("gender");
        const country = document.getElementById("country");

        // NAME
        if (name.value.trim() === "") {
            showError(
                name,
                "nameError",
                "Name is required"
            );

            isValid = false;
        } else {
            showSuccess(name);
        }

        // EMAIL
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value.trim() === "") {

            showError(
                email,
                "emailError",
                "Email is required"
            );

            isValid = false;
        }

        else if (!emailPattern.test(email.value)) {

            showError(
                email,
                "emailError",
                "Invalid email format"
            );

            isValid = false;
        }

        else {
            showSuccess(email);
        }

        // PHONE
        const phonePattern = /^[0-9]{10}$/;

        if (phone.value.trim() === "") {

            showError(
                phone,
                "phoneError",
                "Phone is required"
            );

            isValid = false;
        }

        else if (!phonePattern.test(phone.value)) {

            showError(
                phone,
                "phoneError",
                "Phone must be 10 digits"
            );

            isValid = false;
        }

        else {
            showSuccess(phone);
        }

        // GENDER
        if (gender.value === "") {

            showError(
                gender,
                "genderError",
                "Select gender"
            );

            isValid = false;
        }

        else {
            showSuccess(gender);
        }

        // COUNTRY
        if (country.value === "") {

            showError(
                country,
                "countryError",
                "Select country"
            );

            isValid = false;
        }

        else {
            showSuccess(country);
        }

        return isValid;
    }

    // SHOW ERROR
    function showError(
        input,
        errorId,
        message
    ) {
        input.classList.add("error");

        document.getElementById(errorId)
            .textContent = message;
    }

    // SHOW SUCCESS
    function showSuccess(input) {
        input.classList.add("success");
    }

    // CLEAR VALIDATION
    function clearValidation() {

        document.querySelectorAll(
            ".error-message"
        ).forEach(el => {
            el.textContent = "";
        });

        document.querySelectorAll(
            "input, select"
        ).forEach(el => {
            el.classList.remove(
                "error",
                "success"
            );
        });
    }
