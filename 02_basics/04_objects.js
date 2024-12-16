
//Singleton

//const tinderUser = new Object()    //singleton object
const tinderUser = {}               //non singleton object

tinderUser.id = "53545";
tinderUser.name = "prashant awati";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);          //{ id: '53545', name: 'prashant awati', isLoggedIn: false }

 

const regularUser = {
    email:"prashantawati8661@gmail.com",
    userFullName:{
        firstName : "prashant",
        lastName : "Awati"
    }
}


//console.log(regularUser.userFullName.firstName);
 
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = {obj1,obj2}
//console.log(obj3);     //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3)   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const obj3 ={...obj1,...obj2};
//console.log(obj3);          //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id:1,
        email:"prashantawati8661@gmail.com",
        name:"prashant"
    },
    {
        id:2,
        email:"prashantawati8562@gmail.com",
        name:"samir"
    },
    {
        id:3,
        email:"prashantawati3033@gmail.com",
        name:"ajay"
    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));  
/*[
    [ 'id', '53545' ],
    [ 'name', 'prashant awati' ],
    [ 'isLoggedIn', false ]
  ] */

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//+++++++++++++++++++++++++ Destructuring ++++++++++++++++++++++++++++

const course = {
    courseName:"Js in hindi",
    price : "999",
    courseInstructor : "Prashant"
}
//console.log(course.courseInstructor);    //Prashant

//another Way
const{courseInstructor,courseName:cname}= course
console.log(courseInstructor);    //Prashant
console.log(cname);     //Js in hindi



