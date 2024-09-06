// arithmatic operators
// let a = 6;
// let b = 4;
// console.log("a + b", a+ b);
// console.log("a - b",a-b);
// console.log("a * b",a*b);
// console.log("a / b",a/b);
// console.log("a ** b",a**b);// exponential
// console.log("a %b",a%b);// modulus  
// console.log("a++",a++);// post increment
// console.log("++a",++a);// pre increment


// assignment operators
// let a = 6;
// let b = 4;
// console.log("a += ", a += b);

// comparision operators
//  let a = 6;
//  let b = 4;
// console.log("a == b", a == b);
// console.log("a != b", a != b); 

// let c = 5; //number
// let d = "5"; //string
// console.log( c == d);
// console.log( c===d);  // strictk

// conditional statements

// let mode = "light";
// let color;
// if (mode === "light") {
//     color = "white";
// }
// if ( mode === "dark") {
//     color = "black";
// }
// console.log(color);


// let age = 25;
// if (age > 18) {
//     console.log("can Vote");
// }else {
//     console.log("cannot vote");
// }



// // odd or even
// let num = 10;
// if (num%2 === 0) {
//     console.log( num ," is even");}
//     else{
//         console,log( num ," is odd");
//     }
 // else if statements
// let mode = "dark";
// let color;
// if (mode === "dark"){
//     color = "Black";
// } else if (mode === "green"){
//     color = "Green";
// } else {
//     color = "white";
// }
// console.log(color);

// ternary operator
// let age = 17 ;
//  let result = age >= 18 ? "senoir" : "junoir";
// console.log(result);

// let color = "whitwk"

project
let num = prompt("enter a number");
if (num%5 === 0){
    console.log(num," is multiple of 5");

} else {
    console.log(num , "is not multiple of 5");
}

// practise
let score = prompt("Enter your score(0-100)");
let grade;
if (score >=90 && score <=100){
    grade = "A";
}
else if (score >=70 && score<=89)
{
    grade = "B";
} else if (score >=60 && score <=69){
    grade ="c";
}else if (score >=50 && score<=59){
    grade ="d";
}else {
    grade = "pass";
}
console.log("According to you score, The grade is ",grade);