// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = (e) => {
    console.log('O evento ocorreu! '+ e.target())
}