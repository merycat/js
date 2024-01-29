//1

let name = prompt ('Как вас зовут?');
let age = prompt ('Сколько вам лет?');
let city = prompt ('Где вы живете?');
let phone = prompt ('Укажите свой номер телефона');
let email = prompt ('Увакижете свою почту');
let company = prompt ('Где вы работаете?');

document.write (`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}. `);  


//2

alert ( name + ' родился в ' + (2023 - age) + ' году');

//3

let num = '125321';

let num_1 = (+num[0] + +num[1] + +num[2]);
let num_2 = (parseInt(num[3]) + parseInt(num[4]) + parseInt(num[5]));

//console.log(num_1);
//console.log(num_2);

if (num_1 == num_2){
    console.log('да');
} else {
    console.log('нет');
}

//4

let a = 0;

if (a > 0){
    console.log('Верно');
} else {
    console.log('Неверно');
}

//5

a = 10;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

if ((a+b) > 1){
    console.log(Math.pow((a+b), 2));
}

//6

if (a > 2 && a < 11 || b >= 6 && b < 14){
    console.log('Верно');
} else {
    console.log('Неверно');
}

//7

let n = 59;

if (n <= 15){
    console.log('Первая четверть часа');
} else if (n > 15 && n <= 30){
    console.log('Вторая четверть часа'); 
} else if (n > 30 && n <= 45) {
    console.log('Третья четверть часа'); 
} else {
    console.log('Четвертая четверть часа'); 
}

//8

let day = prompt('введите количество дней');

if (day <= 10){
    console.log('Первая декада месяца');
} else if (day > 10 && day <= 20){
    console.log('Вторая декада месяца'); 
} else {
    console.log('Третья декада месяца'); 
}

//9

let days = prompt('сколько дней');
let year = days / 365;
let month = days / 31;
let week = days / 7;
let hour = days * 24;
let minute = days * 1440;
let sec = days * 86400;

if (days < 365) {
    console.log('Меньше года');
} else {
    console.log(year);
}

if ( days < 31) {
    console.log('Меньше месяца');
} else {
    console.log(month);
}

if (days < 7) {
    console.log('Меньше недели');
} else {
    console.log(week);
} 

//10

let months;

if (day > 1 && day < 31){
    months = 1;
} else if (day > 32 && day< 60){
    months = 2;
} else if (day > 61 && day < 92){
    months = 3;
} else if (day > 93 && day < 122){
    months = 4;
} else if (day > 123 && day < 153){
    months = 5;
} else if (day > 154 && day < 183){
    months = 6;
} else if (day > 184 && day < 215){
    months = 7;
} else if (day > 216 && day < 245){
    months = 8;
} else if (day > 246 && day < 275){
    months = 9;
} else if (day > 276 && day < 306){
    months = 10;
} else if (day > 307 && day < 336){
    months = 11;
} else {
    months = 12;
}

switch(months){
    case 1:
    case 2:
    case 12:
        console.log('Зима');
    break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
    break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
    break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
    break;
}