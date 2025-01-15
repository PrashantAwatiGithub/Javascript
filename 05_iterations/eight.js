// reduce()
const myNums = [1,2,3]
const myTotal = myNums.reduce(function(acc , currval){
    //console.log(`acc: ${acc} and curval${currval}`);
    return acc + currval
},0)

//console.log(myTotal)


//using arrow function
const mytotal = myNums.reduce( (acc,currval)=>acc + currval, 0 )
//console.log(mytotal)




const shoppingCart = [
    {
        itemName :"data science course",
        price:12999
    },
    {
        itemName :"Java course",
        price:1999
    },
    {
        itemName :"javascript course",
        price:2999
    },
    {
        itemName :"python course",
        price:999
    },
]

const priceToPay = shoppingCart.reduce( (acc ,item) => acc + item.price,0 )
console.log(priceToPay)