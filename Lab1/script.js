var input = document.querySelector('.input_text');
var lang = document.querySelector('.input_lang');
var units = document.querySelector('.input_units')
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');


button.addEventListener('click', function (name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=926b892beaf68fb979de9039523a0212' + '&lang=' + lang.value + '&units=' + units.value)
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            main.innerHTML = nameValue;
            temp.innerHTML = "Temperature: " + tempValue;
            desc.innerHTML = descValue;

        })
        .catch(err => alert("Wrong city name!"));
})