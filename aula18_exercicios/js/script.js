function contar(){

var inicio = Number(document.getElementById('txtini').value)
var fim = Number(document.getElementById('txtfim').value)
var qtd = Number(document.getElementById('txtqtd').value)
var txt = document.getElementById('msg')

while(inicio <= fim){ 
    inicio++
    console.log('Ola')
}

/*
for(var x = inicio;x<=fim;x++){
        var control = inicio
        var resultado = control + qtd
        //txt.innerHTML = 'Olá'
        console.log(resultado)
        inicio++
    }
 */   
}