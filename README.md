# cit281-p3
```
Purpose: Using Fastify, GET verb, routes, query parameters, to write and execute a coinage web server
```

Coinage server can validate coins of values (denomination): 1, 5, 10, 25, 50, or 100. The coinage module takes an array of objects that take a denomination and a count of the certian denomination to count a total. 

Functions Created:
- validDenomination(coin) -- return true if the coin function parameter is a valid coin value of either 1, 5, 10, 25, 50, or 100
- valueFromCoinObject(obj) -- returns the calculated value of a single coin object funcition parameter 
- valueFromArray(arr) -- iterates through an array of coin of objects and returns the final calculated value of all coin objects
- coinCount(...coinage) -- calls and returns result of valueFromArray() function, which will be the value of all coin objects with the coinage array function parameter

Technologies Used:
- Visual Studio Code

Skills Learned:
- use array indexOf() and .reduce() method
- refactor code blocks into singular lines (or as little as possible)
- object deconstruction to create constant variables with query parameters
- crate Fasitfy server and GET routes
- work with array of objects


## Testing Code
![image](https://user-images.githubusercontent.com/67397853/171083127-08b23a77-363f-46d7-8219-417723c690a4.png)

## Test Code Expected and Returned Output
![image](https://user-images.githubusercontent.com/67397853/171083176-1e2769be-5af3-4501-9ed3-2403100c86cf.png)
