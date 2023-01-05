// inline caching 
function findUser(user){
    return `found ${user.firstName} ${user.lastName}`
}

const userData = {
    firstName:'Reda',
    lastName:'Hammada'
}

findUser(userData)

// hidden classes
function Animal(x,y){

    this.x=x;
    this.y=y;
}

// in this case the compiler will just go to the class and look for this keyword and assign the value
const obj1 = new Animal(1,2);
const obj2 = new Animal(3,4);

// this is a best practice will deoptimize the compiler better to do the assignment int he hidden class in the constructor because it is not in the same order which will confuse the compiler no shared hidden class os better to assign the value in constructor with this keyword
obj1.a = 30
obj1.b = 100
obj2.b = 200
obj2.a = 300

