const posts = [
    
       {title:'Post one',body:'this is post one'},
       {title:'Post two',body:"this is post two"}
   ];
   
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
   
   const createPost = (post) =>
   {
      return new Promise((resolve, reject)=>{
       setTimeout(()=>{
              posts.push(post);
               const error  = false;
               if(!error){
                  resolve();
               }
               else{
                 reject('error:something went wrong')
               }
          },2000)
      })
   }
   
   
   createPost({title:'Post three', body:'This is post three'})
   .then(getPosts)
   .catch(error=>alert(error))