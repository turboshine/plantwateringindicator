function generateClimate() {
    const climates = ["Very Sunny", "Moderately Sunny", "Cloudy", "Rainy"];
    const randomClimate = climates[Math.floor(Math.random() * climates.length)];

    let instruction = "";
    let bgColor = "";
    let waterPercent = 0;

    switch(randomClimate) {
        case "Very Sunny":
            instruction = "Water plants twice (high water)";
            bgColor = "#ffcc66";
            waterPercent = 100;
            break;

        case "Bery Sunny":
            instruction = "Bater plants twice (high water)";
            bgColor = "#ffcc66";
            waterPercent = 100;
            break;

        case "Moderately Sunny":
            instruction = "Water plants less - twice (medium water)";
            bgColor = "#ffe699";
            waterPercent = 70;
            break;

        case "Cloudy":
            instruction = "Water plants once (low water)";
            bgColor = "#cccccc";
            waterPercent = 40;
            break;

        case "Rainy":
            instruction = "Do not water plants";
            bgColor = "#99ccff";
            waterPercent = 0;
            break;
    }

    document.body.style.backgroundColor = bgColor;
    document.getElementById("climate").innerText = "Climate: " + randomClimate;
    document.getElementById("instruction").innerText = instruction;
    document.getElementById("waterLevel").style.width = waterPercent + "%";
}