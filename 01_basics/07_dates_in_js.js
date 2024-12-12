//Dates
let myDate = new Date()
// console.log(myDate);  //2024-12-12T05:34:10.423Z

//console.log(myDate.toString());//Thu Dec 12 2024 05:39:55 GMT+0000 (Coordinated Universal Time)

//console.log(myDate.toLocaleDateString());  //12/12/2024

//console.log(myDate.toDateString()); //Thu Dec 12 2024

//console.log(myDate.toJSON());   //2024-12-12T05:38:48.447Z
//console.log(typeof myDate);  // object

// let myCreatedDate = new Date(2023, 0 , 23);

// console.log(myCreatedDate.toLocaleDateString());   //1/23/2023

//let MyCreatedDate = new Date(2001,11,12,5,3);
//console.log(MyCreatedDate.toLocaleString());         //12/12/2001, 5:03:00 AM

//let myCreatedDate = new Date("01-12-2024");             // TO set specific date 

// console.log(myCreatedDate.toLocaleString()); //1/12/2024, 12:00:00 AM


let myCreatedDate = new Date("2023-01-14");             // TO set specific date 
//console.log(myCreatedDate.toLocaleString());           //1/14/2023, 12:00:00 AM

 

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate= new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDate());
// console.log(newDate.getDay());


//`${newDate.getDay()} and the time `
newDate.toLocaleString('default',{
    weekday:"long",

})