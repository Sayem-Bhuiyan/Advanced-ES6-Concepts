const polapain = [
    {name: 'Abul', job: 'govt', sallay: 17000},
    {name: 'Babul', job: 'private', sallay: 41000},
    {name: 'Kabul', job: 'govt', sallay: 20000},
    {name: 'Sabul', job: 'private', sallay: 25000},
    {name: 'Mabul', job: 'private', sallay: 35000},
    {name: 'Fabul', job: 'govt', sallay: 19000},
    {name: 'Tabul', job: 'govt', sallay: 23000}
];

const selected = polapain.filter((pola) => (pola.job === 'govt' && pola.sallay >= 20000) || (pola.job === 'private' && pola.sallay >= 40000))
// console.log(selected);

const selectedNumber = Math.floor(Math.random()*selected.length);
const finalJamai = selected[selectedNumber].name
console.log(`${finalJamai} Tumi Jamai hisebe select hoiso`);
