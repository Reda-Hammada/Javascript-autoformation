function printMyName() {
  console.log( "Reda Hammada");
}

function findName() {
  return printMyName();
}

function sayMyName() {
  return findName();
}


// create an execution context 
window.sayMyName();

/**
 * when javascript code run it creates a global execution context and when a function is run it starts an execution context
 * prinMyName()
 * findName()
 * sayMyname()
 * global()
 */

// global object and this keyword
var a = 'Reda';
console.log(window)

/*lexical environment and analysis 
  is where you write something,
  simply where the words are written
  and their location 
*/

