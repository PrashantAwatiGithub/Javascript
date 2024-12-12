
// Arrays

const myArray=[0,1,2,3,6,41,5,5]
const myHeros = ["Shaktiman","Junior Ji","Hatim"];
const myArray2 = new Array(1,2,3,6,4,5,44,5,55)
//console.log(myArray[2]);  

//Array Methods

//  myArray.push(66);
//  console.log(myArray);  //add element in array at last index

//  myArray.push(77);
//  console.log(myArray);

//  myArray.pop();    // delete element in the array at last index
//  console.log(myArray);

//  myArray.unshift(9);  //add element on  0 th index in array
//  console.log(myArray);

//  myArray.shift()      // ddelete element on the 0th element in array

//  console.log(myArray);

//  console.log(myArray.includes(66));  //false

//  console.log(myArray.indexOf(3));  // 3   // if value doesn't present in array it returns -1
 
  const newArray = myArray.join();

//   console.log(myArray);
//   console.log(newArray);
//   console.log(typeof newArray);

  //slice , splice

  console.log("A",myArray);

  const myn1 = myArray.slice(1,3) // slice - it will return length-1 value
  console.log(myn1);

  console.log("B",myArray);
  
const myn2=myArray.splice(1,3);    // splice - it will return length value
console.log("C", myArray);
console.log(myn2);


//difference between slice and splice
//slice -  it does not manupulate the original array
//splice  -  it manupulate the original Array










