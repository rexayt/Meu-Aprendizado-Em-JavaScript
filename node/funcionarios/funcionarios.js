const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    let mulheresChinesas = funcionarios.filter(e => e.genero == 'F' && e.pais == 'China')

    let chinesa = (array) => {
        let maisPobre = array[0]
        for (mulher in array){
            maisPobre = array[mulher].salario < maisPobre.salario ? array[mulher]: maisPobre
        }
        return maisPobre
    }
    console.log(chinesa(mulheresChinesas))
    })