/**
 * var are partialy hoisted, it will return undefined 
 * const & let do not get hoisted they will return an error
 * fucntions are fully hoisted
 */


console.log(sing());

console.log(teddy)

const teddy = 'bear'

function sing(){
    console.log('oh la la la la');
}