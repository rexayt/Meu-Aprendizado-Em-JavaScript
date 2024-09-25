// var atribui um valor de uma variável (quase igual Python), evitar var.
var a = 3

//let é quase a mesma coisa que var (Professor disse, para criar variáveis usando "let"), porém let é mais moderno.
let b = 2

//Você consegue redeclarar a variável com var, mas não com let
var a = 30
b = 40
console.log(a, b)

a = 300
b = 400

console.log(a, b)

//const constante, não tem como mudar o valor
const c = 5
//isso vai dar erro, já que a const é uma constante
//c = 50
console.log(c)