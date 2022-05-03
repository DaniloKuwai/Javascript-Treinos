function calcular(){
    let num = Number(document.getElementById('txtnum').value)
    let tab = document.getElementById('tabuada')
    if(num <= 0){
        alert('Digite um número')
    }else{
        let n = num
        let c = 1
        while(c <= 10){
            let item = document.createElement('option')//cria o elemento option dentro do select
            item.text += `${num} x ${c} = ${num*c}`
            tab.appendChild(item)//vai criar o option como elemento filho do select
            c++
        }
    }
}