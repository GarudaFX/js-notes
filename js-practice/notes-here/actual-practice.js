// var first_number = prompt('Enter first number: ');
// var second_number = prompt('Enter second number: ');
// var op = prompt('Enter operator: '); 

// var result;
// if(op == '+') {
//     result = Number(first_number += second_number);
//     alert(result);
// } else if(op == '-') {
//     result = first_number -= second_number;
//     alert("Difference: " + result);
// } else if(op == '*') {
//     result = first_nubmer *= second_number;
//     alert(result);
// } else {
//     result = first_number /= second_number;
//     alert(result);
// }

// let question = prompt('Is it raining: ');

// if(question == 'Yes'|| question == 'yes') {
//     console.log('Grab your umbrella');
// } else {
//     console.log('Wear your sunglasses');
// }


// let name;
// function greetings(name) {
//     console.log('Hello, ' + name+'! ' + 'Nice to meet you!')
// }

// greetings('Francis');


/*String Interpolation
     function greeting(name) {
         greet = `hi ${name}, Nice to meet you!`
         console.log(greet);
     }

     greeting('Jennie');
*/


// let userPrompt1 = prompt("Enter num1: ");
// let userPrompt2 = prompt("Enter num2: ");
// let userPrompt3 = prompt("Enter operator: ");

// function calculate(userPrompt1, userPrompt2, userPrompt3) {
//     if (userPrompt3 == '+') {
//         return userPrompt1 + userPrompt2;
//     } else if (userPrompt3 == '-') {
//         return userPrompt1 - userPrompt2;
//     } else if (userPrompt3 =='*') {
//         return userPrompt1 * userPrompt2;
//     } else {
//         return userPrompt1 / userPrompt2;
//     }
// }

// let result = calculate(userPrompt1, userPrompt2, userPrompt3);
// console.log("Result: " + result);

// let a,b;

// const sum = (a,b) => {
//     return a + b;
// }

// console.log(sum(1,3));
// let a = 21, b = 10;

// const sum = (a,b) => {
//      return a+b;
// }   

// const sub = (a,b) => {
//     return a-b;
// }

// const div = (a,b) => {
//     return a / b;
// }

// const mul = (a,b) => {
//     return a * b;
// }

// console.log(sum(a,b));

// const groceries = ['apple','banana','orange','pair'];
// console.log(groceries);
// groceries.push('cookes');
// console.log(groceries.slice(1,4));

// const person = {
//     name: 'Francis',
//     age: 20,
//     language: 'JavaScript',
//     love: ' I love',
//     hobbies: ' Programming',
//     skills: function () {
//         return this.love + this.hobbies;
//     }
// }

// console.log(person.name); //dot notation
// console.log(person['age']); //bracker notation
// console.log(person.language);

// person.phone = '090-874-79193'
// console.log(person.phone);
// console.log(person);

// const person2 = {
//     name: 'Jennie',
//     age: 26,
//     language: 'Korean'
// }

// console.log(person2.name); //dot notation
// console.log(person2['age']); //bracker notation
// console.log(person2.language);

// const greeting = (person,person2) => {

//     const hello = 'Hi my name is ' + person2.name + ' and my age is ' +
//     person2.age + ' and I speak ' + person2.language + ' and mostly, I love ' + person.name + ' so much! and his motto is' + person.skills();

//     return hello;
// }

// console.log(greeting(person,person2));

//loops
// const myHobbies = ['Programming','Coding','Development','Studying']
// let i = 1;

// for(i = 0; i < myHobbies.length; i++) {
//     console.log(myHobbies[i]);
// }

// ES6 Function with ES6 for loop 
// const numbers = []
// let doubles = []
// let sum = 0

// const doubleNumbers = (numbers,) => {
//     for(const number of numbers) {
//         doubles.push(number ** 2)
//     }
//     return doubles;
// }

const letterCounter = (phrase) => {
    return { result: phrase.length }
}

const phrases = prompt('Write your phrase: ')
console.log(phrases)
console.log(letterCounter(phrases))
