/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, 
multiplicação e divisão desses valores */
let fazTudoMatematica = (a,b) => {
    console.log(`${a} + ${b} = ${a + b}`);

    console.log(`${a} - ${b} = ${a - b}`);

    console.log(`${a} X ${b} = ${a * b}`);

    console.log(`${a} / ${b} = ${a / b}`)
}

fazTudoMatematica(1,2)