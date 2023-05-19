function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if ( hora >= 0 && hora < 12) {
        //Bom dia
        img.src = "imagens/Dia.jpg"
        document.body.style.background = '	#ECDB00'
    } else if ( hora >= 12 && hora < 18 ){
        //Boa tarde
        img.src = "imagens/Tarde.jpg"
        document.body.style.background = '#5D8AA8'
    } else {
        //Boa noite
        img.src = "imagens/Noite.jpg"
        document.body.style.background = '#000080'
    }
}
