// this is the object that the function is a property of
// this refers to the object that the function is a property
const person = {
  name: "Reda",
  sayMyName() {
    console.log(`this is ${this.name}`);
  },
};

// global object

/*this will not work because the function is not registered in the global object
 because this outside of the method or the function refers to the global window */

// this.sayMyName();

/* arrow function  are lexically bound without the arrow function
   the anotherFunc would call for the window object 
   instead of the obj object
*/
const obj = {
  name: "Billy",
  sing() {
    console.log("a", this);
    const anotherFunc1 = () => {
      console.log("b", this);
    };
    anotherFunc1();
 }
};
obj.sing();
