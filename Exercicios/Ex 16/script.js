function contar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if ( ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO')
    } else {
        res.innerHTML = 'Contando '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
          
        if ( i < f) {
            for ( var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449} `
        }
        
        } else {
            for ( var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }

        }
        
    } res.innerHTML += `\u{1F3C1}`
}