//  scope is function based
// context is object based 

function a(){
    console.log('hi')
}
// call invoke a function so a(); is a shorthand for a.call()
a.call();


const wizard = {
    name:'Merlin',
    health: 50,
    heal(){
        return this.health = 100;
    }
}

const archer = {
    name:'Robin Hood',
    health: 30,

}

console.log('1',archer.health);
wizard.heal.call(archer);
console.log('2',archer.health)

/**
 * for apply it is the same thing the only difference between 
   it and call is apply take an array when it comes to multiple parameters
 */

// function currying 

function multiply(a,b){
    return a * b;
}

let multiplyByTwo =  multiply.bind(this,2);

console.log(multiplyByTwo(4));
    