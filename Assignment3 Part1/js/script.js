// Custom $ function
const $ = (selector) => document.querySelector(selector);

// Process entries and calculate tax and total
const processEntries = () => {
    const subtotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#taxRate").value);

    // Validation
    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert("Subtotal must be > 0 and < 10000");
        $("#subtotal").focus();
        return;
    }

    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert("Tax Rate must be > 0 and < 12");
        $("#taxRate").focus();
        return;
    }

    // Calculations
    const salesTax = (subtotal * taxRate) / 100;
    const total = subtotal + salesTax;

    // Display results
    $("#salesTax").value = salesTax.toFixed(2);
    $("#total").value = total.toFixed(2);
    $("#subtotal").focus();
};

// Clear fields
const clearEntries = () => {
    $("#subtotal").value = "";
    $("#taxRate").value = "";
    $("#salesTax").value = "";
    $("#total").value = "";
    $("#subtotal").focus();
};

// Clear individual field on click
const clearField = (field) => {
    $(field).addEventListener("click", () => $(field).value = "");
};

// DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    clearField("#subtotal");
    clearField("#taxRate");
    $("#subtotal").focus();
});
