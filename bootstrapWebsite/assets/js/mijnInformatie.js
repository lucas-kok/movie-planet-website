window.addEventListener("load", loadInformation);

// This function will return a greeting based on the visitors' current time
function loadInformation() {
    // Birthday Actors
    const overText = document.getElementById("overText");

    // Getting number of months I live in Rotterdam
    let monthStarted = (2021 * 12) + 9;
    let currentMonth = (new Date().getFullYear() * 12) + (new Date().getMonth() + 1);
    console.log(currentMonth)
    let difference = currentMonth - monthStarted;

    overText.innerHTML = "";

    var text = '';
    if (difference == 1) {
        text = difference.toString() + ' maand';
    } else {
        text = difference.toString() + ' maanden'
    }


    // Getting age
    var information = '2005-01-09';

    // Current Day's Information
    var today = new Date();
    var birthDate = new Date(information);

    // Calculating age
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Setting the right information
    overText.innerHTML = '<p class="lead" id="overText">Hallo! <br>Mijn naam is Lucas Kok, ik ben ' + age + ' jaar en woon momenteel ' + text + ' in Rotterdam. In mijn vrije tijd vind ik het leuk om te programmeren, koken en werken aan mijn bedrijf <a href="https://www.pekict.nl" target="blank">PEK ICT</a>. Bij eventuele vragen kunt u gerust contact opnemen door te mailen naar <a href = "mailto:info@pekict.nl" ><use xlink: href = "#facebook" / > info@pekict.nl</a>.<br > <br> Hieronder kan je de projecten vinden die ik heb gemaakt. </p>'
}