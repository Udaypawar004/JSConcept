// Function to convert temperature
function convertTemperature(choice, value) {
    switch (choice) {
        case "CtoF":
            if (value < 0 || value > 100) {
                return "Input out of range (0°C - 100°C)";
            }
            return `${value}°C = ${(value * 9/5 + 32).toFixed(2)}°F`;
        case "FtoC":
            if (value < 32 || value > 212) {
                return "Input out of range (32°F - 212°F)";
            }
            return `${value}°F = ${((value - 32) * 5/9).toFixed(2)}°C`;
        default:
            return "Invalid choice";
    }
}


// Example 
console.log(convertTemperature("CtoF", 50));
console.log(convertTemperature("FtoC", 100));