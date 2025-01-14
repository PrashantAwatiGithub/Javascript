// for of loop
 // ["","",""]
 //[{},{},{}]

// arr = [1,2,3,4,5,6,7,8,9]
//  for (const num of arr) {
//     console.log(num)
    
//  }

 const greeting = "hello world"

 for (const greet of greeting) {
    // console.log(greet)
    //console.log(`each char is  ${greet}`)
    
 }



 //Map

 const map = new Map()
 map.set('In', "India")
 map.set('USA',"United states Of America")
 map.set('FR' , "France")
 map.set('IN',"India") //map doesn't take duplicate values 

 //console.log(map)

  for (const element of map) {
//     console.log(element)
  }

for (const [key , value] of map) {//destructuring array
    //console.log(key , " :-",value);
}


//objects 

const myObject = {
    'game1': 'NFS',
    'game2':'spiderMan'
}

// for (const [key , value] of myObject) {  // this itration method is not work on objects
//     console.log(key,':-',value);
// }

