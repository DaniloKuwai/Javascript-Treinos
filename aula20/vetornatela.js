let valores = [8,1,7,4,2,9]


/*Forma padrão de percorrer o array
for(let pos=0;pos<valores.length;pos++){
    console.log(valores[pos])
}
*/

/*Forma mais atual*/

for(let pos in valores){
    console.log(valores[pos])
}