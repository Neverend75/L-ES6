let personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

//FILTER
let personnelasli = personnel.filter(p => p.isForceUser == true)
console.log(personnelasli)
//FILTER


//MAP
let personelpilot = personnelasli.map((x) => x.pilotingScore)
console.log(personelpilot);

let personelscore = personnelasli.map((v) => v.shootingScore)
console.log(personelscore);
//MAP

//REDUCE
let hasil = personelpilot.reduce(function(accumulator, personelpilot) {
    return accumulator + personelpilot
})
console.log(hasil);

document.write('<br>')
let hasil2 = personelscore.reduce(function(accumulator, personelscore){
    return accumulator + personelscore
})

console.log(hasil2);