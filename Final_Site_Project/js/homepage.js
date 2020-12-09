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

    function bannerSwitch6 () {
        const banner_image = document.querySelector('div.bannerSec img.bannerPic');
        banner_image.setAttribute('src', 'images/taiwan_taipei_temple.jpg');
        banner_image.setAttribute('alt', 'Default Banner Img');
    }

    const temple6Div = document.querySelector('.instructions');
    temple6Div.addEventListener('mouseover', bannerSwitch6,false);
});

const requestURL = '../js/temple_data.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject){
        console.log(jsonObject);
        const temples = jsonObject['temples'];
        for(let i=0; i<temples.length;i++){
            let t_name = document.createElement('p');
            let t_status = document.createElement('p');
            let t_number = document.createElement('p');
            let t_info = document.createElement('section');
            if(temples[i].name.includes('Taiwan')){
                t_name = 'Name: ' + temples[i].name;
                t_status = 'Current Status: ' + temples[i].status;
                t_number = 'Phone Number: ' + temples[i].phone_number;
                console.log(t_name);
                t_info.appendChild(t_name);
                t_info.appendChild(t_status);
                t_info.appendChild(t_number);
                t_info.className = "temple_info_section";
            } /* else if (temples[i].name.includes('Fort')){
                t_name = 'Name: ' + temples[i].name;
                t_status = 'Current Status: ' + temples[i].status;
                t_number = 'Phone Number: ' + temples[i].phone_number;
                t_info.appendChild(t_name);
                t_info.appendChild(t_status);
                t_info.appendChild(t_info);
                t_info.className = "temple_info_section";
            } else if(temples[i].name.includes('Orlando')){
                t_name = 'Name: ' + temples[i].name;
                t_status = 'Current Status: ' + temples[i].status;
                t_number = 'Phone Number: ' + temples[i].phone_number;
                t_info.appendChild(t_name);
                t_info.appendChild(t_status);
                t_info.appendChild(t_info);
                t_info.className = "temple_info_section";
            } else if (temples[i].name.includes('Japan')){
                t_name = 'Name: ' + temples[i].name;
                t_status = 'Current Status: ' + temples[i].status;
                t_number = 'Phone Number: ' + temples[i].phone_number;
                t_info.appendChild(t_name);
                t_info.appendChild(t_status);
                t_info.appendChild(t_info);
                t_info.className = "temple_info_section";
            } else{
                t_name = 'Name: ' + temples[i].name;
                t_status = 'Current Status: ' + temples[i].status;
                t_number = 'Phone Number: ' + temples[i].phone_number;
                t_info.appendChild(t_name);
                t_info.appendChild(t_status);
                t_info.appendChild(t_info);
                t_info.className = "temple_info_section";
            } */
        }
    });