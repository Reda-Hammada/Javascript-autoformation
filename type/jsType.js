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


var array1= [1,2,3];
var array2 = {
    0:'1',
    1:'2',
    2:'3'
}


console.log(Array.isArray(array1))
console.log(Array.isArray(array2))

// type Coercion 
1 == '1';
console.log(1=='1');
