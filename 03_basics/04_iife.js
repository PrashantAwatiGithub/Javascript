//Immediately Invoked Function Expressions  (IIFE)

//Global scope variable pollution occurs when multiple scripts or functions define variables in the global scope, leading to conflicts and unintended overwrites.


//syntax
// (() => {
//     // Modern arrow function syntax for an IIFE
// })();

//Example

// function chai(){
//     console.log("DB is connected")
// }

// chai()

// example  of iife

// (function chai(){     // named iife
//     console.log("DB is connected")
// })();   
          //note  :  this function doen not know where the context will stop that why we have to give the semocolon after the function is completed


//iife using arrow function
( ()=>{    // unnamed iife
console.log("DB is connecgted")
} )(); 

( (name)=>{
    console.log(`DB is connected${name}`)
} ) (" prashant");


//note  : we can  write 2 or more iife s in one file using semicolon