// pass by reference
let obj1 = {
    name:'Reda',
    password:123,
} 

let obj2 = obj1
obj2.password ='easypeasylemonsquizy'

console.log(obj1);
console.log(obj2);




// pass by value
// primite types are passed by values 
let a = 5;
let b = a;
b++
console.log(a);
console.log(b); 

