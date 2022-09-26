let student = prompt("Qual o nome do aluno?")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")

let avg = (Number(n1) + Number(n2)) / 2

avg = avg.toFixed(2)

if (avg >= 7){
  alert("A sua média é: " + avg)
  alert("Parabéns, " + student + "! \nVocê está aprovado(a) no concurso!")
} else {
  alert("A sua média é: " + avg)
  alert("Você está reprovado, " + student + "! \nContinue estudando que a sua vez chegará!")
}
