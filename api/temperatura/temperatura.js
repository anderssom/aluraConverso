async function converte(){

    //pega o valor da tela
    const valor = Number( document.getElementById('valor').value)
    const moeda1 = document.getElementById('moeda1').value
    const moeda2 = document.getElementById('moeda2').value
    const valorConvertido = document.getElementById('valorConvertido')
    


    if(moeda1 == "tempertura" && moeda2 == "farenheit"){

            //Calula 
        var conversao = (parseFloat(valor) - 32 ) / 1.8;

        //mostra na tela 
    valorConvertido.innerHTML =
      valor.toLocaleString("pt-BR",{style: "currency",
      currency: "BRL" }) + " = US$ " +
      conversao.toFixed(2);
    }else if(moeda1 == "real" && moeda2 == "euro"){
    }
}