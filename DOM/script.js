// let fruits = document.querySelector("div");   
// console.dir(fruits);        // fruits.innerText 
//                             // fruits.innerHTML
// let heading = document.querySelector("h1");  //heading.innerText  //heading.textConetent



// let heading = document.querySelector("h3");
// console.dir(heading.innerText);
// heading.innerText = heading.innerText + " from apna collage students";    // concatinantion
 let box = document.querySelectorAll(".box");
 let idx =1;
for (div of box){
    div.innerText = `new unique value ${idx}`;
    idx++;
}
//  console.log(div);
//  div[0].innerText = "New Value 1";
//  div[1].innerText = "new value 2";
//  div[2].innerText = "new value 3";