const placesData = {
    // Sanitized places
    "millennium park": { sanitized: true, air: "Good", water: "N/A", litter: "Low", heat: "Moderate", noise: "Moderate" },
    "willis tower": { sanitized: true, air: "Moderate", water: "N/A", litter: "Low", heat: "Low", noise: "High" },
    "cloud gate": { sanitized: true, air: "Good", water: "N/A", litter: "Low", heat: "High", noise: "Moderate" },
    "buckingham fountain": { sanitized: true, air: "Good", water: "Clean", litter: "Low", heat: "High", noise: "Moderate" },
    "art institute of chicago": { sanitized: true, air: "Good", water: "N/A", litter: "Very Low", heat: "Low", noise: "High" },
    "field museum": { sanitized: true, air: "Good", water: "N/A", litter: "Low", heat: "Low", noise: "Moderate" },
    "museum of science and industry": { sanitized: true, air: "Good", water: "N/A", litter: "Very Low", heat: "Low", noise: "Moderate" },
    "shedd aquarium": { sanitized: true, air: "Moderate", water: "Clean", litter: "Low", heat: "Low", noise: "High" },
    "adler planetarium": { sanitized: true, air: "Good", water: "Clean", litter: "Very Low", heat: "Moderate", noise: "Moderate" },
    "lincoln park zoo": { sanitized: true, air: "Moderate", water: "N/A", litter: "Moderate", heat: "Moderate", noise: "High" },
    "grant park": { sanitized: true, air: "Good", water: "N/A", litter: "Low", heat: "High", noise: "Moderate" },
    "navy pier": { sanitized: true, air: "Moderate", water: "Polluted", litter: "Moderate", heat: "Moderate", noise: "High" },
    "maggie daley park": { sanitized: true, air: "Good", water: "N/A", litter: "Low", heat: "High", noise: "Moderate" },
    "oak street beach": { sanitized: true, air: "Moderate", water: "Polluted", litter: "High", heat: "Very High", noise: "High" },
    "606 trail": { sanitized: true, air: "Good", water: "N/A", litter: "Low", heat: "Moderate", noise: "Moderate" },
    "garfield park conservatory": { sanitized: true, air: "Good", water: "N/A", litter: "Very Low", heat: "Low", noise: "Low" },


    // Unsanitized places
    "chicago riverwalk": { sanitized: false, air: "Poor", water: "Polluted", litter: "High", heat: "High", noise: "Very High" },
    "lakefront trail": { sanitized: false, air: "Moderate", water: "Variable", litter: "Moderate", heat: "High", noise: "High" },
    "lou malnati's": { sanitized: false, air: "Good", water: "N/A", litter: "Low", heat: "Low", noise: "High" },
    "giordano's": { sanitized: false, air: "Good", water: "N/A", litter: "Low", heat: "Low", noise: "High" },
    "pequod's": { sanitized: false, air: "Good", water: "N/A", litter: "Low", heat: "Low", noise: "High" },
    "portillo's": { sanitized: false, air: "Good", water: "N/A", litter: "Moderate", heat: "Low", noise: "High" },
    "superdawg": { sanitized: false, air: "Good", water: "N/A", litter: "Moderate", heat: "Low", noise: "High" },
    "house of blues": { sanitized: false, air: "Moderate", water: "N/A", litter: "Low", heat: "Low", noise: "Very High" },
    "united center": { sanitized: false, air: "Moderate", water: "N/A", litter: "Moderate", heat: "Low", noise: "Very High" },
    "public transit stops": { sanitized: false, air: "Poor", water: "N/A", litter: "High", heat: "Moderate", noise: "Very High" }
};


function checkSanitation() {
    let place = document.getElementById("placeInput").value.trim().toLowerCase(); // Convert input to lowercase


    if (place === "") {
        document.getElementById("result").innerText = "Please enter a place.";
        return;
    }


    if (placesData.hasOwnProperty(place)) {
        let data = placesData[place];
        let status = data.sanitized ? "✅ Sanitized" : "❌ NOT Sanitized";
        document.getElementById("result").innerHTML = `
            <strong>${place.toUpperCase()} - ${status}</strong><br>
            🌫 Air Quality: ${data.air} <br>
            💧 Water Quality: ${data.water} <br>
            🗑 Litter Level: ${data.litter} <br>
            ☀️ Heat / UV Exposure: ${data.heat} <br>
            🔊 Noise Pollution: ${data.noise}
        `;
    } else {
        document.getElementById("result").innerText = "Not a valid tourist place. Please enter a known location in Chicago.";

    }
}

