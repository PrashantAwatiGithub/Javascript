//for Each Loop
const codding = ["js","ruby","java","python","cpp"]

// codding.forEach(function(val){
//     console.log(val);
// })


//arrow function 
codding.forEach((item)=>{
//console.log(item)
}) 

const mycoding=[
    {
        langaugeName:"javascript",
        langaugeFileName:"Js"
    },
    {
        langaugeName:"Java",
        langaugeFileName:"java"
    },
    {
        langaugeName:"Python",
        langaugeFileName:"Py"
    }
]

mycoding.forEach( (item)=> {
    console.log(item.langaugeName)
} )