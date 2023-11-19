const persons = [
    {id: 'ID01', name: 'Abul vai', age: 23},
    {id: 'ID02', name: 'Babul vai', age: 34},
    {id: 'ID03', name: 'Jabul vai', age: 54},
    {id: 'ID04', name: 'Habul vai', age: 31}
];

let obj = {};

persons.map((person) => {
    // const id = person.id;
    // const name = person.name;

    // obj[id] = name;
    obj[person.id] = person.name;
})

console.log(obj)