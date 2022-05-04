let num = [5,8,2,9,3]

//console.log(`Nosso vetor é o ${num}`)

num.sort()//vai ordenar os elementos em forma crescente
num.push(10)//adiciona o elemento na última posição do array no caso o número 10
console.log(num)
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)//resultado 5

/*Procurando valor no array*/ 
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)