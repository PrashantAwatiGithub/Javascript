// console.log(2 < 3 );  //true
// console.log(2 <= 3);//true
// console.log(2>3);  //false
// console.log(2>=3); //false
// console.log(3 == 3 );//true
// console.log(2 != 1);//true

// console.log("2">1);  //ture      /// note -- javascript internally convert the string into the interger
// console.log("03">5);


// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);


//the reason is that an equality check == and comparisions > < >=  =< works differently.
//comparison convert null to number , treating it as 0. 
//that's why (3) null>=0 is true and (1)null > 0 is false.



// console.log(null > 0);
// console.log( null == 0);
// console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0 ); 
