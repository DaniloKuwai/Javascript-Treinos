//pegando todos os valores dos ids e deixando para usar globalmente
let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []//vai ser o array que vai receber os valores

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}


function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))//adicionar elemento no vetor com o push
        let item = document.createElement('option')//cria a tag option
        item.text = `Valor ${num.value} adicionado`//vai colocar no select as informações
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    num.value = ''//limpa o campo dos números atribuindo um valor vazio
    num.focus()//volta o foco para o campo paara digitar o número
}



function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores')
    }else{
        let tot = valores.length//conta quantos elementos tem no vetor
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }else if( valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma /tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}