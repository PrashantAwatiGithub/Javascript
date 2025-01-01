// const userEmail = "prashant@gmail.com"   // truthy value
// if(userEmail){
//     console.log("Got user email")   //Got user email
// }
// else{
//     console.log("Don't have user email");
// }

//----------------------------------------------------------

// const userEmail = ""
// if(userEmail){
//     console.log("Got user email")   // Don't Got user email
// }
// else{
//     console.log("Don't have user email");
// }

//-----------------------------------------------------

// const userEmail = []
// if(userEmail){
//     console.log("Got user email")   //Got user email
// }
// else{
//     console.log("Don't have user email");
// }
//--------------------------------------

//falsy values
//false , 0 ,-0 , BigInt 0n, "" , null , undefined , NaN


//truthy Values
//"0" , 'false'  ,  " " , [] , {} , function(){} ,


// checking array is empty or not
// if(userEmail.length === 0){
//     console.log("array is empty")
// }


//checking object is empty or not
const emptyObject = {}

if(Object.keys(emptyObject).length===0){
    console.log("object is empty");
}

//--------------------------------------------------------



// Nullish Coalescing Operator (??):null undefined

let val1 ;
// val1 = 5 ?? 10;           // 5
//val1 = null ?? 10 ;  //10
//val1 = undefined ?? 15   //15
val1 = null ?? 10 ?? 20     //10
console.log(val1)




//----------------------------------------------


//Ternary Operator

const iceTeaPrice  = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

