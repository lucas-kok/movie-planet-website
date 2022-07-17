window.addEventListener("load", getGreeting);

// This function will return a greeting based on the visitors' current time
function getGreeting() {
    // Birthday Actors
    const greeting = document.getElementById("greeting");

    // Current Day's Information
    var hour = new Date().getHours();
    console.log(hour);

    greeting.innerHTML = "";
    if (hour >= 0 && hour < 6) {
        greeting.innerHTML = '<p class="fs-4 mb-4" id="greeting">Goedenacht! Welkom op MoviePlanet, de website voor de populairste en leukste films! <br>Bekijk hieronder de beschikbare films en de informatie erover. <br>Staat jouw favoriete film er niet bij? <a href="./VoegFilmToe.html">Voeg hem dan toe!</a></p>';
    } else if (hour >= 6 && hour < 12) {
        greeting.innerHTML = '<p class="fs-4 mb-4" id="greeting">Goedemorgen! Welkom op MoviePlanet, de website voor de populairste en leukste films! Bekijk hieronder de beschikbare films en de informatie erover. <br><br>Staat jouw favoriete film er niet bij? <a href="./VoegFilmToe.html">Voeg hem dan toe!</a></p>';
    } else if (hour >= 12 && hour < 18) {
        greeting.innerHTML = '<p class="fs-4 mb-4" id="greeting">Goedemiddag! Welkom op MoviePlanet, de website voor de populairste en leukste films! <br>Bekijk hieronder de beschikbare films en de informatie erover. <br>Staat jouw favoriete film er niet bij? <a href="./VoegFilmToe.html">Voeg hem dan toe!</a></p>';
    } else {
        greeting.innerHTML = '<p class="fs-4 mb-4" id="greeting">Goedenavond! Welkom op MoviePlanet, de website voor de populairste en leukste films! <br>Bekijk hieronder de beschikbare films en de informatie erover. <br>Staat jouw favoriete film er niet bij? <a href="./VoegFilmToe.html">Voeg hem dan toe!</a></p>';
    }
}