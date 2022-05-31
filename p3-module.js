/*
    Danielle Mendoza
    Project 3
*/

// Returns true if the coin function parameter is a valid coin value of either 1, 5, 10, 25, 50, or 100

function validDenomination(coin) {
    if ([1, 5, 10, 25, 50, 100].indexOf(coin) !== -1) return true
}

//const coin = 1
//const coin2 = 0
//console.log("coin 1:",validDenomination(coin), "coin 2:", validDenomination(coin2))

//Returns the calculated value of a single coin object from the obj function parameter

function valueFromCoinObject(obj) {
    const {denom = 0, count = 0} = obj;
    return denom*count
}

//const penny = {denom: 5, count : 1}
//console.log(valueFromCoinObject(penny))

//Iterates through an array of coin objects and returns the final calculated value of all coin objects
function valueFromArray(arr) {
    return arr.reduce((accumulator, currentValue) => {return accumulator + valueFromCoinObject(currentValue)}, 0);
}

//console.log(valueFromArray([{"denom": 10, "count": 1}, {"denom": 1, "count": 5}]))
//console.log(valueFromArray(coins))

//Calls and returns the result of valueFromArray() function
function coinCount(...coinage) {
    return valueFromArray(coinage);
}

// TEST FUNCTIONS
console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));
console.log("[{}]", coinCount(coins));  // Extra credit

module.exports = {coinCount, coins};
