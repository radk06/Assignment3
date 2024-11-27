// Utility function for element selection
const $ = (id) => document.getElementById(id);

// Event handler for processing entry
const processEntry = () => {
    const userInput = $("amount").value; // Get the input value
    const amount = parseInt(userInput, 10); // Parse it as an integer

    if (!isNaN(amount) && amount >= 0 && amount <= 99) {
        makeChange(amount); // Call makeChange with valid input
    } else {
        alert("Please enter a valid number between 0 and 99.");
    }
};

// Function to calculate and display change
const makeChange = (amount) => {
    const quarters = Math.floor(amount / 25); // Number of quarters
    amount %= 25; // Remainder after quarters

    const dimes = Math.floor(amount / 10); // Number of dimes
    amount %= 10; // Remainder after dimes

    const nickels = Math.floor(amount / 5); // Number of nickels
    const pennies = amount % 5; // Remainder is pennies

    // Display results in respective text boxes
    $("quarters").value = quarters;
    $("dimes").value = dimes;
    $("nickels").value = nickels;
    $("pennies").value = pennies;
};

// Attach event listener when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    $("calculate").addEventListener("click", processEntry);
});
