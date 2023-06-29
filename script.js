let number1 = prompt((`Digite o primeiro número`))
let number2 = prompt(`Digite o segundo número`)

let soma = (Number(number1) + Number(number2))
let sub = (Number(number1) - Number(number2))
let multi = (Number(number1) * Number(number2))
let div = (Number(number1) / Number(number2)).toFixed(2)
let rest = (Number(number1) % Number(number2))
let imparPar = (Number(number1) + Number(number2)) % 2

alert(`A soma desses dois números é: ${soma}`)
alert(`A subtração desses dois números é: ${sub}`)
alert(`A multiplicação desses dois números é: ${multi}`)
alert(`A divisão desses dois números é: ${div}`)
alert(`A rest da divisão desses dois números é: ${rest}`)

console.log(imparPar)

if(imparPar == 0){
  alert(`A soma dos dois números é par: ${soma}`)
}else{
  alert(`A soma dos dois números é impar: ${soma}`)
}

if(number1 == number2){
  alert(`Os números inseridos são iguais`)
}else{
  alert(`Os números inseridos são diferentes`)
}

/* Resolução possível=>

let firstNumber = prompt("Digite o primeiro número:")
let secondNumber = prompt("Digite o segundo número:")

let checkEquals = firstNumber === secondNumber ? 'são iguais' : 'são diferentes'

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = (firstNumber + secondNumber)

let parOuImpar = sum % 2 == 0 ? 'par' : 'ímpar'

const sub = (firstNumber - secondNumber)
const mult = (firstNumber * secondNumber)
const div = (firstNumber / secondNumber)
const restoDiv = (firstNumber % secondNumber)


alert(`Os dois números inseridos ${checkEquals}`)
alert(`A soma dos dois números é ${sum}`)
alert(`A soma dos dois números é ${parOuImpar}`)
alert(`A subtração dos dois números é ${sub}`)
alert(`A multiplicação dos dois números é ${mult}`)
alert(`A divisão dos dois números é ${div}`)
alert(`O resto da divisão dos dois números é ${restoDiv}`)
*/