let a = 10;
const n = 20;
var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("inner :",a)

}

//console.log(a)     //var is a global and local/block level  scope variable 
//console.log(b)   // b is in local scope  thats why it is not defined outer side of block
// console.log(c)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//nested functions

function one() {
    const username = "Prashant";

    function two() {
        const website = "youtube";
       // console.log(username);        //Prashant
    }
    //  console.log(website)  //  website can not access block scope elements

    two()
}

one()


if (true) {
    const username = "hitesh";
    if (username === "hitesh") {

        const website = " youtube"
        //console.log(username + website);   // hitesh youtube

    }
    //console.log(website);   // out of scope
}
// console.log(username);   //out of scope 



//_________________________________________________intersting______________________________

//ways to declare functions 
//1st way


addOne(5); //6         excution successfull
 function addOne(num){

return num +1 ;

 }

 addOne(5);



//second way
 //addTwo(5); // error   // here we declare a function and store it in a variable thats why this shows the error
 const addTwo = function(num){
    return num + 2 ;
 }

 addTwo(5);