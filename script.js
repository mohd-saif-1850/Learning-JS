/* let arr = ["I","Am", "Normally", "Known", "For", "Games"]

arr.push(".");



console.log(arr)
console.log(arr.splice(0,4));
console.log(arr) */

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Objects

/* const condition = false;
const Obj = {
    function Obj(){

    },
    name: "Saif",
    age: 17,
    bday: "26 Aug",
    condition: condition ? "Yes" : "No" ,

    subject: {
        name1: "JS"
    },

}

const Obj1 = {
    name2: "Mota",
    age2: 18,
} 

// One of the Most important the Constructor always start with Capitalized letter e.g., function Person(){}

// console.log(obj);
// console.log(obj1);
// const obj2 = Object.assign(obj,obj1) Tis is also good but i prefare to use spread operator

// const Obj2 = {...Obj,...Obj1}
// console.log(Obj2);

*/

// function obj(){
//     name = "saif"
// }

// const obj = new Obj()

    // Now this is what we call self satisfaction after solving the constructor logic ( nahi ata tha contructor banana 😭😭 )
/*
    class Obj {
    constructor(){
        console.log("This is a Constructor!");
        this.name = "Saif"
    }

}
const myObj = new Obj()
console.log(myObj.name);

*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Now from here I am starting the Functions in JS

/* function add(num1,num2){
    console.log(num1+num2);
    return num1+num2;
}

const result = add(2,3)

console.log(result);

function loggedIn(name){
   return  name ?`${name} logged in`: "Get Lost"
}

const msg = loggedIn()
console.log(msg);
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Lets make an array using HTML and JS

/* const add = document.getElementById("add")
const btn = document.getElementById("btn")
const list = document.getElementById("list")

let arr = []

btn.addEventListener('click',(e) => {
e.preventDefault()
arr.push(add.value)
add.value =""
const newArr = arr.filter(items => items.trim() !== "")
console.log(newArr);

if(arr.length > 0){
    const li = document.createElement("li")
    li.textContent = add.value
    list.appendChild(li) // Kuch toh Gadbad Hai is Code Main
}
}) */

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// THIS and Arrow Function

/* const obj = {
    name: "Saif",
    age:18,

    msg: function(name){
        console.log(this.name,this.age);
        // Or we can use This operator here
         this.name = name,
        console.log(name,this.age);
        
    }
}

obj.msg("Hello");
console.log(this); // In node enviroment this print the empty object {} but in browser console it shows all Window objects

// Syntax 1, Here we have to use return keyword for return or use the value
const arrowFunc1 = (num1,num2) => {
    return num1+num2;
}
console.log(arrowFunc1(2,8));


// Syntax 2, Here we dont have to use return keyword fo return the value
const arrowFunc2 = (num1, num2) => (num1 + num2)
console.log(arrowFunc2(1,5));
*/
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// IIFE (Immediately Invoked Function Expression )

// IIFE have one of the best syntax just use ()() thats it

// Syntax 1

/* (function iife(){
    // We call This function or IIFE as Named IIFE
    console.log(`This is the IIFE Using Normal Function.`); // We can also use "Double or Single Quotes" but now here i want to start using ``
    
})(); // Always Use ; In the End 

// Syntax 2-- We can use with or without variable
( () => {
    console.log(`This is IIFE Using Call Back Function`);
    
})() 
*/

// IF-ELSE Statements

/* let num1 = 10; // Here i use hard-coded values because I know all about the statements and also 'prompt()' not working in node environment.
let num2 = 20;
if(num2>num1){
    // console.log(`${num2} is greater than ${num1}.`);
}
else{
    // console.log(`${num1} is greater than ${num2}.`);
}

// Now I Am Using HTML for taking Values

const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const cal = document.getElementById("add")

let value = 0;
cal.addEventListener('click', () => {
    value = Number(num1.value) + Number(num2.value)
    console.log(value);
})

*/

// FOR, WHILE, DO-WHILE LOOP

// I really prefare to use For loop so i only talk about for loop and dont care about while and do-while loop

// Syntax
/* for(let i=0;i<5;i++){
    console.log(i);
} // I know almost everything about loop even i completed so much projects which includes loop so i dont want to rewrite everything again and again
*/

// For-Of Loop

/* const arr = ["I","Am","The","One"]
for(const element of arr){
    console.log(element);
}
*/

// Map ( A new and Intresting Keyword or Method to create objects or arrays )

/* const obj = new Map();

obj.set('Name', 'Saif')
obj.set('Age', 18)
obj.set('Langauge', 'JS')

for(const [key,value] of obj){//If we use only key in place of [key,value] we get 👇
    // console.log(key); // It prints the whole array or you can call it an object also
    console.log(`${key} :- ${value}`);
} */

// Can we directly use For-OF loop in objects let's try


/* const obj = {
    name : 'Saif',
    age : 18,
    language: 'JS'
}
console.log(typeof(obj));

for(const element of obj){
    console.log(element); // So it can't be Iterate using For-Of Loop
    
}
*/

// For-In Loop
// This loop is not works in Map()
/* const obj = {
    js : "JavaScript",
    py : "Python",
}

for(const key in obj){
    console.log(`${key} :- ${obj[key]}`);
    
}

const arr = ['Trying','Something']

for(const element in arr){
    console.log(`Elements at Index ${element} is ${arr[element]}.`);
}*/

// For-Each Loop

/* const arr = ['python', 'js','cpp','c','react']

arr.forEach(element => {
    // console.log(element); 
})

const objArr = [
    {
        name : 'Saif',
        age : 18,
    },
    {
        language : 'JS',
        full_name : 'JavaScript',
    },
    {
        environment : 'nodeJs',
    }
]

objArr.forEach(element => {
    console.log(element.name,element.age,element.environment);
    
})
*/

// Filter

const nums = [2,4,5,3,9]
// Simple Work of Filter
nums.filter((element,index,arr) => {
    if(element>4){
        console.log(`${element} at ${index} in Array ${arr}.`);
    }
})


const movies = [
  { title: "Inception", year: 2010, rating: 8.8 },
  { title: "Interstellar", year: 2014, rating: 8.6 },
  { title: "The Dark Knight", year: 2008, rating: 9.0 },
  { title: "Tenet", year: 2020, rating: 7.4 },
  { title: "Dunkirk", year: 2017, rating: 7.9 },
  { title: "The Prestige", year: 2006, rating: 8.5 }
];