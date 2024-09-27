const NOTAS = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i in NOTAS){
    console.log(`Nota: ${NOTAS[i]}`)
}

const PESSOA = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64,
}

for(let atributo in PESSOA) {
    console.log(`${atributo} = ${PESSOA[atributo]}`)
}