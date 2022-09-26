let firstNumber = prompt("Digite o número 1:")
let secondNumber = prompt("Digite o número 2:")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

if (firstNumber == secondNumber) {
  alert("Os números são iguais")
}

const sum = firstNumber + secondNumber
let sub = firstNumber - secondNumber
let mult = firstNumber * secondNumber
let div = firstNumber / secondNumber
let restDiv = firstNumber % secondNumber


alert("A soma dos dois número é: " + sum)
alert("A subtração dos dois número é: " + sub)
alert("A multiplicação dos dois número é: " + mult)
alert("A divisão dos dois número é: " + div)
alert("O resto da divisão dos dois número é: " + restDiv)

let par = sum % 2

if (par == 0) {
  alert("A soma é par")
} else {
  alert("A soma é ímpar")
}
