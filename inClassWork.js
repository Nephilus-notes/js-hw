const greetUser = function(username) {
    console.log(`Hello ${username}`)
}

const firstOdds = function() {
    for (let i =1; i <= 100; i ++) {
        if ( i % 2 == 1) {
            console.log(i)
        }
    }
}

firstOdds()
greetUser('Guppy')