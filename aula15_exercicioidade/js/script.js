function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Digite a idade correta')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
            if(fsex[0].checked){
                genero = 'Homem'
                if(idade >=0 && idade <10){
                    img.setAttribute('src', 'img/bebe_menino.jpg')
                }
                else if(idade > 10 && idade <18){
                    img.setAttribute('src', 'img/joven_homem.jpg')
                }else if(idade > 18 && idade < 60){
                    img.setAttribute('src', 'img/homem_adulto.jpg')
                }else{
                    img.setAttribute('src', 'img/idoso_adulto.jpg')
                }


            }else if(fsex[1].checked){
                genero = 'Mulher'
                if(idade >=0 && idade < 10){
                    img.setAttribute('src', 'img/bebe_menina.jpg')
                }else if(idade>10 && idade<18){
                    img.setAttribute('src', 'img/joven_mulher.jpg')
                }else if(idade > 18 && idade <=60){
                    img.setAttribute('src', 'img/mulher_adulta.jpg')
                }else{
                    img.setAttribute('src', 'img/idosa_adulta.jpg')
                }
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)   
        }   
}