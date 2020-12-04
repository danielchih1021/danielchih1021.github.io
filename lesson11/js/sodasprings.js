const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=bf7358fc6ab851b5938eef8f5f7118f1';

    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      document.getElementById('desc').innerHTML = jsObject.weather[0]['description'];
      document.getElementById('temp').innerHTML = jsObject.main.temp;
      document.getElementById('humid').innerHTML = jsObject.main.humidity;
      document.getElementById('windSpeed').innerHTML = jsObject.wind.speed;
    });

    const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=bf7358fc6ab851b5938eef8f5f7118f1';
    fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      const listLength = jsObject.list.length
      console.log(listLength);
      const stations = jsObject;
      var elementCount = 0
      for (i = 0; i < stations.list.length; i++) {
        if (stations.list[i].dt_txt.includes("18:00:00")) {
          var days = ['Sunday', 'Monday', 'Tuesday',
           'Wednesday', 'Thursday', 'Friday', 'Saturday'
          ];
          var month = stations.list[i].dt_txt.substr(5, 2);
          var date = stations.list[i].dt_txt.substr(8, 2);
          var d = new Date(2020, month, date);
          if (d.getDay() + 5 > 6) {
            var newD = d.getDay() + 5 - 7;
          } 
          else {
            var newD = d.getDay() + 5;
          }

          const wdayAndNum = 'wday' + elementCount;
          const iconAndNum = 'icon' + elementCount;
          const tempAndNum = 'temp' + elementCount;

          document.getElementById(tempAndNum).textContent = Math.round(stations.list[i].main.temp_max) + "°";
          document.getElementById(wdayAndNum).textContent = days[newD];

          document.getElementById(iconAndNum).setAttribute('src', 'https://openweathermap.org/img/w/' + stations.list[i].weather[0].icon + '.png');
          document.getElementById(iconAndNum).setAttribute('alt', stations.list[i].weather[0].icon + '.png');

          elementCount = elementCount + 1;
        }
      }
    });
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject); //temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        for(let i = 0; i < towns.length; i++) {
            if(towns[i].name.includes("Soda Springs")){

              let eventSec = document.createElement('section');
              let event0 = document.createElement('p');
              let event1 = document.createElement('p');
              let event2 = document.createElement('p');
              let event3 = document.createElement('p');
              
              event0.textContent = towns[i].events[0];
              event1.textContent = towns[i].events[1];
              event2.textContent = towns[i].events[2];
              event3.textContent = towns[i].events[3];
              
              eventSec.appendChild(event0);
              eventSec.appendChild(event1);
              eventSec.appendChild(event2);
              eventSec.appendChild(event3);
              document.querySelector('div.events').appendChild(eventSec);
            } 
        }
    });