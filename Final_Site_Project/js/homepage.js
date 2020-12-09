window.addEventListener('load',(event)=>{
    const menubutton = document.querySelector('.menu');
    const mainnav = document.querySelector('.navigation');
    menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
    
    // To solve the mid resizing issue with responsive class on
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

    const infobutton = document.querySelector('.company_info_click');
    const info_detail = document.querySelector('.detail_section');
    infobutton.addEventListener('click', () => {info_detail.classList.toggle('expand')},false);

    const legalbutton = document.querySelector('.legal_info_click');
    const legal_detail = document.querySelector('.legal_container');
    legalbutton.addEventListener('click', () => {legal_detail.classList.toggle('open')}, false);

    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();

    function bannerSwitch1 () {
        const banner_image = document.querySelector('div.bannerSec img.bannerPic');
        banner_image.setAttribute('src', 'images/temple1_banner.jpg');
        banner_image.setAttribute('alt', 'Temple 1 Banner Img');
    }

    const temple1Div = document.querySelector('.temple1');
    temple1Div.addEventListener('mouseover', bannerSwitch1,false);

    function bannerSwitch2 () {
        const banner_image = document.querySelector('div.bannerSec img.bannerPic');
        banner_image.setAttribute('src', 'images/temple2_banner.jpg');
        banner_image.setAttribute('alt', 'Temple 2 Banner Img');
    }

    const temple2Div = document.querySelector('.temple2');
    temple2Div.addEventListener('mouseover', bannerSwitch2,false);

    function bannerSwitch3 () {
        const banner_image = document.querySelector('div.bannerSec img.bannerPic');
        banner_image.setAttribute('src', 'images/temple3_banner.jpg');
        banner_image.setAttribute('alt', 'Temple 3 Banner Img');
    }

    const temple3Div = document.querySelector('.temple3');
    temple3Div.addEventListener('mouseover', bannerSwitch3,false);

    function bannerSwitch4 () {
        const banner_image = document.querySelector('div.bannerSec img.bannerPic');
        banner_image.setAttribute('src', 'images/temple4_banner.jpg');
        banner_image.setAttribute('alt', 'Temple 4 Banner Img');
    }

    const temple4Div = document.querySelector('.temple4');
    temple4Div.addEventListener('mouseover', bannerSwitch4,false);

    function bannerSwitch5 () {
        const banner_image = document.querySelector('div.bannerSec img.bannerPic');
        banner_image.setAttribute('src', 'images/temple5_banner.jpg');
        banner_image.setAttribute('alt', 'Temple 5 Banner Img');
    }

    const temple5Div = document.querySelector('.temple5');
    temple5Div.addEventListener('mouseover', bannerSwitch5,false);
});

const requestURL = 'temple_data.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject){
        console.log(jsonObject);
    });