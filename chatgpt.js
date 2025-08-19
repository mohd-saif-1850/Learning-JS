/* const arr = [2,4,3,5,6,7,10]

const newArr = arr.filter((elements) => {
    return elements % 2 == 0
})

console.log(newArr);
*/

/* const arr = ['apple','banana']

for(const element in arr){
    console.log(arr[element].toUpperCase());
    
}*/

/* const arr = [2,3,4,5,0,2,372]

const intial = 0

const newArr = arr.reduce((num1,num2) => {
    // Or if we want to display the steps then 
    console.log(`${num1} + ${num2}`);
    
    return num1 + num2 ;
},intial)
console.log(newArr);
*/

/* const arr = [2,40,55,67,56,34,49]

const newArr = arr.filter((element) => {
    return element > 50
})
console.log(newArr);
*/

/* const arr = [
    {
        name : 'Saif',
        age : 18
    },
    {
        name : 'Muzammil',
        age : 17
    },
    {
        name : 'Asad',
        age : 20
    },
]
// Seriously i think i done two or three filter question 
const newArr = arr.filter((element) => {
    return element.age > 18
})
console.log(newArr);
*/

/* const arr = [2,3,4,5,2,3,4,9]

const newArr = arr.filter((element,index) => {
 return arr.indexOf(element) === index;
})

console.log(newArr);
*/

const arr = [2,3,4,2929,99,44,33]
let largest = arr[0]
for(let i=0; i < arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i]
    }
}
console.log(largest);
