window.addEventListener('load',(event)=>{
    const menubutton = document.querySelector('.menu');
    const mainnav = document.querySelector('.navigation');
    menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
    
    // To solve the mid resizing issue with responsive class on
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

    const infobutton = document.querySelector('.company_info_click');
    const info_detail = document.querySelector('.detail_section');
    infobutton.addEventListener('click', (event) => {event.preventDefault(); info_detail.classList.toggle('expand')}, false);

    const legalbutton = document.querySelector('.legal_info_click');
    const legal_detail = document.querySelector('.legal_container');
    legalbutton.addEventListener('click', (event) => {event.preventDefault(); legal_detail.classList.toggle('open')}, false);

    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();
});

