const user = {   // this keyword refers current context value
    username: "Prashant",
    price: 999,
    welcomeMessage: function () {
        // console.log(`${this.username}, welcome to website`);

        // console.log(this)
    }
}

// user.welcomeMessage();
// user.username = "Sameer";
// user.welcomeMessage();

// console.log(this);   //{}




// function chai() {
//     let username = "prashant";
//     console.log(this)
//     console.log(this.username);   //undefined
// }

// chai();
//-------------------------------------------------

// const chai = function (){
//     let username = "hitesh";
//     console.log(this)
//     console.log(this.username) // undefined

// }

// chai();



//-----------------arrow  function-------------------

const chai = () => {
    let username = "prashant";
    //console.log(this);         //{}
    console.log(this.username);   //undefined
}

//chai();

// basic arrow function
// const addTwo = (num1,num2)=>{
//     return num1 + num2 ;
// }

// console.log(addTwo(50,40));     //90


//implicit return 

// const addTwo=(num1,num2)=>num1 + num2;

// console.log(addTwo(40,60));  //100



// const addTwo = (num1, num2) => (num1 + num2);  //100 note : when we use parenthesis to wrap the parameter that time we need not to add curly braces , this technique is used in react js 

// console.log(addTwo(40, 60));  //100

//how to print object in arrow function 
const addTwo = (num1, num2) => ({username:"Prashant"})  //100 note : when we use parenthesis to wrap the parameter that time we need not to add curly braces , this technique is used in react js 

console.log(addTwo(40, 60));  // { username: 'Prashant' }


