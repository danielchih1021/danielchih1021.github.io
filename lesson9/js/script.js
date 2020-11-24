const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject); //temporary checking for valid response and data parsing
        const towns = jsonObject;
        for(let i = 0; 1 < towns.length; i++) {
            let motto = document.createElement('p');
            let years = document.createElement('p');
            let population = document.createElement('p');
            let avgRF = document.createElement('p');
            if(towns[i].name.includes("Preston")){

                motto.textContent = towns[i].motto;
                motto.id="prestonMotto";
                motto.className="prestonInfo"
                years.textContent = "Years Founded: " + towns[i].yearsFounded;
                years.className="prestonInfo";
                population.textContent = "Current Population: " + towns[i].currentPopulation;
                population.classname="prestonInfo";
                avgRF.textContent = "Average Rainfall: " + towns[i].averageRainfall;
                avgRF.classname="prestonInfo";
                var card = document.querySelector('div.sub-catP');

                card.appendChild(motto);
                card.appendChild(years);
                card.appendChild(population);
                card.appendChild(avgRF);
            } else if (towns[i].name.includes("Fish Haven")){
                motto.textContent = towns[i].motto;
                motto.id="FHMotto";
                motto.className="FHInfo"
                years.textContent = "Years Founded: " + towns[i].yearsFounded;
                years.className="FHInfo";
                population.textContent = "Current Population: " + towns[i].currentPopulation;
                population.classname="FHInfo";
                avgRF.textContent = "Average Rainfall: " + towns[i].averageRainfall;
                avgRF.classname="FHInfo";
                var card = document.querySelector('div.sub-catFH');

                card.appendChild(motto);
                card.appendChild(years);
                card.appendChild(population);
                card.appendChild(avgRF)
            } else if (towns[i].name.includes("Soda Spring")){
                motto.textContent = towns[i].motto;
                motto.id="SSMotto";
                motto.className="SSInfo"
                years.textContent = "Years Founded: " + towns[i].yearsFounded;
                years.className="SSInfo";
                population.textContent = "Current Population: " + towns[i].currentPopulation;
                population.classname="SSInfo";
                avgRF.textContent = "Average Rainfall: " + towns[i].averageRainfall;
                var card = document.querySelector('div.sub-catSS');

                card.appendChild(motto);
                card.appendChild(years);
                card.appendChild(population);
                card.appendChild(avgRF)
            }
        }
    });