// function testVar() {
//     if(true) {
//         var a = 10;
//         console.log(a);
//     }

//     console.log(a);
// }

// testVar();



// console.log(myVar);
// var myVar = 10;


// function testlet() {
//     if(true) {
//         let b = 10;
//         console.log(b);
//     }
//     //console.log(b);
// }

// testlet();


// // console.log(myLet);
// let myLet = 223;
// console.log(myLet);

// const person = {
//     name : "abc",
//     age : 24
// }

// person.age = 25;

// console.log(person.age);

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let a = 10;
// let b = 3;
// console.log(Math.floor(a/b));


// let age = 12;
// let hasLicence = true;
// console.log(age);

// if(age >= 18 && hasLicence) {
//     console.log("you can drive");
// } else {
//     console.log("you cannot drive");
// }

// let x = 10;
// x += 5;
// console.log(x);

// let names = ["abc", "pqr", "xyz"];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// let products = ["Laptop", "Phone", "Tablet"];
// for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);
// }


// let i = 1; 
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// let countdown = 5;
// while (countdown >= 0) {
//     console.log(countdown);
//     countdown--;
// }

// console.log("countdown over");


// let i = 1;
// do {
//     console.log(i);
//     i++
// } while(i <= 5);


// let password = '1234';
// let userInput;
// // do {
// //     userInput = prompt("Enter a Password: ");
// // } while (userInput === password);
    

// while(userInput !== password) {
//     userInput = prompt("Enter a password:")
// }

// console.log("login")


// for (let i = 0; i <= 10; i++) {
//     if (i === 5) break;
//     console.log(i);
// }

// for (let i =0; i <= 10; i++) {
//     if (i === 5) continue;
//     console.log(i);
// }

// function add(a, b) {
//     return a + b;
// }

// console.log(add(3, 5));

// const add = (a, b) => a + b;
// console.log(add(2, 5))



// let numbers = [1,2,3,4,5];
// let doubled = numbers.map(num => num*num);
// console.log(doubled);


// function greet(name, callback) {
//     console.log(`Hello ${name}`);
//     callback();
// }

// function sayGoodBye() {
//     console.log("goodBye");
// }

// greet("abc", sayGoodBye);

// function fetchData(userId, callback) {
//     console.log('fetch data for user', userId);
//     setTimeout(() => {
//         console.log("Data received");
//         callback();
//     }, 2000);
// }

// function displayData() {
//     console.log("Display your data");
// }

// fetchData(101, displayData);

// function outerfunction(outerValue){
//     return function innerfunction(innerValue) {
//         console.log(`outer: ${outerValue} & inner: ${innerValue}`);
//     };
// }
  
// const newfunction = outerfunction("Hello");
// newfunction("world");



// function createCount() {
//     let count = 0;
//     return function() {
//         count++;
//         console.log(count);       
//     };
// }
// const counter = createCount();
// counter();
// counter();
// counter(); 
// counter();


// let numbers = [10, 20, 30];
// console.log(numbers);


// let [x, y, z] = numbers;
// console.log(x); 
// console.log(y);
// console.log(z);


let numbers = [10, 20, 30, 40, 50];
console.log(numbers);

let [first,,,fourth] = numbers;
console.log(first, fourth);