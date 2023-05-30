function tabuada() {
    let num = document.getElementById('txtn')
    var tab = document.getElementById('tab')

    if (num.value.length == 0) {
        window.alert('ERRO, digite um numero')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''

        for( c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}