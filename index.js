// Function that takes a callback function as an argument and invokes it
const receivesAFunction = callback => callback()
// Function that returns a named function
const returnsANamedFunction = () => function namedFunction(){}
// Function that returns an anonymous function
const returnsAnAnonymousFunction = () => function(){}