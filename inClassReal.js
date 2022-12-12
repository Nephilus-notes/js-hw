let arr = [0,1,0,3,12]

const moveZeroes = function(arr1) {
    let counter = arr1.length
    for (i=0; i < counter; i++) {
        if (arr1[i] === 0) {
            console.log(i)
            arr1.push(arr1[i])
            arr1.splice(i, 1)
        }
    } 
        return arr1
}

console.log(moveZeroes(arr))

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits)



const consec  =  function(arr1, a,b) {
    console.log(arr1)
    let  ai = arr1.indexOf(a)
    let bi = arr1.indexOf(b)
    if ( ai -bi === 1 || ai - bi == -1) {
        return true
    } else {
        return false
    }
    } 

console.log(consec([1, 6, 9, -3, 5, 4, -78, 0], -3, 4))