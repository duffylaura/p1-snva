// developing a sum function with fat arrow notation 
// (a, b) => a+b; 

// An arrow function expression is an anonymous function expression written with the “fat arrow” syntax (=>).
// Rewrite the sum function with arrow function syntax:
const sum1 = (a, b) => {
    return a + b
  }

// Like traditional function expressions, arrow functions are not hoisted, 
// and so you cannot call them before you declare them. 
// They are also always anonymous—there is no way to name an arrow function.

// Arrow functions have lexical this, 
// meaning the value of this is determined by the surrounding scope (the lexical environment).

// Arrow functions introduce concise body syntax, or implicit return. 
// This allows the omission of the curly brackets and the return keyword.

const sum2 = (a, b) => a + b; //when single statement don't need curly brackets; when multi-line then need curly brackets 

// Arrow functions are one of the many things that make React code more concise and easier to read. 
// When used correctly, they can help your code become more declarative and easier to understand. 
// They are a concise way to write functions that do not have their own this, arguments, or new.

// But we are using names?????

// the variable sum2 has been assigned to the anonymous function expression, 
// so in this case, 
// sum2 is the name of the variable that references the anonymous function expression.
// So while the function expression itself is anonymous, 
// it can be assigned to a variable or used as a parameter, and the variable or parameter can be named. 
// In the example you provided, the variable sum2 can be used to refer to the anonymous arrow function.