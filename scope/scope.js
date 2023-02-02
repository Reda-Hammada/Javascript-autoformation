// global scope accessible anywhere 
var name = 'reda';

// function scope accessible only inside the function or scope chain function 
function sayName(){
    var name = 'reda';

}


// bloc scope accessible only inside the bloc of code 
if(4>3){
    var result = '1234';
}