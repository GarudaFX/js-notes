// // var first_number = prompt('Enter first number: ');
// // var second_number = prompt('Enter second number: ');
// // var op = prompt('Enter operator: ');

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


// /*String Interpolation
//      function greeting(name) {
//          greet = `hi ${name}, Nice to meet you!`
//          console.log(greet);
//      }

//      greeting('Jennie');
// */


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

// // let result = calculate(userPrompt1, userPrompt2, userPrompt3);
// // console.log("Result: " + result);

// // let a,b;

// // const sum = (a,b) => {
// //     return a + b;
// // }

// // console.log(sum(1,3));
// // let a = 21, b = 10;

// // const sum = (a,b) => {
// //      return a+b;
// // }

// // const sub = (a,b) => {
// //     return a-b;
// // }

// // const div = (a,b) => {
// //     return a / b;
// // }

// // const mul = (a,b) => {
// //     return a * b;
// // }

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
// console.log(person2['age']); //tracker notation
// console.log(person2.language);

// const greeting = (person,person2) => {

//     const hello = 'Hi my name is ' + person2.name + ' and my age is ' +
//     person2.age + ' and I speak ' + person2.language + ' and mostly, I love ' + person.name + ' so much! and his motto is' + person.skills();

//     return hello;
// }

// console.log(greeting(person,person2));

// //loops
// const myHobbies = ['Programming','Coding','Development','Studying']
// let i = 1;

// for(i = 0; i < myHobbies.length; i++) {
//     console.log(myHobbies[i]);
// }

// // ES6 Function with ES6 for loop
// const numbers = []
// let doubles = []
// let sum = 0

// const doubleNumbers = (numbers,) => {
//     for(const number of numbers) {
//         doubles.push(number ** 2)
//     }
//     return doubles;
// }

// const letterCounter = (phrase) => {
//     return { result: phrase.length }
// }

// const phrases = prompt('Write your phrase: ')
// console.log(phrases)
// console.log(letterCounter(phrases))

// const myNum = [1,2,3,4]

// const sumOfMyNum = (myNum) => {
//     let sum = 0

//     for(const num of myNum) {
//         sum+=num
//     }
//     return {result: sum}
// }


//------------------------------------------------------------------------------


// console.log(sumOfMyNum(myNum))

//Finding the largest number inside
//the array
// const nums = []

// const max = (nums) => {
//     let result = nums[0]

//     for(const number of nums) {
//         if(number > result) result = number
//     }
//     return result
// }

// console.log(max([4,2,6,9,1,54,234,621,423,52432]));

//--------------------------------------------------------------------------------


//Determine the frequency of the string
// const phrase = []

// const wordFrequency = (phrase) => {
//     //constructing an object to store the letter and its frequency
//     let frequency = {}
//     for(const letter of phrase) {
//         //check if the letter is already existing
//         if(letter in frequency) {
//             frequency[letter] += 1
//         } else {
//             frequency[letter] = 1
//         }
//     }
//     return frequency
// }
// console.log(letterFrequency('balay ni labay libat'))


//--------------------------------------------------------------------------------

//Function to determine the frequency of words inside a phrase

// const wordFrequency = (array) => {
//     let frequency = {}
//     const wordArray = phrase.split(' ') //split function ables you to divide strings into different indeces inside an array
//     // for(const word of wordArray) {
//     //     console.log(word)
//     // }
//     console.log(wordArray)
// }

// wordFrequency('lmao what the heck lmao')


//---------------------------------------

// const numbers = []
// const greaterThan = 3


// const filter = (numbers,greaterThan) => {
//     numbers.map(number => {
//         if(number > greaterThan)
//             empty.push(number)
//     })
//     console.log(empty)

//     for(number of numbers) {
//         if(number > greaterThan)
//             empty.push(number)
//     }
//     return empty
// }

// //-------------------------------------
// //Array of objects

// const actors = [
//     {
//         name: 'Francis',
//         age: 20,
//         networth: 160
//     },
//     {
//         name: 'Sophia',
//         age: 19,
//         networth: 170
//     },
//     {
//         name: 'Jennie',
//         age: 19,
//         networth: 170
//     },
//     {
//         name: 'Rose',
//         age: 19,
//         networth: 170
//     },
//     {
//         name: 'Lisa',
//         age: 19,
//         networth: 170
//     },
//     {
//         name: 'Jisoo',
//         age: 19,
//         networth: 170
//     }
// ]
// const template = document.getElementById("template")

// let result = actors.filter(actor => actor.networth > 150)
// let names = result.map(actor => actor.name).join(', ')
// template.innerHTML = `<h1>${(names)}</h1>`


//---------------------------------------------------- CLicker
// const displayCount = document.getElementById("counter")
// const buttons = document.querySelectorAll(".clicker")

// const choice = {
//     add : 0,
//     deduct: function() {
//         return this.add = this.add - 1
//     }
// }

// buttons.forEach(button => {
//     button.onclick = () => {
//         if(button.value == "add") {
//             choice[button.value] += 1
//         } else {
//             choice.deduct()
//         }
//         displayCount.innerText = `${choice[button.value]}`
//     }
// })


// const dogImgDiv = document.getElementById("dog-img");
// const btn = document.getElementById("new-dog");

// const newDog = () => {
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(json => {
//             console.log(json)
//             dogImgDiv.innerHTML = `<img src='${json.message}' height=400 width=400/>`
//     })
// }

// btn.addEventListener("click", (e) => {
//     newDog();
//     console.log("Clicked: get new dog")
// })

//SuperHero APP  ------------------------------------------------------------
//SuperHero API url = https://superheroapi.com/api/602893128119582

const newHero = document.getElementById('newHero');
const heroImg = document.getElementById('heroImg');
const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search');
const heroName = document.getElementById('heroName');
const heroStrength = document.getElementById('heroStrength');

const SUPERHERO_TOKEN = 602893128119582;
const BASE_ID = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const randomHero = () => {
    const numberOfHeroes = 731
    const randomHeroId = Math.ceil(Math.random() * numberOfHeroes);

    return randomHeroId;
}

const getRandomSuperHero = (id,name) => {
    fetch(`${BASE_ID}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        const heroName = `<h1>Name: ${json.name}</h1>`;
        const heroStr = `<h1>Strength: ${json.powerstats.strength}</h1>`;
        heroImg.innerHTML = `<img src= "${json.image.url}" width=200 height=200/>${heroName}${heroStr}`;
    })
}

const getSearchSuperHero = (name) => {
    fetch(`${BASE_ID}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        const superHero = json.results[0]
        // console.log(superHero);
        const heroName = `<h1>Name: ${superHero.name}</h1>`;
        const heroStr = `<h1>Strength: ${superHero.powerstats.strength}</h1>`;
        heroImg.innerHTML = `<img src= "${superHero.image.url}" width=200 height=200>${heroName}${heroStr}`;
    })
}

newHero.addEventListener("click", () => {
    getRandomSuperHero(randomHero());
})

searchBtn.addEventListener("click", () => getSearchSuperHero(searchBar.value));
