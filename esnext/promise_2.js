
//setTimeout(() => {
//    console.log('Executando callback...')
    
//    setTimeout(() => {
//        console.log('Executando callback...')
//
//        setTimeout(() => {
//            console.log('Executando callback...')
//        }, 2000)
//    }, 2000)// dois segundos
//}, 2000)

const esperarPor = (tempo = 2000) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando callback...')
            resolve('Vishhh')
        }, tempo)
    })
}

esperarPor(3000).then(() => esperarPor()).then(esperarPor)