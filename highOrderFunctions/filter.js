let people = [
    {
        name:'Reda Hammada',
        age:22,
    },
    {
        name:'Reda',
        age:16,

    },

    {
        name:'Hammada',
        age:20,
    }
]


const peopleAbove18 =  people.filter(person=> person.age >=18); 


console.log(peopleAbove18);
