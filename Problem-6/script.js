const result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10")

const randomNumber = Math.round(Math.random() * 10)

const match = Number(result) == randomNumber

console.log(result, randomNumber, match)

while (!match) {
  console.log("Erro, tente novamente:")
}