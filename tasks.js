// ! Har bir masalaga 10 daqiqadan vaqt sarflang oshib ketmasin...

// Masala - 1

// Arraydagi eng katta sonni topish kerak for loop bilan

// const numbers = [23, 45, 67, 89, 34, 56, 33, 151, 78, 20];
// let maxNumber = 0;
// for (let value of numbers) {
//     if (maxNumber < value) {
//         maxNumber = value;
//     }
// };
// console.log(maxNumber);



// Masala - 2

// Arraydagi eng uzun so'zni topib uning oxirgisidan bitta oldingi harfini topish

// const fruites = ["Olma", "Nok", "Anor", "Chegara"];
// let fruitlength = [0];
// for (let value of fruites) {
//     if (value.length > fruitlength.length) {
//         fruitlength = value;
//     }
// }
// let res = fruitlength[fruitlength.length-2];
// console.log(res);


// Masala - 3

// Arraydagi barcha stringning lengthini topish

// const fruites = ["Olma", "anor", "Nok"];
// const fruiteslength = fruites.map(function(fruit) {
//     return fruit.length;
// });
// console.log(fruiteslength);



// Masala - 4

// Arrayda kamida 6 ta toq va juft son bor, va shundan juft sonlarning yarmini ya'ni 18 juft soni bo'lsa uning yarmi 9 sonini bir arrayga solib qaytarib bersin ya'ni hamma juftlarning yarmini bitta arrayga joylash kerak

// const numbers = [23, 58, 96, 31, 74, 44, 152, 531, 26];
// const filterNumber = numbers.filter(function(num) {
//     return num % 2 == 0;
// });
// const editionNumber = filterNumber.map(function(num) {
//     return num / 2;
// });
// console.log(editionNumber);


// Masala - 5

// Arraydagi katta harf bilan boshlangan so'zlarning birinchi harfini kichik qolgan harfini katta qilib, kichik harf bilan boshlanganlarini birinchi harfini katta qolganlarini kichkina qib bersin  array ga qaytsin

// const fruites = ["olma", "o'rik", "Nok", "avacado"];
// const resaultFruits = fruites.map(function(fruit) {
//     if (fruit[0] == fruit[0].toUpperCase()) {
//       return fruit.charAt(0).toLowerCase() + fruit.slice(1).toUpperCase();
//     } else {
//       return fruit.charAt(0).toUpperCase() + fruit.slice(1).toLowerCase();
//     }
// });
// console.log(resaultFruits);




// Masala - 6

// Promptdan bir so'z kiritish kerak va shu so'zni 3 marta space bilan chiqarib berish kerak for loop da

// example: olma => olma olma olma
// let value = prompt("So'zni kiriting:");
// if (!(value) || value.trim() == "") {
//   alert("Qiymat kiritish majburiy");
// } else {
//   console.log((value + " ").repeat(3));
// };



// Masala - 7

// Ichma ich array bor va shu arrayning juft arraylarning birinchi elementining birinchi harflarini birlashtirib qaytarib bersin

// const fruitesArray = [["Olma"],["Bexi"],["Anor"],["Xurmo"],["GIlos"],["Kiwi"],["Banan"]];
// let result = "";
// for (let i = 0; i < fruitesArray.length; i++) {
//     if (!(i % 2 == 0)) {
//         result += fruitesArray[i][0][0].toUpperCase();
//     }
// };
// console.log(result);
