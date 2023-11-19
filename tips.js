const person = {
    name: 'Sayem Bhuiyan',
    age: 21
}

// const {name:myName} = person;
// console.log(myName)

function show(obj) {
    console.log(`My name is ${obj.name}. My age is ${obj.age}.`);
}

show(person);