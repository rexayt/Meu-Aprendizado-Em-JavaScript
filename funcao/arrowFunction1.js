let dobro = function (a) {
    if (arguments.length == 0){
        console.log('Nutem')
    }else{
        console.log('Tem :D')
    }
    return 2 * a
}
dobro(1)

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parâmetro