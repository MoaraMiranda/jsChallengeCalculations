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