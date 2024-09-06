// // // for loop
// // for (let count=1; count <= 5 ; count++){

// //     console.log("Shivu");
// // }
// // console.log("loop has ended");

// // calculate sum of n number
// let sum = 0 ;
// for ( let i =1; i <=10 ; i++
// ){
//     sum = sum +i;
// }
// console.log("Sum is :" , sum);
  
// while loops
// while(condition){
//     // do same work
// }
// let i = 1
// while( i <= 5){
//     console.log("Hey good morning");
//     i++;
// }

// do while loop
// let i = 1;
// do {
//     console.log("Hello!");
// } while( i <=10);
// // do for loop

// for of loop
// let str = "shivu";
// for (let val of str){
//     console.log("val:",val);
// }

// for in loop
//  let student = {
//     Name : "shivu",
//     age : 18,
//     cgpa : 8.8 ,

//  } ;
//  for ( let key in student){
//     console.log(key ,"=" ,student[key]);
//  }


// print even numbers
// for ( let num =0 ; num <=100 ; num++){
//     if (num%2 ===0) {
//         console.log( "num is =",num);
//     }
// }

// practise 2 game
// let gameNum = 25 ;
// let userNum = prompt("Guess the number:");
// while (userNum != gameNum){
//     userNum = prompt("you enterd wrong number. Guess again :");
// }
// console.log("congratulatons you entered the right number");

// let str = "Apna collage";
// console.log(str[5]);

// // template literals
// let specialString = `this is literal statement`;
// console.log(specialString);


//  let obj = {
//      item : "Pen",
//      price : 20,
//  }
//  let output = `the cost of ${obj.item} is ${obj.price}`;
//  console.log(output);


// /* string interpolation 
// to create string by doing substituion of palceholders */

// console.log("Shivu \n Kumar");

/* String methods */
// let str = "shivukumar";
// newStr = str.toUpperCase();
// console.log(newStr);
 
// let val = "    have a nice day   ";
// console.log(val.trim());


// let num = "This is even number";
// console.log(num.toUpperCase());

// sliceing str.slice(start ,end?) return part of stirng 
// let str =  "shivu kumar";
// console.log(str.slice());

// // string concatination
// let str1 ="Sharan";
// let str2 = "Cherry";
// console.log(str1.concat(str2));


// sting replace
// let name = "Shivu";
// console.log(name.replace("Shivu", "Sharan"));

//string character
// let length = "0012345";
// console.log(length.charAt(5));

// practise
let fullName = prompt("Enter your Name:");
let userName = "@" + fullName + fullName.length;
console.log(userName);