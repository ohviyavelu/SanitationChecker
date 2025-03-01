// Hardcoded list of sanitized places in Illinois
const sanitizedPlaces = [
    "O'Hare Airport",
    "Northwestern Memorial Hospital",
    "Hyatt Regency Chicago",
    "University of Chicago Medical Center",
    "Chicago Union Station",
    "Millennium Park",
    "Lincoln Park Zoo",
    "Grant Park",
    "Navy Pier",
    "Maggie Daley Park",
    "The Chicago Riverwalk",
    "Museum Campus",
    "Oak Street Beach",
    "606 Trail",
    "Garfield Park Conservatory"
];

const unSanitizedPlaces = [
    "Chicago Riverwalk (General Public Areas)",
    "Lakefront Trail",
    "Hyatt Regency Chicago",
    "Deep-Dish Pizza Restaurants",
    "Chicago-Style Hot Dog Stands (Portillo’s, Superdawg)",
    "House of Blues",
    "United Center",
    "Public Transit Stops Near Attractions"
];

function checkSanitation() {
    let place = document.getElementById("placeInput").value.trim().toLowerCase();
    
    if (place === "") {
        document.getElementById("result").innerText = "Please enter a place.";
        return;
    }

    const sanitizedPlacesLowerCase = sanitizedPlaces.map(p => p.toLowerCase());
    const unSanitizedPlacesLowerCase = unSanitizedPlaces.map(p => p.toLowerCase());

    if (sanitizedPlacesLowerCase.includes(place)) {
        document.getElementById("result").innerText = place + " is sanitized!";
    } else if (unSanitizedPlacesLowerCase.includes(place)) {
        document.getElementById("result").innerText = place + " is NOT sanitized. Be cautious!";
    } else {
        document.getElementById("result").innerText = "Place not found in the list.";
    }
}