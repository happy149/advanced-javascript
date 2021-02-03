 /* jokhon map hoba

const students = [
    { id:21, name:'omar Sunny'},
    { id:31, name:'manaaa'},
    { id: 41, name: 'moyouri'},
    { id: 71, name: 'Deepjol'}
];

// const names = students.map(s => s.name);
// console.log(names);
const ids = students.map(s => s.id);
console.log(ids); */

//jokhon filter hoba

/* const students = [
    { id:21, name:'omar Sunny'},
    { id:31, name:'manaaa'},
    { id: 41, name:'moyouri'},
    { id: 71, name:'Deepjol'}
];
const bigger = students . filter (s=>s.id>40);
console.log(bigger); */
// jokhon find korbo, mana priority onuji potom jonk nibo
const students = [
    { id:21, name:'omar Sunny'},
    { id:31, name:'manaaa'},
    { id: 41, name:'moyouri'},
    { id: 71, name:'Deepjol'}
];
const biggerOne = students . find (s=>s.id>40);
console.log(biggerOne);