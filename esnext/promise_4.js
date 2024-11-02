function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min,max]
    return new Promise(resolve => {
        setTimeout(() => {
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            console.log('Número gerado...')
            resolve(aleatorio)
        }, tempo);
        
    })
}

const gerarVariosNumeros = () => {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ])
}
console.time('promise')
console.time('sneakers')
gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(() => {
        console.timeEnd('promise')
    })