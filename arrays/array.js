// arrays 

// let Names = ["Shivu","Sharaan","Rakesh"];
// console.log(Names);

// array indices Names[2]= "rakesh".
// string is immutable , arrays are mutable

// looping over array
// let Names = ["Shivu","Sharaan","Rakesh"];

// for (let i= 0; i <Names.length ; i++){
//     console.log(Names[i]);

// } // = not be used 

// let city = ["byadgi" , "Haveri","goa","Bihar"];
// for (let place of city ){
//     console.log(city.toUpperCase());
// }. 

// //practise 
// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for (let val of marks) {
//     sum += val;
// }
// Avg = sum / marks.length;
// console.log(`Average marks of class =  ${Avg} `);


// project 2
// let items = [250,645,300,900,50];
// i = 0;
// for (let val of items ){
// ;
//     offer = val /10 ;
//     items[i] = items[i]-offer ;
//     console.log(`price after offer= ${items[i]}`);
// }

// let items = [100,200,300,400,500];
// for (let i = 0 ; i < items.length ; i++
// )   {
//    let offer = items[i]/10;
//     items[i]-= offer;
// }  
// console.log(items);

// array methods 1.Push()  : to add at end
//pop : delete from last

// let names = ["Shivu ", "sharan", "sagar"];
// names.push("Itachi","sukuna","madara");
// console.log(names);
// names.pop();
// console.log(names);
// let names = ["iron man","Hulk","spiderman"];
// console.log(names);
// console.log(names.toString());


// let animes = ["itachi","madara","sakaura"];
// let dcHeros = ["batman ","Superman"];
//  let heros = animes.concat(dcHeros);
// console.log(heros);

// // unshift add elemets at start
// let books = ["atomic", "think","Rich"];
//  books.unshift();
// console.log(books);
// // shift : delete from starts and return

// let names = ["iron man","Hulk","spiderman","Itachi","Naruto"];
// console.log(names);
// console.log(names.slice(1,4));


// // SPLICE MATHOD;
// let heros = ["iron man","Hulk","spiderman","Sasuke","Giyu"];
// console.log(heros.splice(,1,"Blackwidow"));


// let mark = [100,200,300,150,205,600];
// mark.splice(2,2,300,500);
// mark.splice(3,0,1000);
let companies = ["bloomberg","Microsoft","uber","google","ibm","netflix"]
console.log(companies.shift());
console.log(companies.splice(2,1,"ola"));