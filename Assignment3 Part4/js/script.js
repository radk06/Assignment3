document.addEventListener("DOMContentLoaded", () => {
    // Step 1: Declare the email pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    // Step 2: Move focus to the "Arrival date" text box
    const arrivalDateInput = document.getElementById("arrival-date");
    arrivalDateInput.focus();
  
    // Step 3: Add event listener for form submission
    const form = document.getElementById("reservation-form");
    form.addEventListener("submit", (e) => {
      let isValid = true; // Tracks whether all inputs are valid
  
      // Function to handle validation errors
      const showError = (input, message) => {
        alert(message);
        input.focus();
        isValid = false;
      };
  
      // Validate "Arrival date"
      const arrivalDate = arrivalDateInput.value.trim();
      if (!arrivalDate) {
        showError(arrivalDateInput, "Arrival date is required.");
      }
  
      // Validate "Nights" (must be numeric)
      const nightsInput = document.getElementById("nights");
      const nights = nightsInput.value.trim();
      if (!nights) {
        showError(nightsInput, "Nights is required.");
      } else if (isNaN(nights)) {
        showError(nightsInput, "Nights must be a numeric value.");
      }
  
      // Validate "Name" (required)
      const nameInput = document.getElementById("name");
      const name = nameInput.value.trim();
      if (!name) {
        showError(nameInput, "Name is required.");
      }
  
      // Validate "Email"
      const emailInput = document.getElementById("email");
      const email = emailInput.value.trim();
      if (!email) {
        showError(emailInput, "Email is required.");
      } else if (!emailPattern.test(email)) {
        showError(emailInput, "Please enter a valid email address.");
      }
  
      // Validate "Phone" (required)
      const phoneInput = document.getElementById("phone");
      const phone = phoneInput.value.trim();
      if (!phone) {
        showError(phoneInput, "Phone number is required.");
      }
  
      // Prevent submission if any field is invalid
      if (!isValid) {
        e.preventDefault();
      } else {
        // Trim and reinsert valid values back into inputs
        arrivalDateInput.value = arrivalDate;
        nightsInput.value = nights;
        nameInput.value = name;
        emailInput.value = email;
        phoneInput.value = phone;
      }
    });
  });
  