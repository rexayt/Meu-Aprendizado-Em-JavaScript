Array.prototype.filter2 = function(callback) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const produto = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

// console.log(produtos.filter( p => p.fragil == true && p.preco >= 500 ? p: false))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produto.filter2(caro).filter2(fragil))