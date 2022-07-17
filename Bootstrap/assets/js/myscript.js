window.addEventListener("load", init);

function init() {
    startCarousel();
    getGreeting();
}

function startCarousel() {
    var myCarousel = document.querySelector('#myCarousel');
    var carousel = new bootstrap.Carousel(myCarousel);
}

function getGreeting() {
    // Birthday Actors
    const greeting = document.getElementById("greeting");

    // Current Day's Information
    var hour = new Date().getHours();
    console.log(hour);

    greeting.innerHTML = "";
    if (hour >= 0 && hour < 6) {
        greeting.innerHTML = '<p class="fs-4 mb-4" id="greeting">Goedenacht! Welkom op MoviePlanet, de website voor de populairste en leukste films! Bekijk hieronder de beschikbare films en de informatie erover. <br>Staat jouw favoriete film er niet bij? <a href="./VoegFilmToe.html">Voeg hem dan toe!</a></p>';
    } else if (hour >= 6 && hour < 12) {
        greeting.innerHTML = '<p class="fs-4 mb-4" id="greeting">Goedemorgen! Welkom op MoviePlanet, de website voor de populairste en leukste films! Bekijk hieronder de beschikbare films en de informatie erover. <br><br>Staat jouw favoriete film er niet bij? <a href="./VoegFilmToe.html">Voeg hem dan toe!</a></p>';
    } else if (hour >= 12 && hour < 18) {
        greeting.innerHTML = '<p class="fs-4 mb-4" id="greeting">Goedemiddag! Welkom op MoviePlanet, de website voor de populairste en leukste films! Bekijk hieronder de beschikbare films en de informatie erover. <br>Staat jouw favoriete film er niet bij? <a href="./VoegFilmToe.html">Voeg hem dan toe!</a></p>';
    } else {
        greeting.innerHTML = '<p class="fs-4 mb-4" id="greeting">Goedenavond! Welkom op MoviePlanet, de website voor de populairste en leukste films! Bekijk hieronder de beschikbare films en de informatie erover. <br>Staat jouw favoriete film er niet bij? <a href="./VoegFilmToe.html">Voeg hem dan toe!</a></p>';
    }
}

function reload() {
    window.location.reload(false); 
}

function search() {
    //Searchbutton contains a onclick="search()"
    var searchterm = document.getElementById('inputSearch').value; // Recieving the users search-term from the <input> with id="inputSearch"

    if (searchterm !== "") {
        let themovies = document.getElementById('frontpage-movies'); // All Movie-Cards are in a <div> with id="frontpage-movies"
        const titles = document.getElementById('frontpage-movies').querySelectorAll(".card-title") // Getting all the titles from the cards inside the <div>
        let searchResults = [];

        // Checking which cards needs to show based on the search-words
        Array.from(titles).forEach(function(title) {
            let found = title.textContent.toLowerCase().includes(searchterm.toLowerCase());
            if (found) {
                searchResults.push(title.parentElement.parentElement); // Putting the matching card into an array
            }
        });

        // Adding the matching cards to the movies-container
        if (searchResults.length > 0) {
            themovies.innerHTML = "";
            var row = '';

            for (let index = 0; index < searchResults.length; index++) {
                // Putting the cards into a matching card
                row = row.concat('<div class="card" style="width: 16rem;">' + searchResults[index].innerHTML + '</div>');

                // Adding the created row when it contains 3 cards, or has added the last matching card
                if ((index + 1) % 3 === 0 || index == searchResults.length - 1) {
                    row = '<div class="row justify-content-center gap-5 mb-5">' + row + '</div>';
                    themovies.innerHTML = themovies.innerHTML.concat(row);
                    row = "";
                }
            }
            // No matching cards to show
        } else {
            themovies.innerHTML = `<p>Er zijn geen films die aan je zoekterm voldoen.</p>`;
            themovies.innerHTML = themovies.innerHTML.concat('<button type="button" onclick="reload()" class="btn btn-primary btn-lg px-4 me-sm-3">Ontdek Meer</button>')
        }

        // Clearing the search-bar
        document.getElementById("inputSearch").value = "";
    }

}