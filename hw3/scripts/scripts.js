/*
//1

for (let i=1; i <= 50; i++) {
    console.log(i);
}

for (let i=35; i >= 8; i--) {
    console.log(i);
}

//2

let i = 89;

while(i >= 11) {
    document.write(i, '<br/>');
    i--
}

//3
let sum = 0;

for (let i=0; i <= 100; i++){
    sum += i;
}

console.log(sum);

//4


for (let i=0; i <= 5; i++){

    let summ = 0;
    
    for (let j=0; j <= i; j++){
        summ += j;
    }

    console.log(i, summ);
}

//5 

for (let i=8; i <= 56; i++) {
    if (i % 2 == 0)
    console.log(i);
}

let a = 8;

while(a <= 56) {
     a++
    if (a % 2)
    continue;

    console.log(a);
}

//6

for (let i=0; i <= 10; i++){
    
    for (let j=0; j <= 10; j++){
        console.log(i + ' * ' + j + ' = ' + i*j);
    }
}

//7
let n = 1000;
let i;

for (i = 0; n > 50; i++) {
    n /= 2;
}

console.log(n);
console.log(i);


//8

let sum = 0;
let i;

for (i = 0;  ; i++) {

let b = +prompt('введите число');

if (b == '' || b == 0) break;

if (isNaN(b)) {
    console.log('ошибка ввода');
    break;
}

sum += b;

}

console.log (sum);
console.log (sum / i);


//9

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let cur='', min, max;
for (let i = 0; i < str.length; i++) {
  cur += str[i];
  if (+str[i] && !+str[i+1]) {
    if (typeof min !== 'number' || cur < +min) min = +cur;
    if (typeof max !== 'number' || cur > +max) max = +cur;
    cur = '';
  }
}
console.log('Min:', min, 'Max:', max)
*/
//10

