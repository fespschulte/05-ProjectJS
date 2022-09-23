let student = prompt("Qual o nome do aluno?")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3 = prompt("Qual a nota da terceira prova?")

let avg = (Number(n1) + Number(n2) + Number(n3)) / 3

avg = avg.toFixed(2)

if (avg >= 6){
  alert("Parabéns, " + student + "! Você está aprovado!")
  alert("A sua média é: " + avg)
} else {
  alert("Você está reprovado, " + student + "! Mas, nem tudo está perdido, estude bastante para o exame que você aprovará!")
  alert("A sua média é: " + avg)
}
