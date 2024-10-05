//Задание 1
let hello = "Hello world!";
let reversedhello = "";
let ihello = hello.length-1;
while(ihello>=0) {
    reversedhello += hello[ihello]
    ihello--
}
console.log(reversedhello);

//Задание 2
let array = [5,3,1,6,4,7,4,-6];
let iarray = 0;
littlearray=array[iarray];
while(iarray<array.length) {
    if(littlearray > array[iarray]) {
        littlearray = array[iarray];
    } 
    iarray++
}
console.log(littlearray);

//Задание 3
let str = "Aruzhan Konarbayeva";
let istr = 0;
let glasn = "AEIOUaeiou";
let count = 0;
while(istr<str.length) {
    if(glasn.includes(str[istr])) {
        count++
    }
    istr++
}
console.log("Гласных букв всего: ", count);

//Задание 4
let arr1 = [1,2,3];
let arr2 = [3,4,5,6,7,8];
let arr3 = [];
let iarr1 = 0;
while(iarr1<arr1.length) {
    arr3.push(arr1[iarr1])
    iarr1++
}
let iarr2 = 0;
while(iarr2<arr2.length) {
    arr3.push(arr2[iarr2])
    iarr2++
}
console.log(arr3);

//Задание 5
let masiv = [6,4,3,6,5,3,7,7];
let imasiv = 0;
let none = [];
while(imasiv<masiv.length) {
    if (!none.includes(masiv[imasiv])) {
        none.push(masiv[imasiv]);
    }
    imasiv++;
}
console.log(none);

//Задание 6
let arr = [1, 2, 3, 2, 1];
let isPalindrome = true; 
let i = 0; 
let j = arr.length - 1; 
while (i < j) {
    if (arr[i] !== arr[j]) {
        isPalindrome = false;
    }
    i++; 
    j--;
}
if (isPalindrome) {
    console.log("Массив является палиндромом.");
} else {
    console.log("Массив не является палиндромом.");
}

//Задание 7
let str1 = "Аружан Конарбаева"; 
str1 = str1.toLowerCase();
let isPalindrome1 = true; 
let istr1 = 0; 
let jstr1 = str1.length - 1; 
while (istr1 < jstr1) {
    if (str1[istr1] !== str1[jstr1]) {
        isPalindrome1 = false; 
    }
    istr1++; 
    jstr1--; 
}
if (isPalindrome1) {
    console.log("Строка является палиндромом.");
} else {
    console.log("Строка не является палиндромом.");
}

//Задание 8
let str2 = "Меня зовут Аружан";
let count2 = 0; 
let i2 = 0; 
let words = str2.trim().split(/\s+/); 
while (i2 < words.length) {
    count2++; 
    i2++; 
}
console.log("Количество слов в строке:", count2); 

//Задание 9
let a = 1; 
let result = ""; 
while (a <= 14) {
    let number = 7 * a; 
    result += number + " "; 
    a++; 
}
console.log(result.trim());

//Задание 10
let N = prompt("Введите число N:");
N = Number(N);
let big = 1; 
while (big * 2 <= N) {
    big *= 2; 
}
console.log("Наибольшая степень двойки, не превышающая", N, ":", big);