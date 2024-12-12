const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);   //flash


//combine two arrays
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);   //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//combine two arrays 2 nd way
const all_New_heros = [...marvel_heros, ...dc_heros];
//console.log(all_New_heros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [2,2,[12,4,5,63,8,[4,546,5,55,4,55663,313,],9,6,4],3255,5,5,5,]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

