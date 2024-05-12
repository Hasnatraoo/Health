document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const foot = document.querySelector('.foot');
    const inch = document.querySelector('.inch');
    const weight = document.querySelector('.weight');
    const resultScreen = document.querySelector('.resultScreen');

    // Function to calculate BMI and display the result
    function calculateAndDisplayBMI() {
        let footVal = Number(foot.value) * 12; // Convert feet to inches
        let inchVal = Number(inch.value);      // Inches
        let weightVal = Number(weight.value);  // Weight in pounds

        // Calculate BMI
        let totalInches = footVal + inchVal;
        let bmi = (weightVal / (totalInches * totalInches)) * 703;

        // Display the result
        if (!isNaN(bmi) && totalInches > 0 && weightVal > 0) {
            resultScreen.textContent = "Your BMI is " + bmi.toFixed(2) + ".";
        } else {
            resultScreen.textContent = "Please enter valid numerical values for height and weight.";
        }
    }

    // Add event listener to the form to handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        calculateAndDisplayBMI();
    });

    // Function to reset the input fields and clear the result screen
    function resetInputs() {
        foot.value = '';
        inch.value = '';
        weight.value = '';
        resultScreen.textContent = ''; // Clear previous results
    }

    // Initial reset of inputs and result screen
    resetInputs();
});
