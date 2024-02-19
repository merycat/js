/*
//1

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//2

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

arr2.sort(function (a,b) {
    return a-b;
})

let res = arr2.filter((number) => number > -10 && number < -3);

console.log(res);

//3

let newArr = new Array();


for (let i = 23; i <= 57; i++) {
    newArr.push(i);
}

console.log(newArr);

//let i = 23;

//while(i <= 57) {
//    newArr.push(i);
//    i++;
//}
//console.log(newArr);


let result = 0;

for (let i = 0; i < newArr.length; i++) {
    result += newArr[i];
}

console.log(result);


//4

let strArr = ['10', '20', '30', '50', '235', '3000'];

for (let i = 0; i < strArr.length; i ++) {
    let num = strArr[i];
    let char = num[0];
    if (char == 1 || char == 2 || char == 5) {
        console.log(num);
    }
}

//5


let week = ['Понедельник', 'Втоник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];



for (let i = 0; i < week.length; i++) {
    if (i == week.length - 2) {
        document.write('<br>' + '<b>' + week[i] + '</b>');
    } else if (i == week.length - 1) {
        document.write('<br>' + '<b>' + week[i] + '</b>');
    } else {
        document.write('<br>' + week[i]);
    }

}

//6

let smeshariki = ['Крош', 'Нюша', 'Бараш', 'Совунья',]

smeshariki.push('Пин');

console.log(smeshariki);
console.log(smeshariki[smeshariki.length - 1]);


//7

let arrNum = new Array();

for (let i = 0; ; i++) {
    let num = +prompt('Введите число');

    if (num == ' ') {
        break;
    } else {
        arrNum.push(num);
    }
}

console.log(arrNum);

arrNum.sort(function(a, b) {
    return a - b;
})

console.log(arrNum);

//8

let arr5 = [12, false, 'Текст', 4, 2, -5, 0];
console.log(arr5);

//arr5.reverse();
//console.log(arr5);

let i = arr5.length;
let arr5_2 =  [];
while(i > 0) {
    i --;
    arr5_2.push(arr5[i]);

}
console.log(arr5_2);

//9

let empty = [5, 9, 21, , , 9, 78, , , , 6];
let count = 0;

for (let i = 0; i < empty.length; i++){
    if (!empty[i]){
        count ++;
    }
}

console.log(count);
*/

//10

