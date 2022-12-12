//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(names, sentence){
    for(let currName of names){
    if (sentence.includes(currName)) {
        console.log(`Matched ${currName}`)
    } else {
        console.log('No Matches')
        }
    }
}

findWords(dog_names,dog_string)
//Call method here with parameters the-future-is-now

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let GivenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    counter = arr.length
    for (i=0; i < counter; i ++) {
        if (i % 2 == 0) {
            arr.splice(i, 1, 'Even index')
        }
    }
    return arr
}

console.log(replaceEvens(GivenArr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// Create a function that takes an integer as
// an argument and returns "Even" for even numbers or "Odd" for odd numbers.

let evenOrOdd =function(num) {
    if (Math.abs(num % 2) ===1) {
        return 'Odd'
    }
    return 'Even'
}

console.log(evenOrOdd(5))

// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 
// below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

function threesOrFives(num) {
    let sum = 0
    if (num < 0) {
        return 0
    } else for (i = 0; i < num; i ++) {
        if (i % 3 == 0) {
             sum += i
        } else if ( i % 5 == 0) {
            sum += i
        }
    } return sum
} 

console.log(threesOrFives(15))

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


// (condition) ? (if true) : (if false)
function findOdd(A) {
    const myObj = {}
    for (let num of A) {
        myObj[num] = myObj[num] +1 || 1
    } for (let count in myObj) {
        if (myObj[count] % 2 === 1) {
            return count
        }
    }
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
// myObj.count = myObj.count ? myObj.count + 1 : 1
// myObj.count = myObj.count + 1 || 1