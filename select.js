const select = document.querySelector('.sWeather');
const para = document.querySelector('.paraa');

select.addEventListener('change', setWeather);

function setWeather() {
    const choice = select.value;

    if (choice === 'sunny') {
        para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
    } else if (choice === 'rainy') {
        para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
    } else if (choice === 'snowing') {
        para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
    } else if (choice === 'overcast') {
        para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
    } else {
        para.textContent = '';
    }
}

const selectb = document.querySelector('.theme');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

selectb.onchange = function () {
    (selectb.value === 'black') ? update('black', 'white') : update('white', 'black');
}

const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para3 = document.querySelector('.para');
const input = document.querySelector('.in');
const btn = document.querySelector('.button');

btn.addEventListener('click', function () {
    let searchName = input.value.toLowerCase();
    input.value = '';
    input.focus();
    for (let i = 0; i < contacts.length; i++) {
        let splitContact = contacts[i].split(':');
        if (splitContact[0].toLowerCase() === searchName) {
            para3.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
            break;
        } else if (i === contacts.length - 1) {
            para3.textContent = 'Contact not found.';
        }
    }
});
