const apiURL = 'https://www.ahfx.com/person.php';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let name = document.createElement('p');
        let password = document.createElement('p');
        let email = document.createElement('p');
        let eye = document.createElement('p');
        let address = document.createElement('p');
        let ip = document.createElement('p');
        let image = document.createElement('img');
        const ICE = jsObject;
        name.textContent = "Name: " + ICE.person.personal.name + " " + ICE.person.personal.last_name;
        password.textContent = "Password: " + ICE.person.online_info.password;
        email.textContent = "Email: " + ICE.person.online_info.email;
        eye.textContent = "Eye color " + ICE.person.personal.eye_color;
        address.textContent = "Address: " + ICE.person.personal.city + " " + ICE.person.personal.country;
        if(ICE.person.marriage == "True"){
            let children = document.createElement('p');
            children.textContent = "Number of children: " + ICE.person.marriage.children;
        }
        ip.textContent = "Ip address: " + ICE.person.online_info.ip_address;

        image.setAttribute('src', 'https://thispersondoesnotexist.com/image');
        image.setAttribute('alt', 'Picture');
        image.classname = "image";

        document.querySelector('div').appendChild(name);
        document.querySelector('div').appendChild(password);
        document.querySelector('div').appendChild(email);
        document.querySelector('div').appendChild(eye);
        document.querySelector('div').appendChild(address);
        if(ICE.person.marriage == "True"){
            document.querySelector('div').appendChild(children);
        }
        document.querySelector('div').appendChild(ip);
        document.querySelector('div').appendChild(image);
        let div = document.querySelector('div');
        div.className = "div";
    });