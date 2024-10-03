const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]
let contador = 0
// Desafio 1: Todos os alunos são bolsista?
alunosBolsistas = alunos.map(e => e.bolsista).reduce((resultado, bolsista) => resultado && bolsista)
console.log(alunosBolsistas)

// Desafio 2: Algum aluno é bolsista?
algumAlunoBolsista = alunos.map(e => e.bolsista).reduce((resultado, bolsista) => resultado || bolsista)
console.log(algumAlunoBolsista)