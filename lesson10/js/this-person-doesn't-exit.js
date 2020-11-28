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
        name.textContent = "Name: " + apiURL.person.personal.name + " " + apiURL.person.personal.last_name;
        password.textContent = "Password: " + apiURL.person.online_info.password;
        email.textContent = "Email: " + apiURL.person.online_info.email;
        eye.textContent = "Eye color " + apiURL.person.personal.eye_color;
        address.textContent = "Address: " + apiURL.person.personal.city + " " + apiURL.person.personal.country;
        if(apiURL.person.marriage == "True"){
            let children = document.createElement('p');
            children.textContent = "Number of children: " + apiURL.person.marriage.children;
        }
        ip.textContent = "Ip address: " + apiURL.person.online_info.ip_address;

        image.setAttribute('src', 'https://thispersondoesnotexist.com/image');
        image.setAttribute('alt', 'Picture');

        document.querySelector('div').appendChild(name);
        document.querySelector('div').appendChild(password);
        document.querySelector('div').appendChild(email);
        document.querySelector('div').appendChild(eye);
        document.querySelector('div').appendChild(address);
        if(apiURL.person.marriage == "True"){
            document.querySelector('div').appendChild(children);
        }
        document.querySelector('div').appendChild(ip);
        document.querySelector('div').appendChild(image);
    });