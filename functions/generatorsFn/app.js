/**
 * Javascript Generator functions
 * a generator function 
 * can pause midway and then continues from where it paused
 * it does not execute its body when invoked
 * yield keyword allows you to pause and resume a generator function
 */
function* generatorExample()
{
    console.log('Invoked 1st time')
    yield 1;
    console.log('invoked 2nd time');
    yield 2;
}

let gen = generatorExample();
let result = gen.next();
console.log(gen);
console.log(result);
result = gen.next();
console.log(result);


function* forever(){
    let index =0 
    while(true){
        yield index++;
    }


}

let f = forever();
console.log(f.next());
console.log(f.next());
console.log(f.next());

