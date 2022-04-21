var idade = 67

if(idade < 16){
    console.log('Não vota')
}else{
    if(idade >=16 || idade < 18 || idade >=67){
        console.log('voto opcional')
    }else{
        console.log('Voto obrigatório')
    }
}