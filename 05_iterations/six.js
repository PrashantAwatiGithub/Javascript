// const coding=["js","ruby","java","python","cpp"];

// const values = coding.forEach( (item)=>{
//     console.log(item);     //  js","ruby","java","python","cpp"
//     return item;   //undefined

// } )

// console.log(values); //undefined

//---------------------------------------------

const  myNums= [1,2,3,4,5,6,7,8,9,10];
// const newMyNums = myNums.filter( (num)=> num >4 )  // first way
// console.log(newMyNums);


const  mynewNums = myNums.filter( (num)=>{
return num > 4

} )

//console.log(mynewNums);
//---------------------------
 //USING FOR EACH

 const newNums = []
 myNums.forEach( (num)=>{
    if(num > 4){
        newNums.push(num)
    }
 } )

 //console.log(newNums)


 //------------------------Practice Example
 

 const books = [
    {title:'Book One',genre:'fiction',publish:1981, edition:2004},
    {title:'Book Two',genre:'history',publish:1992, edition:2008},
    {title:'Book Three',genre:'Non-fiction',publish:1855, edition:2017},
    {title:'Book Four',genre:'Science',publish:1965, edition:2014},
    {title:'Book Five',genre:'history',publish:1972, edition:2018},
    {title:'Book Six',genre:'fiction',publish:1945, edition:2019},
 ]

//  let userBook = books.filter( (bk)=> bk.genrre === 'history')
// console.log(userBook)

let userBook1 = books.filter(  (bk) => { 
    return bk.publish >= 1900 && bk.genre === "history"
}  )
 console.log(userBook1)

 