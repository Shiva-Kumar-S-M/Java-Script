// 1) words and Keywords
// 2) variables let constants variable can be changed but not constants 
// 3) Hoisting declaring before initializing.
// 4) Conditional statements if else else if
// 5)  types primitive & reference [],{},()
// 6) while loops
// 7) function -- parameters & arguments 
// 8)arrays -- push pop shift &unshift
// hello how are you






// advance 
// diff b/w var & let const
// 1) es 5 & es6
// 2) function scoped & braces scoped
// 3) add itself to window object & where as it doesn't

//execution context -- variables , funciton ,lexical environment



// let x ;
// for (x = 0 ; x<10 ;x++){
//     console.log(x);



//1) how to copy references values
//2) truthy & falsy
//3)switch
//4)for-each , for-in , for-of,do-while
//5) what is first class funcs 
// 6) how are arrays are made behind the scenes 
//7) why we can make negative indexes arrays 
// 8) how to deleate prop



//-----------------------practise -------------------------//

// if else loop
// let  mode = "dark";
// let color;
//  if (mode === "dark"){
//     color = "black";

//  } else {
//     color = "white";
//  }
//  console.log(color);


//else if statements 

// let age = prompt("enter your age");
// if (age === 18){
//     console.log("you are teen ager");
// }
// else if (age>18){
//     console.log("You are senoir");
// }
// else {
//     console.log("You are kidoo");
// }


// Ternary operator 

// condition ? true output : false output;


// let age = 17;
//  age === 17? console.log("Adult"): console.log("Kidoo");

// --------- FUNCTIONS ------------//
// syntax : function functionName(){
//   // do dome work 

// } functionName();


function fun(){
    console.log("Today collage is holiday on account of sunday");
}
fun();


function sum (x,y){                   // parameters input
    console.log(x+y);
}
sum (200,300);                        // arguments


function importent(msg){
    console.log(msg);
}
importent("I am going to get myself back with strong mindset");