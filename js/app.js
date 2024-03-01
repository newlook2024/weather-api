let input = document.querySelector('input')
let button = document.querySelector('button')
let temperatura = document.querySelector('.temperature')
let obHavo = document.querySelector('.description')
let bosim = document.querySelector('.bosim')
let shamol = document.querySelector('.shamol')
let rasm = document.querySelector('.rasm')

button.addEventListener('click', function () {
    let a = '9bea4ea204a141c99429234c27e122b3'
    let request = new XMLHttpRequest()

    request.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${a}`)

    request.send()
    request.addEventListener('readystatechange', function () {
        if (request.status == 200 && request.readyState == 4) {
            let data = JSON.parse(request.responseText)
            console.log(data);
            temperatura.textContent = Math.round(data.main.temp) + '°C' 
            obHavo.textContent = data.weather[0].description 
            bosim.textContent = data.main.humidity + '%'
            shamol.textContent = data.wind.speed + 'km/h'
            if(data.weather[0].main == 'Clouds'){
                rasm.src = './img/cloud.png'
            }
            else if(data.weather[0].main == 'Clear'){
                rasm.src = './img/sun.png'
            }
            else if(data.weather[0].main == 'Rain'){
                rasm.src = './img/rain.png'
            }
            else if(data.weather[0].main == 'Snow'){
                rasm.src = './img/snow.png'
            }
            else if(data.weather[0].main == 'Wind' || data.weather[0].main == 'Mist'){
                rasm.src = './img/wind.png'
            }
        } else {
            console.error('Xato');
        }
    })
})
