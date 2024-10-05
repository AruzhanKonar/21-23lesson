//Задание 1
let num = 0;
while  (num < 10) {
    num ++
    console.log(num);
}

//Задание 2
let sum = 0;
let index = 1;
while(index<100) {
    sum += index;
    index ++
    console.log(sum);
}

//Задание 3
let sumeven = 0;
let i = 1;
while(i<=20) {
    if(i % 2 === 0) {
    sumeven = sumeven + i;
    }
    i = i + 1;
    console.log(i,sumeven);
}
console.log(sumeven);

//Задание 4
let n = 5;
let indexn = n;
let factorial = 1;
while(indexn>=1) {
    factorial = factorial * indexn;
    indexn = indexn - 1;
}
console.log(factorial);

//Задание 5
let number = prompt("Введите число");
console.log(number.length)
let inumber = 0;
let numbersum = 0;
while(inumber<number.length) {
    numbersum += Number(number[inumber]);
    inumber++;
}
console.log(numbersum);

//Задание 6
let word = prompt("Введите слово");
let letter = "";
let iletter = 0;
while(iletter<word.length) {
letter = word[iletter];
iletter++
console.log(letter)
}

//Задание 7
let input = prompt("Введите число");
let iinput = 1;
while(iinput<input) {
    if(iinput % 3 === 0) {
        console.log(iinput)
    }
    iinput++
}

//Задание 8
let string = "Aruzhan";
console.log(string.length)

//Задание 9
let array = [7,8,3,2,5];
let iarray = 0;
while(iarray<5) {
    let output = array[iarray];
    iarray++
    console.log(output)
}

//Задание 10
let array2 = [3,7,2,4,1];
let iarray2 = 0;
let sumnumber2= 0;
while(iarray2<5) {
    let number2 = array2[iarray2];
    sumnumber2 =  number2 + sumnumber2;
    iarray2++
}
console.log(sumnumber2)

//Задание 11
let elements = [4,-4,7,1,0,2]
let ielements = 0;
while(ielements<6) {
    let element = elements[ielements]
    if (element < 0) {
        console.log("есть отрицательные элементы")
    } else {
    console.log("все элементы положительные")
    }
    ielements++
}

//Задание 12
let myarray = [5,6,8,9,3,2];
let imyarray = 0;
let summyarray = 0;
let arithmetic = 0;
while(imyarray<6) {
    summyarray += myarray[imyarray];
    imyarray++
}
    arithmetic = summyarray/6;
    console.log(arithmetic)

//Задание 13
let newarray = [7,3,9,2,1];
let inewarray = 0;
let littenewarray = newarray[inewarray];
while(inewarray<5) {
    if (littenewarray > newarray[inewarray]) {
        littenewarray = newarray[inewarray]
    }
    inewarray++
}
console.log("Наименьший элемент - ", littenewarray)

//Задание 14
let massiv = [3,5,3,2,1,6,8,9];
let imassiv = 0;
oddmassiv=0;
evenmassiv=0;
while(imassiv<massiv.length) {
    if(massiv[imassiv]%2===0) {
        oddmassiv++
    } else {
    evenmassiv++
    }
    imassiv++
}
console.log("Четных чисел -", oddmassiv)
console.log("Нечетных чисел -", evenmassiv)

//Задание 15
let masiv = [-4,3,0,8,-3];
let imasiv = 0;
while(imasiv<5) {
    if(masiv[imasiv]<0) {
        masiv.splice(imasiv,1)
    }
    imasiv++
}
console.log(masiv);




