function windchill(){

    var ws = document.getElementById("windSpeed").innerHTML;
    var tp = document.getElementById("temp").innerHTML;
    var wc = Math.round((35.74 + (0.6215 * tp) - (35.75 * (ws ** 0.16)) + (0.4275 * tp * (ws ** 0.16))));

    if (ws> 4.8 && tp<=50){
        document.getElementById("windChill").innerHTML= "Windchill: " + wc + "&#8457";
    } else {
        document.getElementById("windChill").innerHTML= "Windchill: N/A";
    }
}

window.onload=windchill;