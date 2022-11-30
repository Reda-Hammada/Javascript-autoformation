// example 1
const greet  = (name) =>  {

    console.log(`Hello ${name}`);
}

const greetReda = (greetfun) =>{

    const name = 'Reda';

    greetfun(name);
}

greetReda(greet);

//example 2
const posts = [

    {title:'Post one',body:'this is post one'},
    {title:'Post two',body:"this is post two"}
]

const getPosts = () =>
{
    setTimeout(()=>{
        let output  = '';
        posts.forEach((post, index)=>{
            output+=`<h1>${post.title}</h1>`       
        })

        document.body.innerHTML =  output;

    },1000)
}

const createPost = (post, callBack) =>
{
    setTimeout(()=>{
        posts.push(post);
        callBack();
    },2000)
}

getPosts();

createPost({title:'Post three', body:'This is post three'},getPosts); 