const greet  = (name) =>  {

    console.log(`Hello ${name}`);
}

const greetReda = (greetfun) =>{

    const name = 'Reda';

    greetfun(name);
}



greetReda(greet);