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
            let t_status_desc = document.createElement('p');
            let t_number = document.createElement('p');
            let t_address = document.createElement('p');
            let t_an = document.createElement('p');
            let t_gb = document.createElement('p');
            let t_dd = document.createElement('p');
            let t_cr = document.createElement('p');
            let t_cafe = document.createElement('p');
            let t_ph = document.createElement('p');
            let t_dc = document.createElement('p');
            let t_history = document.createElement('p');
            let t_info = document.createElement('section');
            let t_name_head = "The name of the Temple: ";
            let t_status_head = "Current Status: ";
            let t_status_desc_head = "Current Status Description: ";
            let t_number_head = "Phone Number: ";
            let t_address_head = "Address: ";
            let t_an_head = "Announcement Date: ";
            let t_gb_head = "Ground-breaking Date: ";
            let t_dd_head = "Dedication Date: ";
            let t_cr_head = "Clothing Rental: ";
            let t_cafe_head = "Cafeteria: ";
            let t_ph_head = "Patron Housing: ";
            let t_dc_head = "Distribution Center: ";
            let t_history_head = "History Summary: ";
            t_name.className="detail";
            t_status.className="detail";
            t_number.className="detail";
            t_status_desc.className="detail";
            t_address.className="detail";
            t_an.className="detail";
            t_gb.className="detail";
            t_dd.className="detail";
            t_cr.className="detail";
            t_cafe.className="detail";
            t_ph.className="detail";
            t_dc.className="detail";
            t_history.className="detail";
            if(temples[i].name.includes('Taiwan')){
                t_name.textContent = t_name_head + temples[i].name;
                t_status.textContent = t_status_head + temples[i].status;
                t_status_desc.textContent = t_status_desc_head + temples[i].status_description;
                t_number.textContent = t_number_head + temples[i].phone_number;
                t_address.textContent = t_address_head + temples[i].address;
                t_an.textContent = t_an_head + temples[i].important_milestone.announcement;
                t_gb.textContent = t_gb_head + temples[i].important_milestone.groundbreaking;
                t_dd.textContent = t_dd_head + temples[i].important_milestone.dedication;
                t_cr.textContent = t_cr_head + temples[i].services.clothing_rental;
                t_cafe.textContent = t_cafe_head + temples[i].services.cafeteria;
                t_ph.textContent = t_ph_head + temples[i].services.patron_housing;
                t_dc.textContent = t_dc_head + temples[i].services.distribution_center;;
                t_history.textContent = t_history_head + temples[i].history;
                document.querySelector('.templeTP .temple_basic_info .address').appendChild(t_name);
                document.querySelector('.templeTP .temple_basic_info .phone_number').appendChild(t_number);
                document.querySelector('.templeTP .temple_basic_info .status').appendChild(t_status);
                document.querySelector('.templeTP .temple_basic_info .status_desc').appendChild(t_status_desc);
                document.querySelector('.templeTP .temple_services .clothing').appendChild(t_cr);
                document.querySelector('.templeTP .temple_services .cafe').appendChild(t_cafe);
                document.querySelector('.templeTP .temple_services .housing').appendChild(t_ph);
                document.querySelector('.templeTP .temple_services .DC').appendChild(t_dc);
                document.querySelector('.templeTP .milestones .announcement').appendChild(t_an);
                document.querySelector('.templeTP .milestones .ground_breaking').appendChild(t_gb);
                document.querySelector('.templeTP .milestones .dedication').appendChild(t_dd);
                document.querySelector('.templeTP .history').appendChild(t_history);
            } else if (temples[i].name.includes('Fort')){
                t_name.textContent = t_name_head + temples[i].name;
                t_status.textContent = t_status_head + temples[i].status;
                t_status_desc.textContent = t_status_desc_head + temples[i].status_description;
                t_number.textContent = t_number_head + temples[i].phone_number;
                t_address.textContent = t_address_head + temples[i].address;
                t_an.textContent = t_an_head + temples[i].important_milestone.announcement;
                t_gb.textContent = t_gb_head + temples[i].important_milestone.groundbreaking;
                t_dd.textContent = t_dd_head + temples[i].important_milestone.dedication;
                t_cr.textContent = t_cr_head + temples[i].services.clothing_rental;
                t_cafe.textContent = t_cafe_head + temples[i].services.cafeteria;
                t_ph.textContent = t_ph_head + temples[i].services.patron_housing;
                t_dc.textContent = t_dc_head + temples[i].services.distribution_center;;
                t_history.textContent = t_history_head + temples[i].history;
                document.querySelector('.templeFL .temple_basic_info .address').appendChild(t_name);
                document.querySelector('.templeFL .temple_basic_info .phone_number').appendChild(t_number);
                document.querySelector('.templeFL .temple_basic_info .status').appendChild(t_status);
                document.querySelector('.templeFL .temple_basic_info .status_desc').appendChild(t_status_desc);
                document.querySelector('.templeFL .temple_services .clothing').appendChild(t_cr);
                document.querySelector('.templeFL .temple_services .cafe').appendChild(t_cafe);
                document.querySelector('.templeFL .temple_services .housing').appendChild(t_ph);
                document.querySelector('.templeFL .temple_services .DC').appendChild(t_dc);
                document.querySelector('.templeFL .milestones .announcement').appendChild(t_an);
                document.querySelector('.templeFL .milestones .ground_breaking').appendChild(t_gb);
                document.querySelector('.templeFL .milestones .dedication').appendChild(t_dd);
                document.querySelector('.templeFL .history').appendChild(t_history);
            } else if(temples[i].name.includes('Orlando')){
                t_name.textContent = t_name_head + temples[i].name;
                t_status.textContent = t_status_head + temples[i].status;
                t_status_desc.textContent = t_status_desc_head + temples[i].status_description;
                t_number.textContent = t_number_head + temples[i].phone_number;
                t_address.textContent = t_address_head + temples[i].address;
                t_an.textContent = t_an_head + temples[i].important_milestone.announcement;
                t_gb.textContent = t_gb_head + temples[i].important_milestone.groundbreaking;
                t_dd.textContent = t_dd_head + temples[i].important_milestone.dedication;
                t_cr.textContent = t_cr_head + temples[i].services.clothing_rental;
                t_cafe.textContent = t_cafe_head + temples[i].services.cafeteria;
                t_ph.textContent = t_ph_head + temples[i].services.patron_housing;
                t_dc.textContent = t_dc_head + temples[i].services.distribution_center;;
                t_history.textContent = t_history_head + temples[i].history;
                document.querySelector('.templeOL .temple_basic_info .address').appendChild(t_name);
                document.querySelector('.templeOL .temple_basic_info .phone_number').appendChild(t_number);
                document.querySelector('.templeOL .temple_basic_info .status').appendChild(t_status);
                document.querySelector('.templeOL .temple_basic_info .status_desc').appendChild(t_status_desc);
                document.querySelector('.templeOL .temple_services .clothing').appendChild(t_cr);
                document.querySelector('.templeOL .temple_services .cafe').appendChild(t_cafe);
                document.querySelector('.templeOL .temple_services .housing').appendChild(t_ph);
                document.querySelector('.templeOL .temple_services .DC').appendChild(t_dc);
                document.querySelector('.templeOL .milestones .announcement').appendChild(t_an);
                document.querySelector('.templeOL .milestones .ground_breaking').appendChild(t_gb);
                document.querySelector('.templeOL .milestones .dedication').appendChild(t_dd);
                document.querySelector('.templeOL .history').appendChild(t_history);
            } else if (temples[i].name.includes('Japan')){
                t_name.textContent = t_name_head + temples[i].name;
                t_status.textContent = t_status_head + temples[i].status;
                t_status_desc.textContent = t_status_desc_head + temples[i].status_description;
                t_number.textContent = t_number_head + temples[i].phone_number;
                t_address.textContent = t_address_head + temples[i].address;
                t_an.textContent = t_an_head + temples[i].important_milestone.announcement;
                t_gb.textContent = t_gb_head + temples[i].important_milestone.groundbreaking;
                t_dd.textContent = t_dd_head + temples[i].important_milestone.dedication;
                t_cr.textContent = t_cr_head + temples[i].services.clothing_rental;
                t_cafe.textContent = t_cafe_head + temples[i].services.cafeteria;
                t_ph.textContent = t_ph_head + temples[i].services.patron_housing;
                t_dc.textContent = t_dc_head + temples[i].services.distribution_center;;
                t_history.textContent = t_history_head + temples[i].history;
                document.querySelector('.templeTY .temple_basic_info .address').appendChild(t_name);
                document.querySelector('.templeTY .temple_basic_info .phone_number').appendChild(t_number);
                document.querySelector('.templeTY .temple_basic_info .status').appendChild(t_status);
                document.querySelector('.templeTY .temple_basic_info .status_desc').appendChild(t_status_desc);
                document.querySelector('.templeTY .temple_services .clothing').appendChild(t_cr);
                document.querySelector('.templeTY .temple_services .cafe').appendChild(t_cafe);
                document.querySelector('.templeTY .temple_services .housing').appendChild(t_ph);
                document.querySelector('.templeTY .temple_services .DC').appendChild(t_dc);
                document.querySelector('.templeTY .milestones .announcement').appendChild(t_an);
                document.querySelector('.templeTY .milestones .ground_breaking').appendChild(t_gb);
                document.querySelector('.templeTY .milestones .dedication').appendChild(t_dd);
                document.querySelector('.templeTY .history').appendChild(t_history);
            } else{
                t_name.textContent = t_name_head + temples[i].name;
                t_status.textContent = t_status_head + temples[i].status;
                t_status_desc.textContent = t_status_desc_head + temples[i].status_description;
                t_number.textContent = t_number_head + temples[i].phone_number;
                t_address.textContent = t_address_head + temples[i].address;
                t_an.textContent = t_an_head + temples[i].important_milestone.announcement;
                t_gb.textContent = t_gb_head + temples[i].important_milestone.groundbreaking;
                t_dd.textContent = t_dd_head + temples[i].important_milestone.dedication;
                t_cr.textContent = t_cr_head + temples[i].services.clothing_rental;
                t_cafe.textContent = t_cafe_head + temples[i].services.cafeteria;
                t_ph.textContent = t_ph_head + temples[i].services.patron_housing;
                t_dc.textContent = t_dc_head + temples[i].services.distribution_center;;
                t_history.textContent = t_history_head + temples[i].history;
                document.querySelector('.templeEG .temple_basic_info .address').appendChild(t_name);
                document.querySelector('.templeEG .temple_basic_info .phone_number').appendChild(t_number);
                document.querySelector('.templeEG .temple_basic_info .status').appendChild(t_status);
                document.querySelector('.templeEG .temple_basic_info .status_desc').appendChild(t_status_desc);
                document.querySelector('.templeEG .temple_services .clothing').appendChild(t_cr);
                document.querySelector('.templeEG .temple_services .cafe').appendChild(t_cafe);
                document.querySelector('.templeEG .temple_services .housing').appendChild(t_ph);
                document.querySelector('.templeEG .temple_services .DC').appendChild(t_dc);
                document.querySelector('.templeEG .milestones .announcement').appendChild(t_an);
                document.querySelector('.templeEG .milestones .ground_breaking').appendChild(t_gb);
                document.querySelector('.templeEG .milestones .dedication').appendChild(t_dd);
                document.querySelector('.templeEG .history').appendChild(t_history);
            } 
        }
    });

    const TPapiURL = 'https://api.openweathermap.org/data/2.5/weather?id=1665148&units=imperial&appid=bf7358fc6ab851b5938eef8f5f7118f1';

    fetch(TPapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      let desc = document.createElement('p');
      let temp = document.createElement('p');
      let humid = document.createElement('p');
      let ws = document.createElement('p');
      let info = document.createElement('section');
      let desc_head = "Current Weather: ";
      let temp_head = "Temperature: ";
      let humid_head = "Humidity: ";
      let ws_head = "Wind Speed: ";
      desc.innerHTML = desc_head + jsObject.weather[0]['description'];
      temp.innerHTML = temp_head + jsObject.main.temp;
      humid.innerHTML = humid_head + jsObject.main.humidity;
      ws.innerHTML = ws_head + jsObject.wind.speed;
      info.appendChild(desc);
      info.appendChild(temp);
      info.appendChild(humid);
      info.appendChild(ws);
      document.querySelector('.templeTP .weather').appendChild(info);
    });

    const FLapiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4155966&units=imperial&appid=bf7358fc6ab851b5938eef8f5f7118f1';

    fetch(FLapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      let desc = document.createElement('p');
      let temp = document.createElement('p');
      let humid = document.createElement('p');
      let ws = document.createElement('p');
      let info = document.createElement('section');
      let desc_head = "Current Weather: ";
      let temp_head = "Temperature: ";
      let humid_head = "Humidity: ";
      let ws_head = "Wind Speed: ";
      desc.innerHTML = desc_head + jsObject.weather[0]['description'];
      temp.innerHTML = temp_head + jsObject.main.temp;
      humid.innerHTML = humid_head + jsObject.main.humidity;
      ws.innerHTML = ws_head + jsObject.wind.speed;
      info.appendChild(desc);
      info.appendChild(temp);
      info.appendChild(humid);
      info.appendChild(ws);
      document.querySelector('.templeFL .weather').appendChild(info);
    });

    const OLapiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4167147&units=imperial&appid=bf7358fc6ab851b5938eef8f5f7118f1';

    fetch(OLapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      let desc = document.createElement('p');
      let temp = document.createElement('p');
      let humid = document.createElement('p');
      let ws = document.createElement('p');
      let info = document.createElement('section');
      let desc_head = "Current Weather: ";
      let temp_head = "Temperature: ";
      let humid_head = "Humidity: ";
      let ws_head = "Wind Speed: ";
      desc.innerHTML = desc_head + jsObject.weather[0]['description'];
      temp.innerHTML = temp_head + jsObject.main.temp;
      humid.innerHTML = humid_head + jsObject.main.humidity;
      ws.innerHTML = ws_head + jsObject.wind.speed;
      info.appendChild(desc);
      info.appendChild(temp);
      info.appendChild(humid);
      info.appendChild(ws);
      document.querySelector('.templeOL .weather').appendChild(info);
    });

    const TYapiURL = 'https://api.openweathermap.org/data/2.5/weather?id=1850147&units=imperial&appid=bf7358fc6ab851b5938eef8f5f7118f1';

    fetch(TYapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      let desc = document.createElement('p');
      let temp = document.createElement('p');
      let humid = document.createElement('p');
      let ws = document.createElement('p');
      let info = document.createElement('section');
      let desc_head = "Current Weather: ";
      let temp_head = "Temperature: ";
      let humid_head = "Humidity: ";
      let ws_head = "Wind Speed: ";
      desc.innerHTML = desc_head + jsObject.weather[0]['description'];
      temp.innerHTML = temp_head + jsObject.main.temp;
      humid.innerHTML = humid_head + jsObject.main.humidity;
      ws.innerHTML = ws_head + jsObject.wind.speed;
      info.appendChild(desc);
      info.appendChild(temp);
      info.appendChild(humid);
      info.appendChild(ws);
      document.querySelector('.templeTY .weather').appendChild(info);
    });

    const EGapiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3657509&units=imperial&appid=bf7358fc6ab851b5938eef8f5f7118f1';

    fetch(EGapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      let desc = document.createElement('p');
      let temp = document.createElement('p');
      let humid = document.createElement('p');
      let ws = document.createElement('p');
      let info = document.createElement('section');
      let desc_head = "Current Weather: ";
      let temp_head = "Temperature: ";
      let humid_head = "Humidity: ";
      let ws_head = "Wind Speed: ";
      desc.innerHTML = desc_head + jsObject.weather[0]['description'];
      temp.innerHTML = temp_head + jsObject.main.temp;
      humid.innerHTML = humid_head + jsObject.main.humidity;
      ws.innerHTML = ws_head + jsObject.wind.speed;
      info.appendChild(desc);
      info.appendChild(temp);
      info.appendChild(humid);
      info.appendChild(ws);
      document.querySelector('.templeEG .weather').appendChild(info);
    });
});

