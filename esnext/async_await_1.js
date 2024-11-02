const esperarPor = (tempo = 2000) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), tempo)
    })
}

//esperarPor(2000)
//    .then(esperarPor)
//    .then(esperarPor)

let retornaValor = () => {
    return new Promise(resolve => setTimeout(() => resolve(10), 5000))
}

let retornaValorRapido = async () => {
    return 20
}

let executar = async () => {
    let valor = await retornaValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

const executarDeVerdade = async () => {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()
