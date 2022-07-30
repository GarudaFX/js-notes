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
            const person = {
                name: 'Francis'
                age: 20;
                language: 'javascript';
            };

        2 Ways of accessing the Object
            1. dot notation -> console.log(person.shirt);
            2. bracket notation -> console.log(person['shirt']);

*/

