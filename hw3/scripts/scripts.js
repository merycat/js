//1
/*
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
    //console.log(i);
    i--
}

//3
let a = 100;
let sum = 0;

for (let i = 0; i <= a; i++){
    sum += i;
}

console.log(sum)

//4

for (let i = 1; i <= 5; i++) {
    sum = 0;

    for (let j = 1; j <= i; j++) {
        sum += j;
    }

    console.log(i, sum);
}

//5 

for (let i = 8; i <= 56; i++) {
    if(i % 2) continue;

    console.log(i);
}

for (let i = 8; i <= 56; i++) {
    if (i % 2 == 0) {
        console.log( i );
    }
  }


i = 7;

while (i <= 56) {
    i++
    if(i % 2) continue;

    console.log(i);
}

//6

for (let i = 2; i <= 10; i++) {

    for (let j = 2; j <= 10; j++) {
           console.log(i + "*" + j + "=" + (i*j));
    }
}
*/
//7

let n = 1000;
let i;

for (i = 0; n > 50; i++) {
    n /= 2;
}

console.log(n)
console.log(i)

//8
/*
let sum = 0;
let quant = 0;
let arif = 0;


while (true) {

  let value = +prompt("Введите число");

  if (!value) {
    alert ('Ошибка ввода');
    break;
  }
  
  sum += value;
  quant++

}
alert( 'Сумма: ' + sum );
alert(arif = sum / quant);
*/

//9

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';




//10

n = 235;

for (let i = 0; i < n.length; i++) {

    console.log(n[i]);
}

console.log(n, typeof n);
console.log(i);