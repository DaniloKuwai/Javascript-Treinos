//essa função new Date serve para pegar a data e hora do dia atual
var agora = new Date()
//o getHours, pega a hora do dia atual
var hora = agora.getHours()

if(hora < 12){
    console.log('Bom dia')
}else if(hora > 12 && hora <= 18){
    console.log('Boa Tarde')
}else if(hora > 18){
    console.log('Boa Noite')
}