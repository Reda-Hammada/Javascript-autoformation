//Primitive a data that only represents a single value
console.log(typeof 5)
console.log(typeof true)
console.log(typeof 'to be or not to be')
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof Symbol('just me'))

//Non-primitive they do not contain the active value directly 
console.log(typeof {})
console.log(typeof [])
console.log(typeof function(){})

// array and function are object in javascript 

function a(){
    return 5;
}
a.hi = 'hello';
console.log(a.hi);


