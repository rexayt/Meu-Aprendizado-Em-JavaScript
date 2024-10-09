/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
retornará o valor da aplicação sob o regime de juros compostos.  */

let juroSimples = (capitalInicial, taxaDeJuros, tempoDeAplicação) => {
    this.juros = (capitalInicial * taxaDeJuros) * tempoDeAplicação
    this.total = this.juros + capitalInicial

    return this.total
}

let juroComposto = (capitalInicial, taxaDeJuros, tempoDeAplicação) => {
    this.juros = (capitalInicial * ((1+taxaDeJuros)**tempoDeAplicação)) - capitalInicial
    this.total = this.juros + capitalInicial

    return this.total
}

console.log(juroSimples(600, 0.12, 5))
console.log(juroComposto(1400, 0.07, 2))
