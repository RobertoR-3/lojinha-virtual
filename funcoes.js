function alterarQtd(produto, acao){
    const qtd=document.getElementById('qtd_'+ produto)
    const valor=document.getElementById('valor_'+ produto)
    const total=document.getElementById('total_'+ produto)

    if(acao == '-' && qtd.innerHTML==0 ){
        alert ( 'atenção! quantidade negativa')
    }else {
        acao == '+'? qtd.innerHTML++ : qtd.innerHTML--
        total.innerHTML = qtd.innerHTML *  somentenumeros(valor.innerHTML)
        soma()
    }
}    

function soma(){
    let soma = 0
    for(let i =1; i <4; i++){
        soma = soma += Number(document.getElementById('total_' + i).innerHTML)
    }
    document.getElementById('subtotal').innerHTML = soma
}
    
function somentenumeros (n){
    return n.replace (/\D/g,'')
}






    
    

