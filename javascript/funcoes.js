function menubar() {
    if (navbar.style.display == 'block')
        navbar.style.display = 'none'
    else {
        navbar.style.display = 'block'
    }
}

function enviar() {
    let quant = document.getElementById('quant')
    if (quant.value > 10) {
        window.alert('Erro! Quantidade de óculos limitado a 10 unidades.')
    }
}