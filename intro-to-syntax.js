// Basics of JavaScript

/*
    This is a multiline comment
*/


/*
Primitive data types: strings, integers, boolean, float, arrways (python list), objects (similar to but NOT EXACTLY LIke python dictionaries)

JavaScript is weakly typed like python

JavaScript Casing Convention
In python we use snake casing: this_is_a_variable
JavaScript uses Camel Casing: thisIsAVariable
*/

// Variable declaration is when we initially create a variable and some space in our application's memory for that variables value
var he11oWorld;

/* variable assignment is assignin a value to a declared variable */
he11oWorld = 'Hello World.';

// Combining variable creation and assignment
var he11oWorld2 = 'Hello World 2';

// updating after assignment
he11oWorld2 = 'Hello fuckers.';

// Semi colon is purely optional in JavaScript unless you are writing on multiple commands on a single line

// To run a JS file I type node <name> into the console

// print() in python
console.log(he11oWorld2);

/*
new_var = 'Value'
*/
var newVar = 'Value'
let newVar2 = 'Value2'
const newVar3 = 'Value3'

// const creates a constant variable that cannot be updated

// Declaring and assigning and integer
let favoriteNumber = 10

// Declaring and assigning a float
let myFloat = 10.5

console.log(favoriteNumber, myFloat)

/*
*ARRAYS
*/

// Declaring and assigning an array

let myNums = [1,2,3,51,5,3,5,4]

console.log(null > 0)
console.log(null >= 0)
console.log(null == 0)
console.log(myNums)


// Index to the get the second number in my nums
console.log(myNums[1])

//update teh value at an index
myNums[1] = 10

console.log(myNums)

// Adding to the end of an array
// in JS it is .push

myNums.push(7)

// unshift() -- Adds to the beginning of an array
myNums.unshift(16)

console.log(myNums)

// .shift() removes the first item
myNums.shift()

console.log(myNums)

// .pop() removes from the end of the array
// myNums.pop()

// .includes() is a membership check
if (myNums.includes(10)) {
    console.log('10 is there')
}

// .indexOf()
// console.log(myNums.indexOf(51))

//negative indexing in JS
// in newer versions we have .at(negativeNum)
console.log(myNums.at(-1))

console.log(myNums[myNums.length - 1])

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Slicing 
// slicing is 0 indexed but inclusive on both ends

console.log(months.slice(1, 4))

// Splicing -- arr.splice(start-insertion, items-deleted, items-to-insert)
// Create a new month and put it between Jun and Jul 'Min'
// months.splice(6, 0, 'Min')

// console.log(months)

// months.splice(0, 1, "Lom")

// .reverse() -- reverses the list
// console.log(months.reverse())

// .join()
const words =['Hello', 'World', 'Again']
console.log(words.join(' '))

// .split()
const wordStr = 'Hello world again'
console.log(wordStr.split(' '))

// .sort() -- can be used to sort strings and arrays, sorts alphabetically even if it's integers

months.sort()
// console.log(months)

// using Arrow functions (lambdas) to do custom sorting
months.sort((a,b) => {
    if (a.charAt(1) > b.charAt(1)) {
        return 1
    } else {
        return - 1
    }
})

// console.log(months)
let unsortedNums = [1,3,5,2,5,23,1,11,5,534,5,]

// unsortedNums.sort((a,b) => {
//     if (a > b) {
//         return 1
//     }
//     else {
//         return -1
//     }
// })

unsortedNums.sort((a,b) => a-b)

//  Seems broken, sort
// unsortedNums.sort(a,b) => { 
//     return a-b
// }
// reverse the list

unsortedNums.sort((a,b) => b-a)

// console.log(unsortedNums)

/*
* OBJECTS
*/

const myPerson = {
    firstName: 'Dylan',
    lastName: 'Smith',
    hairColor: 'Blonde',
    address: '123 Main St',
    city: 'Candyland'
}

// console.log(myPerson)

// Accessing a key. 

// Dot notation

// console.log(myPerson.firstName)

// Index notation/ Squere bracket notation
// console.log(myPerson['lastName'])

myPerson.firstName = 'Nalyd'

// console.log(myPerson.firstName)

const cart = {
    apple: 2,
    banana:4,
    cereal:5,
    lime:4
}

// WHy use dot versus index notation?
let itemToDisplay = 'apple'
// console.log(cart[itemToDisplay])


// Conditionals
let myName = 'Charles'

myName = 'Sam'
// myName = 'Dylan'

// Print out 'Hello Charles" if myName is 'Charles, print 'Hey Dylan" if myName is Dylan, else "I Don't know who you are"

// if (myName == 'Charles') {
//     console.log('Hello Charles')
// } else if (myName == 'Dylan') {
//     console.log("Hey Dylan")
// } else {
//     console.log("I don't know who you are.")
// }

// ways to define functions in JavaScript

// Equivalent of 'def'
function helloWorld(param1) {
    return param1
}

const newFunc = function(param1) {
    return param1
}

// Arrow function is a lambda or anonymous function
const arrowFunc = (param1) => {
    return param1
}

// console.log(helloWorld('Hello'))
// console.log(newFunc('hello'))
// console.log(arrowFunc('Hello'))

// 3 main types of for loops

let myLoopNums = [1,2,5,366,733,676]

// Traditional for loop
// for (let i = 0; i < myLoopNums.length; i ++) {
//     console.log(i)
// }

// for ... of loop
// Equivalent to for curr_num in my loopnums
// for(let currNum of myLoopNums) {
//     console.log(currNum)
// }

// for ... in loop
// loops through object keys, can be used for arrays to grab indexes
// for (let currKey in myLoopNums) {
//     console.log(currKey)
// }

// for (let currKey in myPerson) {
//     console.log(currKey, myPerson[currKey])
// }

// Formatted Strings

let animal = 'Penguin'

// Print a string that says "Your favorite animal is <name>"
// console.log("Your favorite animal is " + animal)

// f'' is a backtick character `` Back tick is also a multiline string. Template literals/ Template Strings
// console.log(`Your favorite animal is ${animal}`)


/*
 While Loops
*/

// While true loops
let i = 0
// while (true) {
//     console.log(i)
//     i++

//     if (i> 10) {
//         break
//     }
// }

while(i < 10) {
    console.log(i)
    i++
}