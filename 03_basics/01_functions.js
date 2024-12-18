
function myName() {
    console.log("P")
    console.log("R")
    console.log("A")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("N")
    console.log("T")

}

myName  // this is reference
// myName()     //this is execution


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,5)          //8
// addTwoNumbers("3",5)        //35
// addTwoNumbers(3,null)       //3
// addTwoNumbers(3,"4")       //34
// addTwoNumbers(3,undefined)      //NaN

// const result = addTwoNumbers(6, 5);
// console.log(result);          // undefined



function addTwoNumbers(number1 , number2){
    // let sum = number1 + number2;
    // return sum;

    return number1 + number2;

    //console.log("Prashant");      // this line does not excute because after return statement any code does not execute

}

const sum = addTwoNumbers(5,11);
//console.log("result", sum);         //result 16




function loginUserMessage(username){
    return`${username} just Logged In`
}

const login = loginUserMessage("Prashant");
// console.log(login);                       // prashant just Logged In
// console.log(loginUserMessage("samir"));   //samir just Logged In

function  calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200,650,456)) //[ 200, 650, 456 ]


function calculateCArtPrice(val1,val2,...num1){
    return num1
}

//console.log(calculateCArtPrice(120,5451,12,15,15,51,15))    //[ 12, 15, 15, 51, 15 ]



//passing object in function
   const user = {
    username : "Prashant",
    price : 200
   }

   function handleObject(anyobject){
    console.log(`username is ${anyobject.username} ,and price is ${anyobject.price}`);
   }

   //handleObject(user)
   handleObject({
    username:"sam",
    price:399
   })


  // passing array in  function

  const myArray =[200,151,2656,6255,455]

  function returnSecondValue(getArray){
    return getArray[1]
  }

  //console.log(returnSecondValue(myArray));     //151

  console.log(returnSecondValue([200,151,2656,6255,455]));     //151


  