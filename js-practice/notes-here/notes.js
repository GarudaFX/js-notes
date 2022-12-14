// console.log(); - It is the print in terminal (where you can display results)
// prompt(); - Inputs the user using User Interface
// alert(); - Outputs the user using User Interface

/* Operators
   //Basic operators
   +, -, /, *, %, **

    //Math Methods
        //Math.ceil(value) - rounds up to the nearest integer
        //Math.floor(variable) - rounds down to the nearest integer
        //Math.random(value) - receive a number between 0 and 1

    //Functions
        -sum(); returns the sum of all variables
*/

/* Variables
    const - The value cannot be changed
    let = The value can be changed
    var = The value can be changed (not recommended)
*/ 

/* Functions
    syntax:
        function <identifier> {
            //statements 
        }

    calling a function:
        <identifier>();
*/

//Template literals provide an easy way to interpolate variables
//and expressions into strings

/* Interpolation is an efficient way of concatenation 
(connecting to or more strings) 

        example:

        function greeting(name) {
            greet = `hi ${name}, Nice to meet you!`
            console.log(greet);
        }

  //Arrow functions (=>) 
        syntax: 
            const <identifier> = (argument) => {
                //statements
            }

        Implicit Return
            const <identifier> = (argument) => variable1 + variable2;
*/

/* Arrays
        const groceries = ['apple', 'orange', 'grape','banana];

        //Functions
            push(element); -> Adds one or more elements to the
            end of an array and returns the new length of the array
            
            slice(initial, designated) -> Gets only the specific element
            of an array 

            indexOf() -> Gives the index of the element inside an array

            length() -> Gets the length of the array
*/

/* Objects
        Syntax:
            key: value pairs;

                const person = {
                    name: 'Francis'
                    age: 20;
                    language: 'javascript';
                };

        2 Ways of accessing the Object
            1. dot notation -> console.log(person.shirt);
            2. bracket notation -> console.log(person['shirt']);


    Methods
        - Is a property containing a function definition

        SYNTAX: 
            const person = {
                name: 'Francis',
                age: 20,
                language: 'JavaScript',
                love: ' I love',
                hobbies: ' Programming',
                skills: function () {
                    return this.love + this.hobbies;  //This is the method
                }

                const greeting = (person,person2) => {

                const hello = 'Hi my name is ' + person2.name + ' and my age is ' +
                person2.age + ' and I speak ' + person2.language + ' and mostly, I love ' + person.name + ' so much! and his motto is' + person.skills();

                return hello;
            }

            console.log(greeting(person,person2));
        }
*/

/* Higher order functions
        - map();  <- it loops and returns an array

            syntax: 
                //Implicit return
                [1,2,3,4,5].map(number => console.log(number))
                output = 1 2 3 4 5
                
                or 

                [1,2,3,4,5].map(number => {
                    console.log(number));
                })
                output = 1 2 3 4 5


        - filter() - It loops and returns an array with
            matching conditions

            syntax:
                const filter = (numbers,greaterThan) => {
                    let result = []
                    for(const number of numbers) 
                        if(number > greaterThan) 
                            result.push(number)

                    return result
                }

                console.log(filter[1,2,3,4,5,6], 3)

                ACTUAL APPLICATION OF FILTER FUNCTION

                const nums = [1,2,3,4,5,6]
                console.log(nums.filter(num => num > 6))



        - reduce();
            -Takes in a function as an argument
            - Loops and gives you back the accumulator
            - Makes an array that returns a single value 
            by adding all values inside the array
            
            Syntax:
                function sum(a, b) {
                    return a + b;
                }

                const nums = [1,2,3,4,5,6]
                const result = nums.reduce(sum)

                console.log(result)
*/

/* DOM Manipulation 
    variable.innerText <- Changes the value of the 
                        text in the html
    variable.innerHTML <- changes the value of the text
                        in the html (outside javascript and
                            inside HTML)

    variable.style.color = "value" <- changes the font color of an element
    variable.stlye.backgroundColor = "value"
*/

/* Events 
    variable.onclick <- This is an event that detects every clik of the 
                    object
*/

/* 
   Additional Functions --------------------------------

   .toFixed(number) -> it is like the maximum decimal place values to display (%.2f in C langauge)
   .toLocalString('en-US') -> this will convert to a US churvanes
*/

/* APIS 
    -stands for Application Programming Interface
    - It lets your app communicate with other services
    to fetch data


    Syntax:
        
    -> Asynchronously fetch data from the server 
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        dogImgDiv.innerHTML = `<img src='${json.message}' height=400 width=400/>`
    })
*/ 
