const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5605242&units=imperial&appid=bf7358fc6ab851b5938eef8f5f7118f1';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5605242&units=imperial&appid=bf7358fc6ab851b5938eef8f5f7118f1';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        console.log(jsonObject);
        const stations = jsonObject;
        let rex = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('p');
        let p2 = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = stations.weather[0].main;
        h3.textContent = stations.name;
        p2.textContent = Math.round(stations.main.temp_max) + '°';

        rex.appendChild(h2);
        rex.appendChild(h3);
        rex.appendChild(p2);
        rex.appendChild(image);

        document.querySelector('.coord').appendChild(rex);
    });

fetch(forecastURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject);
        const stations = jsonObject;
        for (i = 0; i < stations.list.length; i++) {
            if (stations.list[i].dt_txt.includes("18:00:00")) {
                let rex2 = document.createElement('section');
                let rex3 = document.createElement('section');
                let rex4 = document.createElement('section');
                let h3 = document.createElement('h2');
                let h6 = document.createElement('h2');
                let image = document.createElement('img');

                var days = ['Sunday', 'Monday', 'Tuesday',
                    'Wednesday', 'Thursday', 'Friday', 'Saturday'
                ];
                var month = stations.list[i].dt_txt.substr(5, 2);
                var date = stations.list[i].dt_txt.substr(8, 2);
                var d = new Date(2020, month, date);
                if (d.getDay() + 5 > 6) {
                    var newD = d.getDay() + 5 - 7;
                } else {
                    var newD = d.getDay() + 5;
                }

                h3.textContent = Math.round(stations.list[i].main.temp_max) + "°";
                h6.textContent = days[newD];

                image.setAttribute('src', 'https://openweathermap.org/img/w/' + stations.list[i].weather[0].icon + '.png');
                image.setAttribute('alt', stations.list[i].weather[0].icon + '.png');

                rex2.appendChild(h3);
                rex3.appendChild(h6);
                rex4.appendChild(image);

                /*rex2.setAttribute("id","tempId" + idCount);
                rex3.setAttribute("id","dateId" + idCount);
                rex4.setAttribute("id","iconId" + idCount);

                idCount = idCount + 1;
                */
                document.querySelector('.days').appendChild(rex3);
                document.querySelector('.temps').appendChild(rex2);
                document.querySelector('.icons').appendChild(rex4);
            }
        }
    });