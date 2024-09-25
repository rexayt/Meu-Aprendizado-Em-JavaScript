function tratarErroELancar(erro){
    throw new Error("...")
}

function imprimirNomeGritado(obj) {
    try {
      console.log(obj.nome.toUpperCase() + "!!!")  
    }catch (erro) {
        tratarErroELancar(erro)
    } finally {
        console.log('Final')
    }
    
}
const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)