function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) { //primeira validação
        window.alert ('ERRO')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada ${idade}`
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bbmacho.jpg')
            } else if (idade <=21 ) {
                //jovem
                img.setAttribute('src', 'imagens/jovemM.jpg')
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultoM.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosoM.jpg')
            }
                
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bbfemea.jpg')
            } else if (idade <=21 ) {
                //jovem
                img.setAttribute('src', 'imagens/jovemF.jpg')
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adultoF.jpg')
            } else if ( idade > 50) {
                //idoso
                img.setAttribute('src', 'imagens/idosoF.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}