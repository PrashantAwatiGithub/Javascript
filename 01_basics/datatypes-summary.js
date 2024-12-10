//  1 )   primitives

//   7 types : String . number, boolean , null, undefined , symbol , BigInt

// const score = 100;
// console.log(typeof score); //number

// const scorevalue = 1100.3;
// console.log(typeof scorevalue);   //number


// const isLoggedIn = false;
// console.log(typeof(isLoggedIn)) // boolean

// const outSideTemp = null;
// console.log(typeof(outSideTemp));  // object

// let userEmail;    // undefined 
// console.log(typeof(userEmail)); //undefined

// const id = Symbol('1223');
// console.log(typeof(id));

// const anotherId = Symbol('1223');
// console.log(typeOf(anotherId));

// console.log(id === anotherId);

// const bigNumber=66546546542156465n;
// console.log(typeof(bigNumber));


//*******************************************

// // 2)  non- primitive // reference type

// //Arrays , Objects , functions



// const heros = ["shaktiman", "junior ji", "Hatim", "VikralGabral"]
// console.log(heros);
// console.log(typeof heros);      // object

// const myObject = {
//     name :"prashant",
//     age:24,
// }
// console.log(myObject)


// const myfunction=function (){
// console.log("Hello World");
// }

//  console.log(typeof myfunction); //objectFunction or function 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  Stack and Heap Memory
 
//Stack (primitive )
// Heap (non primitive)

// let myYoutubeName = "PrashantAwati";
// let anotherYoutubeName = myYoutubeName;

// anotherYoutubeName="Vishwajit Lakhan";

// console.log(myYoutubeName);
// console.log(anotherYoutubeName)


let userOne= {
    name:"prashant ananda awati",
    email:"prashant@google.com"
}

let userTwo = userOne;

userTwo.email= "prashant@dell.com";

console.log(userOne.email);
console.log(userTwo.email);
