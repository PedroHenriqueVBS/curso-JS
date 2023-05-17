var sec = new Date()
var minutes = new Date()
var agora = new Date()
var hora = agora.getHours()
var minuto = minutes.getMinutes()
var segundos = sec.getSeconds()
console.log(`Agora são exatamente ${hora} horas, ${minuto} minutos e ${segundos} segundos.`)
if (hora < 12) {
    console.log('bom dia')
} else if ( hora <=18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}