function contar(){

var inicio = Number(document.getElementById('txtini').value)
var fim = Number(document.getElementById('txtfim').value)
var qtd = Number(document.getElementById('txtqtd').value)
var txt = document.getElementById('msg')



        if(inicio <= 0 ||fim <= 0 || qtd <=0){
            txt.innerHTML = 'Dados inválidos verifique o campo fim ou o campo passo não podem estar em branco'
        }
        else if(inicio < fim){
            for(var x = inicio; x < fim ;x+=qtd){
            resultado = inicio += qtd
            txt.innerHTML += ` ${resultado} \u{1f449} `
                    }        
                    
            }else if(inicio > fim){
                for(var x = inicio; x > fim; x-=qtd){
                    resultado = inicio -= qtd 
                    txt.innerHTML += ` ${resultado} \u{1f449} `
                }
                
            }
}

/*
while(inicio < fim){ 
    console.log(inicio)
    resultado = inicio += qtd
    txt.innerHTML += ` ${resultado} ` 
}
*/
