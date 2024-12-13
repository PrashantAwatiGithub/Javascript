// Singleton     -- when we create an object using constructor that time create a singleton
//Object.create

 
//Object Literals

const mySym = Symbol("key1")

const jsUser={
    name: "Hitesh",
    "fullName" : "Prashant Ananda Awati",
    [mySym]:"mykey1",
    age:23,
    location : "maharashtra",
    email : "Prashant@Google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","Saturday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"])
// console.log(jsUser["fullName"])
// console.log(jsUser[mySym])

jsUser.email = "prashantawati@microsoft.com";   // we can changing the value in object
//console.log(jsUser);

//Object.freeze(jsUser);       //after freeze we can not change the values in object
jsUser.name = "Prashant";
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`Hello JS USer ,${this.name}`)
}


console.log(jsUser.greeting2());
