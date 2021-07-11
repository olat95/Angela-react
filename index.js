//ADVANCED ARRAY METHODS

let numbers = [3, 24, 3, 234, 12, 3, 43, 10, 67];
//USING MAPPING
// function double(x) {
//    return x*2;
// }
// const newNumbers = numbers.map(double);
// console.log(newNumbers)

//MAPPING MADE SIMPLER WITH ARROW FUNCTION
// const newNumbers=numbers.map((x)=>{
//    return x*2;
// })
// console.log(newNumbers);

//USING FOREACH (CREATING A NEW EMPTY ARRAY)

// let newNumbers = [];
// function double(x) {
//    newNumbers.push(x * 2);
// }

// numbers.forEach(double);
// console.log(newNumbers);

//FOREACH USING ARROW FUNCTION
// numbers.forEach((x)=>{
//    newNumbers.push(x*2);
// })
// console.log(newNumbers);

//USING FILTER (KEEPS ONLY VALUES THAT RETURN TRUE INto A NEW ARRAY)

// const newNumbers = numbers.filter((num)=>{
//    return num > 10;
// })

// console.log(newNumbers);

//USING REDUCE

//adding all the numbers in an array
//with foreach
// let counter = 0;

// numbers.forEach((num)=>{
//    counter += num;
// })
// console.log(counter);

//with map
// numbers.map((num)=>{
//    counter += num;
// })
// console.log(counter);

//with reduce
// let newNumber = numbers.reduce((accumulator, currentNumber)=>{
//    console.log(`accumulator = ${accumulator}` );
//    console.log(`currentNumber = ${currentNumber}` );
//    return accumulator + currentNumber;
// })
// console.log(newNumber);

//USING FIND AND FINDINDEX
//find

// let newNumber = numbers.find((x) => {
//    return x >= 10;
// });

// console.log(newNumber);

//findIndex
// let newNumber = numbers.findIndex((x) => {
//    return x >= 10;
// });

// console.log(newNumber);





//reduction of all chatacters in a specific array to a particular length
import emojilopedia from "./emojilopedia.js";

let newStatement = emojilopedia.map((desc)=>{
   return desc.description.substring(0,101);
});

console.log(newStatement);

