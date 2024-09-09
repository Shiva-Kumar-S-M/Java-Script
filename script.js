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


// function fun(){
//     console.log("Today collage is holiday on account of sunday");
// }
// fun();


// function sum (x,y){                   // parameters input
//     console.log(x+y);
// }
// sum (200,300);                        // arguments


// function importent(msg){
//     console.log(msg);
//     importent("I am going to get myself back with strong mindset");}



// function sum (x,y){
//     s = x+y;
//     return s;
// }

// let val = sum(250,3500);
// console.log(val);

// // function parameter are like local variable of function -- block scope

// -------- arrow function --------//

// const arrowSum = (a,b)=>{
//     console.log(a+b);
// };
// arrowSum(20,50); 



// const arrowMulti = (a,b)=> {
//     console.log(a*b);
// };

// arrowMulti(55,55);

// const square = (a,b)=>{
//     console.log(a**b);

// };
// square(9,2);

// -----for Each loops --------//

// let abc =[1,2,3,4,5];
// abc.forEach((val) =>{
//     console.log(val);
// });


// let arr = [4,5,6];
// arr.forEach((val)=>
// {
//     console.log(val**2);
// });

// // ----------- Mapping -------------//
// let num =[10,20,30,40,50];
// let newArray = num.map((val)=>
// {
//     return val;
// });
// console.log(newArray);


// let old = [100,200,300,400,500,600,700];
// let newsh = old.map((val)=>
// {
//     return val;
// });

// console.log(newsh);


// --------filtering --------//  new array of elements that give true for condition/filter
// let arr =[10,11,12,13,45,47,89];
// let newarray = arr.filter((val)=>{
//     return val %2 === 0;
// });
// console.log(newarray);



// let number = [124,568,41,4563,153,524,124,515];
// let even = number.filter((val)=>{
//     return val %2 === 0;
// });
// console.log(even);

// let n = prompt("Enter number of array");
// let arr =[];
// for (let i =0;i<n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);

// let sum = arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(sum);


// let n = prompt("Enter number of Array elements");
// let arr =[];
// for(i=0;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);  
// let prod = arr.reduce((res,curr)=>{
//     return res*curr;
// });
// console.log(prod);


// let a = prompt("Enter a number of array elemnts");
// let arr=[];
// for (i=1;i<=a;i++){
//     arr[i]=i;
// };
// console.log(arr);
//  let sum= arr.reduce((res,curr)=>{
//     return res+curr;
//  });
//  console.log(sum);
//  let product = arr.reduce((res,curr)=>{
//     return res*curr;
//  });
//  console.log(product);


// DOM OBJECT 
// let heading = document.getElementById("heading");
// console.log(heading);


// let elements = document.querySelectorAll(".dom");
// console.dir(elements);

// alert("how are you")
// console.dir(document.body.childNodes[1]);
// console.log(document.body);

// document.body.style.background="Yellow";

//-----------DOM manipulation------------//
//selecting with id
// let heading = document.getElementById("heading");
// console.log(heading);
// console.dir(heading);

// selecting with class
// let same = document.getElementsByClassName("dom");
// console.log(same);
// console.dir(same);
 
// selecting with tag
// let para =document.getElementsByTagName("p");
// console.log(para);
// console.dir(para)


//query selector 

// let firstel = document.querySelector(".dom");  //first element
// console.dir(firstel);


// let allel = document.querySelectorAll(".dom");
// console.dir(allel);

// // properties 
// 1) tagName = return tag for element NodeList
// 2) innerText = return text content of elements and all its children
// 3) innerHtml = returns the plain text or html contents in the element
// 4)




// document.querySelector("div").children 