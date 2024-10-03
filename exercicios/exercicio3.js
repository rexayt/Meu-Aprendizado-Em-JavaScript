/*Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.*/
let baseExpoente = (base,expoente) => {
    return `${base} elevado a ${expoente} é ${base ** expoente}`
}

console.log(baseExpoente(2,5))