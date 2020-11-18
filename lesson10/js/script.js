window.addEventListener('load',(event)=>{
    // add code here to run when page loads
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('.navigation');
    
    const lu = document.querySelector('#lastupdated');
    lu.textContent = document.lastModified;
  
    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();

    const a = document.querySelector("#announcement");
    today = new Date().getDate();
    if(today==5){
      a.classList.toggle("hidden");
      a.style.display = "block";
    }

    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
    
    // To solve the mid resizing issue with responsive class on
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
    
    /*** Programming Notes **************************************
      Arrow Functions - es6 syntactically compact alternative to a regular function expression
      see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
      or https://www.w3schools.com/js/js_arrow_function.asp
    
      classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
      */
    
    //Pull info via API from the weather website
    const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=bf7358fc6ab851b5938eef8f5f7118f1';

    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
    });
 
    document.getElementById('desc').innerHTML = jsObject.weather[0]['description'];
    document.getElementById('temp').innerHTML = jsObject.main.temp;
    document.getElementById('humid').innerHTML = jsObject.main.humidity;
    document.getElementById('windSpeed').innerHTML = jsObject.wind[0];
});