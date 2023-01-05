// call stack + Memory Heap

// memory heap
const number = 610; // allocate memory for number
const string = 'some text'  // allocate memory for a string
const human = { // allocate memoryu for an object and its values .
    first:'Reda',
    last:'Hammada'
}

// call stack 

function subtractTwo(num)
{
  return num - 2
}

function calculate()
{
    const sumTotal = 4 + 5; 
    return subtractTwo(sumTotal)
}

calculate();

// Memory leak 

// global variables 
var a = 1;
var b =1;
var c =1;

// event listeners 

var element = document.getElementById('button')
element.addEventListener('click', onClick)

// setInterval 

setInterval(()=>{
    
})

