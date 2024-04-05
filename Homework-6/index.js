const yearBirds = prompt("Напиши рік народження", "");
const city = prompt("В якому місті ти живеш?", "");
const sport = prompt("Який твій улюблений вид спорту?", "");

if (yearBirds === "" || yearBirds === null) {
  resultYearBirds = `Шкода, що Ви не захотіли ввести свій рік народження`;
} else {
  resultYearBirds = `Вік: ${2024 - yearBirds}`;
}

if (city === "Київ") {
  resultCity = `Ти живеш у столиці України`;
} else if (city === "Вашингтон") {
  resultCity = `Ти живеш у столиці США`;
} else if (city === "Лондон") {
  resultCity = `Ти живеш у столиці Англії`;
} else if (city === "" || city === null) {
  resultCity = `Шкода, що Ви не захотіли ввести своє місто`;
} else {
  resultCity = `Ти живеш у місті ${city}`;
}

if (sport === "бокс") {
  resultSport = `Круто! Хочеш стати як Наоя Іноуе?`;
} else if (sport === "футбол") {
  resultSport = `Круто! Хочеш стати як Ліонель Мессі?`;
} else if (sport === "баскетбол") {
  resultSport = `Круто! Хочеш стати як Майкл Джордан?`;
} else if (sport === "" || sport === null) {
  resultSport = `Шкода, що Ви не захотіли ввести свій улюблений вид спорту`;
} else {
  resultSport = `Улюблений вид спорту - ${sport}`;
}

const result = `
${resultYearBirds} 
${resultCity}
${resultSport}
`;

alert(result);
