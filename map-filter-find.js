// const numbers =[3,4,5,6,7,8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

//use for map

// const numbers =[3,4,5,6,7,8];
// function square (element){
//     return element * element;
// }
// numbers.map = square

//use for map

/*const numbers =[3,4,5,6,7,8];

function square (element){
 return element * element;
    }

    numbers.map (function(element){
        console.log(element);
    })
*/ 

//use for map for element, index, array

/*const numbers =[3,4,5,6,7,8];

function square (element){
 return element * element;
    }

    numbers.map (function(element,index, array){
        console.log(element,index, array);
    }) */
    //use of map another away
  /*  const numbers =[3,4,5,6,7,8];

function square (element){
 return element * element;
    }

   const result =  numbers.map (function(element){
    return element * element;
    }) 

console.log(result); */

// map uses in three way

/* const numbers =[3,4,5,6,7,8];
//1
function square (element){
    return element * element;
       }
 //2
const square = element => element * element;
//3
const square = x => x * x;

const result =  numbers.map (function(element){
    return element * element;

console.log(result); */

//map short way
const numbers =[3,4,5,6,7,8];
const result = numbers.map(x => x * x);
console.log(result); 

