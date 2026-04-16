let searchButton = document.querySelector("#button-addon2");
let inputKeyword = document.querySelector(".input-keyword");


searchButton.addEventListener("click",function(){

fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
    inputKeyword.value +
    "&appid=92c585825faf0fc478b144e4fa01cbff&units=metric&lang=id"
)
    .then((response)=>response.json())
    .then((response)=>{
                let result = document.querySelector(".result");
                  result.innerHTML =`<h2 style="margin-top:40px;" class="lokasi">${response.name},${response.sys.country}</h2>
                                   <h5 ><span class="temperatur">${response.main.temp}°C</span>,<span class="temperatur">${response.weather[0].description}</span> <span class="temperatur">${response.weather[0].main}</span></h5>
                                   <h6 class="suhu">Suhu normal <span>${response.main.temp_min}°C</span> Sampai <span>${response.main.temp_max}°C</span></h6>
                                   <h6 class="angin">Kecepatan angin: <span>${response.wind.speed} m/s</span></h6>
                                   <h6 class="koor">Koordinat Geo: ${response.coord.lat}, ${response.coord.lon}</h6>
                                   `
            }

    );

});

console.log('ucupp')