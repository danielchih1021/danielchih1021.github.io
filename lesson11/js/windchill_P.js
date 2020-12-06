const windChillURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=bf7358fc6ab851b5938eef8f5f7118f1';

    fetch(windChillURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let tp = jsObject.main.temp;
        let ws = jsObject.wind.speed;
        let wc = Math.round(35.74 + (0.6215 * tp) - (35.75 * (ws ** 0.16)) + (0.4275 * tp * (ws ** 0.16)));
        console.log("Wind speed: " + ws);
        console.log("Temp: " + tp);
        console.log("0.6216 * temp= " + Math.round(0.6215 * tp));
        console.log("windspeed ^ 0.16= " + (ws ** 0.16));
        console.log("35.75 * (windspeed ^ 0.16)= " + Math.round(35.75*(ws ** 0.16)));
        console.log("Wind Chill= " + wc);
        if (ws > 3 && tp <= 50){
            document.getElementById("windChill").innerHTML = "Wind Chill: " + wc + "&#8457";
        } else {
            document.getElementById("windChill").innerHTML = "Wind Chill: N/A";
        }
    });