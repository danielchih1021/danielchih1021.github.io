window.addEventListener('load',(event)=>{

const requestURL = 'https://danielchih1021.github.io/Final_Site_Project/js/temple_data.json';

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
            let t_status_desc = document.createElement('p');
            let t_number = document.createElement('p');
            let t_info = document.createElement('section');
            t_name.className="sub_description";
            t_status.className="sub_description";
            t_number.className="sub_description";
            t_status_desc.className="sub_description";
            if(temples[i].name.includes('Taiwan')){
                t_name.textContent = 'Name: ' + temples[i].name;
                t_status.textContent = 'Current Status: ' + temples[i].status;
                t_status_desc.textContent = 'Current Status Description: ' + temples[i].status_description;
                t_number.textContent = 'Phone Number: ' + temples[i].phone_number;
                console.log(t_name);
                t_info.appendChild(t_name);
                t_info.appendChild(t_status);
                t_info.appendChild(t_status_desc);
                t_info.appendChild(t_number);
                document.querySelector('.temple_summary_info_1').appendChild(t_info);
            } else if (temples[i].name.includes('Fort')){
                t_name.textContent = 'Name: ' + temples[i].name;
                t_status.textContent = 'Current Status: ' + temples[i].status;
                t_status_desc.textContent = 'Current Status Description: ' + temples[i].status_description;
                t_number.textContent = 'Phone Number: ' + temples[i].phone_number;
                console.log(t_name);
                t_info.appendChild(t_name);
                t_info.appendChild(t_status);
                t_info.appendChild(t_status_desc);
                t_info.appendChild(t_number);
                document.querySelector('.temple_summary_info_2').appendChild(t_info);
            } else if(temples[i].name.includes('Orlando')){
                t_name.textContent = 'Name: ' + temples[i].name;
                t_status.textContent = 'Current Status: ' + temples[i].status;
                t_status_desc.textContent = 'Current Status Description: ' + temples[i].status_description;
                t_number.textContent = 'Phone Number: ' + temples[i].phone_number;
                console.log(t_name);
                t_info.appendChild(t_name);
                t_info.appendChild(t_status);
                t_info.appendChild(t_status_desc);
                t_info.appendChild(t_number);
                document.querySelector('.temple_summary_info_3').appendChild(t_info);
            } else if (temples[i].name.includes('Japan')){
                t_name.textContent = 'Name: ' + temples[i].name;
                t_status.textContent = 'Current Status: ' + temples[i].status;
                t_number.textContent = 'Phone Number: ' + temples[i].phone_number;
                console.log(t_name);
                t_info.appendChild(t_name);
                t_info.appendChild(t_status);
                t_info.appendChild(t_number);
                document.querySelector('.temple_summary_info_4').appendChild(t_info);
            } else{
                t_name.textContent = 'Name: ' + temples[i].name;
                t_status.textContent = 'Current Status: ' + temples[i].status;
                t_status_desc.textContent = 'Current Status Description: ' + temples[i].status_description;
                t_number.textContent = 'Phone Number: ' + temples[i].phone_number;
                console.log(t_name);
                t_info.appendChild(t_name);
                t_info.appendChild(t_status);
                t_info.appendChild(t_status_desc);
                t_info.appendChild(t_number);
                document.querySelector('.temple_summary_info_5').appendChild(t_info);
            } 
        }
    });

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

    function bannerSwitch1 () {
        const banner_image = document.querySelector('div.bannerSec img.bannerPic');
        banner_image.setAttribute('src', 'images/temple1_banner.jpg');
        banner_image.setAttribute('alt', 'Temple 1 Banner Img');
        const summary1 = document.querySelector('.temple_summary_info_1');
        const summary2 = document.querySelector('.temple_summary_info_2');
        const summary3 = document.querySelector('.temple_summary_info_3');
        const summary4 = document.querySelector('.temple_summary_info_4');
        const summary5 = document.querySelector('.temple_summary_info_5');
        const summary6 = document.querySelector('.temple_summary_info_ins');
        summary1.classList.add('show');
        summary2.classList.remove('show');
        summary3.classList.remove('show');
        summary4.classList.remove('show');
        summary5.classList.remove('show');
        summary6.classList.remove('show');
    }

    const temple1Div = document.querySelector('.temple1');
    temple1Div.addEventListener('click', bannerSwitch1,false);

    function bannerSwitch2 () {
        const banner_image = document.querySelector('div.bannerSec img.bannerPic');
        banner_image.setAttribute('src', 'images/temple2_banner.jpg');
        banner_image.setAttribute('alt', 'Temple 2 Banner Img');
        const summary1 = document.querySelector('.temple_summary_info_1');
        const summary2 = document.querySelector('.temple_summary_info_2');
        const summary3 = document.querySelector('.temple_summary_info_3');
        const summary4 = document.querySelector('.temple_summary_info_4');
        const summary5 = document.querySelector('.temple_summary_info_5');
        const summary6 = document.querySelector('.temple_summary_info_ins');
        summary1.classList.remove('show');
        summary2.classList.add('show');
        summary3.classList.remove('show');
        summary4.classList.remove('show');
        summary5.classList.remove('show');
        summary6.classList.remove('show');
    }

    const temple2Div = document.querySelector('.temple2');
    temple2Div.addEventListener('click', bannerSwitch2,false);

    function bannerSwitch3 () {
        const banner_image = document.querySelector('div.bannerSec img.bannerPic');
        banner_image.setAttribute('src', 'images/temple3_banner.jpg');
        banner_image.setAttribute('alt', 'Temple 3 Banner Img');
        const summary1 = document.querySelector('.temple_summary_info_1');
        const summary2 = document.querySelector('.temple_summary_info_2');
        const summary3 = document.querySelector('.temple_summary_info_3');
        const summary4 = document.querySelector('.temple_summary_info_4');
        const summary5 = document.querySelector('.temple_summary_info_5');
        const summary6 = document.querySelector('.temple_summary_info_ins');
        summary1.classList.remove('show');
        summary2.classList.remove('show');
        summary3.classList.add('show');
        summary4.classList.remove('show');
        summary5.classList.remove('show');
        summary6.classList.remove('show');
    }

    const temple3Div = document.querySelector('.temple3');
    temple3Div.addEventListener('click', bannerSwitch3,false);

    function bannerSwitch4 () {
        const banner_image = document.querySelector('div.bannerSec img.bannerPic');
        banner_image.setAttribute('src', 'images/temple4_banner.jpg');
        banner_image.setAttribute('alt', 'Temple 4 Banner Img');
        const summary1 = document.querySelector('.temple_summary_info_1');
        const summary2 = document.querySelector('.temple_summary_info_2');
        const summary3 = document.querySelector('.temple_summary_info_3');
        const summary4 = document.querySelector('.temple_summary_info_4');
        const summary5 = document.querySelector('.temple_summary_info_5');
        const summary6 = document.querySelector('.temple_summary_info_ins');
        summary1.classList.remove('show');
        summary2.classList.remove('show');
        summary3.classList.remove('show');
        summary4.classList.add('show');
        summary5.classList.remove('show');
        summary6.classList.remove('show');
    }

    const temple4Div = document.querySelector('.temple4');
    temple4Div.addEventListener('click', bannerSwitch4,false);

    function bannerSwitch5 () {
        const banner_image = document.querySelector('div.bannerSec img.bannerPic');
        banner_image.setAttribute('src', 'images/temple5_banner.jpg');
        banner_image.setAttribute('alt', 'Temple 5 Banner Img');
        const summary1 = document.querySelector('.temple_summary_info_1');
        const summary2 = document.querySelector('.temple_summary_info_2');
        const summary3 = document.querySelector('.temple_summary_info_3');
        const summary4 = document.querySelector('.temple_summary_info_4');
        const summary5 = document.querySelector('.temple_summary_info_5');
        const summary6 = document.querySelector('.temple_summary_info_ins');
        summary1.classList.remove('show');
        summary2.classList.remove('show');
        summary3.classList.remove('show');
        summary4.classList.remove('show');
        summary5.classList.add('show');
        summary6.classList.remove('show');
    }

    const temple5Div = document.querySelector('.temple5');
    temple5Div.addEventListener('click', bannerSwitch5,false);

    function bannerSwitch6 () {
        const banner_image = document.querySelector('div.bannerSec img.bannerPic');
        banner_image.setAttribute('src', 'images/taiwan_taipei_temple.jpg');
        banner_image.setAttribute('alt', 'Default Banner Img');
        const summary1 = document.querySelector('.temple_summary_info_1');
        const summary2 = document.querySelector('.temple_summary_info_2');
        const summary3 = document.querySelector('.temple_summary_info_3');
        const summary4 = document.querySelector('.temple_summary_info_4');
        const summary5 = document.querySelector('.temple_summary_info_5');
        const summary6 = document.querySelector('.temple_summary_info_ins');
        summary1.classList.remove('show');
        summary2.classList.remove('show');
        summary3.classList.remove('show');
        summary4.classList.remove('show');
        summary5.classList.remove('show');
        summary6.classList.add('show');
    }

    const temple6Div = document.querySelector('.instructions');
    temple6Div.addEventListener('click', bannerSwitch6,false);
});


