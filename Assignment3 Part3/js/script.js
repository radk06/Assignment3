// Utility function for element selection
const $ = (id) => document.getElementById(id);

// Event handler for processing entry
const processEntry = () => {
    const userInput = $("income").value; // Get the input value
    const income = parseFloat(userInput); // Parse as float

    if (isNaN(income) || income <= 0) {
        alert("Please enter a valid income greater than zero.");
        $("income").focus();
    } else {
        const tax = calculateTax(income); // Call calculateTax()
        $("tax").value = tax.toFixed(2); // Display the result rounded to 2 decimals
        $("income").focus();
    }
};

// Function to calculate tax based on brackets
const calculateTax = (income) => {
    let tax = 0;

    if (income <= 9875) {
        tax = income * 0.10;
    } else if (income <= 40125) {
        tax = 987.50 + (income - 9875) * 0.12;
    } else if (income <= 85525) {
        tax = 4617.50 + (income - 40125) * 0.22;
    } else if (income <= 163300) {
        tax = 14605.50 + (income - 85525) * 0.24;
    } else if (income <= 207350) {
        tax = 33271.50 + (income - 163300) * 0.32;
    } else if (income <= 518400) {
        tax = 47367.50 + (income - 207350) * 0.35;
    } else {
        tax = 156235 + (income - 518400) * 0.37;
    }

    return tax;
};

// Attach event listener when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    $("calculate").addEventListener("click", processEntry);
    $("income").focus();
});
