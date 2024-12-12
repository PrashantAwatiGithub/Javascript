const name = "Prashant";
const repoCount = 50;

//console.log(name + repoCount +"value");// this is an old method 

console.log(`my name is ${name} and my repo count is ${repoCount}`);  // this is new methid 

const gameName = new String ('Prashant');

// console.log(gameName[2]);
// console.log(gameName.__proto__);
// console.log(gameName.length);  ///8
// console.log(gameName.toUpperCase());  //PRASHANT
// console.log(gameName.charAt(4)); // h
// console.log(gameName.indexOf('t'));  // 7
const newString= gameName.substring(2,6);
console.log(newString); //asha

const anotherString= gameName.slice(-8,6);  
//note : we can use negative value in slice 
console.log(anotherString); // prasha

const newString1 = "   Prashant    ";
console.log(newString1);
console.log(newString1.trim());  // using trim() method we can remove the white spaces

const url="https://prashant.com/prashant%20awati";
console.log(url.replace('%20','-'));  //https://prashant.com/prashant-awati

console.log(url.includes('prashant'));   ///ture

console.log(url.split('/'));







