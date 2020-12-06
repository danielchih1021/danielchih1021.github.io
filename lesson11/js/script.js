window.addEventListener('load',(event)=>{
    // add code here to run when page loads
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('.navigation');

    const a = document.querySelector("#announcement");
    today = new Date().getDay();
    console.log(today);

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
    
});

window.addEventListener('load', (event)=>{
  const lu = document.querySelector('#lastupdated');
  var gsDayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  var gsMonthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const d = new Date(document.lastModified.substr(0,10));
  const m = new Date().getMonth();
  lu.textContent = gsDayNames[d.getDay()] + ", " + document.lastModified.substr(3,2) + " " + gsMonthNames[m] + " " + new Date().getFullYear();

  const cry = document.querySelector("#copyrightyear");
  cry.textContent = new Date().getFullYear();
});