window.addEventListener("load", getAge);

function getAge() {
    // Birthday Actors
    var information = document.getElementById("information").innerHTML;

    // Current Day's Information
    var date = document.getElementById("age").innerHTML;
    var today = new Date();
    var birthDate = new Date(date);

    // Calculating age
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Returning the right age to the actors' page
    document.getElementById("acteurInfo").innerHTML = '<h2 class="mb-5 lead">Leeftijd: ' + age + information + '</h2>';
}