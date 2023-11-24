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

const student = {
    name: 'Sayem Bhuiyan',
    id: 465508,
    depertment: 'Computer'
}
function studentDetails(obj){
    console.log(`
    Student name is ${obj?.name}.
    His student id is ${obj?.id}. 
    His depertment is ${obj?.depertment}`)
}

studentDetails(student);