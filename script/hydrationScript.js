document.getElementById('hydrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect values from the form
    var weight = parseFloat(document.getElementById('weight').value);
    var waterIntake = parseFloat(document.getElementById('waterIntake').value);
    var activityLevel = document.getElementById('activityLevel').value;

    // Calculate recommended water intake
    var baseRecommendation = weight * 0.033; // Basic recommendation in liters
    var activityMultiplier = 1; // Adjust based on activity level

    if (activityLevel === "low") {
        activityMultiplier = 1;
    } else if (activityLevel === "moderate") {
        activityMultiplier = 1.2;
    } else if (activityLevel === "high") {
        activityMultiplier = 1.5;
    }

    var totalRecommended = baseRecommendation * activityMultiplier;

    // Generate output
    var resultText = '';
    if (waterIntake >= totalRecommended) {
        resultText = "Great job! You're well hydrated.";
    } else {
        var missingAmount = totalRecommended - waterIntake;
        resultText = "You need to drink " + missingAmount.toFixed(2) + " more liters of water to reach your optimal hydration level.";
    }

    // Display the result
    document.getElementById('result').innerText = resultText;
});
