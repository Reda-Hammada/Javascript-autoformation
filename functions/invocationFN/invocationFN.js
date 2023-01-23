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
function marry(person1,person2){
    console.log(arguments);
    return `${person1} is now married to pareson ${person2}`
}

// function Invocation/Call/Execution 
Morocco();
Asia();
canada();
marry('Tim','Tina');
