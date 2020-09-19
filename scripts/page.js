window.addEventListener('load', (event)=>{
    const lu = document.querySelector('#lastupdated');
    lu.textcontent = document.lastModified;

    const cry = document.querySelector("#copyrightyear");
    cry.textcontent = new Date().getFullYear();
})