// const array = [-4, 6, 77, -22, -56, 4, 93, -44];
// const newArray = [];

// for(x of array) {
//     if(x >= 0){
//         newArray.push(x)
//     }
    
    
// }
// console.log(newArray)

// const guy = {
//     name : 'peter',
//     age : 43,
//     country : 'netherlands'
// }

// let mystring = JSON.stringify(guy);
// console.log(mystring)

const obj = {
    name : 'gibbrish',
    size : 56,
    weight : 77,
    place : 'ukraine',
    color : 'blue'
}
let objtxt = JSON.stringify(obj);
localStorage.setItem("myObject", objtxt);

let objtext = localStorage.getItem("myObject");
console.log(objtext)