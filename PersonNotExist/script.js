const requestURL = 'https://www.ahfx.com/person.php';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject); //temporary checking for valid response and data parsing
        const person = jsonObject['person'];
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let password = document.createElement('p');
        let email = document.createElement('p');
        let eyes = document.createElement('p');
        let city = document.createElement('p');
        let children = document.createElement('p');
        let ip = document.createElement('p');

        h2.textContent = person.personal.last_name + ' ' + person.personal.name;
        image.setAttribute('src', 'https://thispersondoesnotexist.com/image');
        password.textContent = person.online_info.password;
        email.textContent = person.online_info.email;
        eyes.textContent = person.personal.eyecolor;
        city.textContent = person.peronal.city + person.personal.country;
        children.textContent = person.marriage.children;
        ip.textContent = person.online_info.ip_address;

        card.appendChild(h2);
        card.appendChild(password);
        card.appendChild(email);
        card.appendChild(eyes);
        card.appendChild(city);
        card.appendChild(children);
        card.appendChild(ip);
        card.appendChild(image);
            
        document.querySelector('div.cards').appendChild(card);
    });