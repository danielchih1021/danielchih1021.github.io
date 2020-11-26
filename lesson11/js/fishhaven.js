const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585000&units=imperial&appid=bf7358fc6ab851b5938eef8f5f7118f1';

    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      document.getElementById('desc').innerHTML = jsObject.weather[0]['description'];
      document.getElementById('temp').innerHTML = jsObject.main.temp;
      document.getElementById('humid').innerHTML = jsObject.main.humidity;
      document.getElementById('windSpeed').innerHTML = jsObject.wind.speed;
    });

    const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585000&units=imperial&appid=bf7358fc6ab851b5938eef8f5f7118f1';
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