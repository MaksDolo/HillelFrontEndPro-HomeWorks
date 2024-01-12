let yearInput = prompt('Ваш рік народження:');
const currentYear = (new Date).getFullYear();
let cityInput = prompt('Ваше місто:');
let sportInput = prompt('Улюблений вид спорту:');
let cityMessage;
let sportMessage;
if (cityInput === 'Київ' || cityInput === 'Вашингтон' || cityInput === 'Лондон') {
    switch (cityInput) {
        case 'Київ':
            cityMessage = 'Ти живеш у столиці України';
            break;
        case 'Вашингтон':
            cityMessage = 'Ти живеш у столиці США';
            break;
        case 'Лондон':
            cityMessage = 'Ти живеш у столиці Великої Британії';
            break;
        default:
            break;
    }
}  else {
        cityMessage = `Ти живеш у місті ${cityInput}`;
}
if (sportInput === 'Футбол' || sportInput === 'Бокс' || sportInput === 'Баскетбол') {
    switch (sportInput) {
        case 'Футбол':
            sportMessage = 'Круто! Хочеш стати Анрієм Ярмоленко?';
            break;
        case 'Бокс':
            sportMessage = 'Круто! Хочеш стати Майком Тайсоном?';
            break;
        case 'Баскетбол':
            sportMessage = 'Круто! Хочеш стати Кобі Брайантом?';
            break;
        default:
            break;
    }
}  else {
        sportMessage = `Круто! Я теж люблю ${sportInput}`;
}
if (yearInput === null || cityInput === null || sportInput === null){
    alert('Шкода що ти не захотів писати свій вік чи місто або улюбленний вид спорту(');
} else {
    alert(
`Ваш вік: ${currentYear - yearInput} 
${cityMessage}
${sportMessage}`
);
}

