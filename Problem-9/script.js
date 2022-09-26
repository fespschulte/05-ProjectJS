/* 
  Com a lista de pacientes criada, descubra o IMC de cada um e imprima em tela
    "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC dele

  Crie uma função para o cálculo de IMC
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

// let patientsNames = []
// let patientsAges = []
// let patientsWeights = []
// let patientsHeights = []

// for(let patient of patients) {
//     patientsNames.push(patient.name)
//     patientsAges.push(patient.age)
//     patientsWeights.push(patient.weight)
//     patientsHeights.push(patient.height)
// }

function IMC(weight, height) {
    return (weight / ((height/100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
    return `
        Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)} kg/m²
    `
}

for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
}