// function expression 
var canada = function(){
    console.log('the weather is cold in Canada')
}

var Asia = () =>{

     console.log('the Asian cuisine is so delicious')
}
// function declaration 
function Morocco(){
    console.log('the weather is nice in Morocco');

}

// arguments
function marry(...args){
    console.log(arguments);
    console.log(Array.from(arguments));
    return `${args[0]} is now married to person ${args[1]}`
}

// function Invocation/Call/Execution 
Morocco();
Asia();
canada();
marry('Tim','Tina');
