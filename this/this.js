// this is the object that the function is a property of 
// this refers to the object that the function is a property 

const person = {
    name:'Reda',
    sayMyName(){

        console.log(`this is ${this.name}`)
    },

}


this.sayMyName();