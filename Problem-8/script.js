/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes e seus respectivos dados
*/

const patients = [
    {
        name: "Luiz",
        age: 20,
        weight: 100,
        height: 190,
    },
    {
        name: "Alexandra",
        age: 27,
        weight: 60,
        height: 170,
    },
    {
        name: "Carlos",
        age: 42,
        weight: 80,
        height: 175,
    },
]

let patientsNames = []
let patientsAges = []
let patientsWeights = []
let patientsHeights = []

for(let patient of patients) {
    patientsNames.push(patient.name)
    patientsAges.push(patient.age)
    patientsWeights.push(patient.weight)
    patientsHeights.push(patient.height)
}

alert(`${patientsNames[0]} tem ${patientsAges[0]} anos de idade, pesa ${patientsWeights[0]}kg e tem ${patientsHeights[0]}cm de altura`)
alert(`${patientsNames[1]} tem ${patientsAges[1]} anos de idade, pesa ${patientsWeights[1]}kg e tem ${patientsHeights[1]}cm de altura`)
alert(`${patientsNames[2]} tem ${patientsAges[2]} anos de idade, pesa ${patientsWeights[2]}kg e tem ${patientsHeights[2]}cm de altura`)