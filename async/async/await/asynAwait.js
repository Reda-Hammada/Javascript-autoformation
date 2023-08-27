// async function 
async function greet (){

    return 'Hello';
}
console.log(greet());

 
  async function greetInGerman(){
     
    let promise  = new Promise((resolve, reject)=>{
        
            setTimeout(()=> resolve('Hallo, wie geht es dir'),2000);

    }) 

    let result = await promise;
    console.log(result);


}

greetInGerman();