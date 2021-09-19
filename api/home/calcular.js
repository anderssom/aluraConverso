async function converte(){

    //pega o valor da tela
    const valor = Number( document.getElementById('valor').value)
    const moeda1 = document.getElementById('moeda1').value
    const moeda2 = document.getElementById('moeda2').value
    const valorConvertido = document.getElementById('valorConvertido')
    


    if(moeda1 == "real" && moeda2 == "dolar"){

            //Calula 
        var conversao = valor / 5.22;

        //mostra na tela 
    valorConvertido.innerHTML =
      valor.toLocaleString("pt-BR",{style: "currency",
      currency: "BRL" }) + " = US$ " +
      conversao.toFixed(2);
    }else if(moeda1 == "real" && moeda2 == "euro"){

        //Calula 
    var conversao = valor / 8.22;

    //mostra na tela 
valorConvertido.innerHTML =
  valor.toLocaleString("pt-BR",{style: "currency",
  currency: "BRL" }) + " = E " +
  conversao.toFixed(2);
}else if(moeda1 == "real" && moeda2 == "bitcoin"){

    //Calula 
var conversao = valor / 250.000;

//mostra na tela 
valorConvertido.innerHTML =
valor.toLocaleString("pt-BR",{style: "currency",
currency: "BRL" }) + " = BTC " +
conversao.toFixed(2);
}else if(moeda1 == "km" && moeda2 == "luz"){

    //Calula da velocidade da luz por 
var conversao = valor ==  300000000 * 31536000;

//mostra na tela 
valorConvertido.innerHTML =
valor.toLocaleString("pt-BR",{style: "currency",
currency: "BRL" }) + " = VL " +
conversao.toFixed(2);
    } else {
        alert("informe um valor")
    }
    /*if(dolar1.checked){
        const dolar = valor1 / 5.30;
        document.getElementById('valorConvertidoDolar').innerHTML = ("Valor em Dola americano: ") + dolar;

    } else if(libra1.checked){
        const libra = valor1 / 7.30;
        document.getElementById('valorConvertidoLibra').innerHTML = ("Valor em libra: ") + libra;

    }
    else if(euro1.checked){
        const euro = valor1 / 8.30;
        document.getElementById('valorConvertidoEuro').innerHTML = ("Valor em euro: ") + euro;

    }
    else if(anosLuz1.checked){
        const anosLuz = valor1 / 9.461;
        document.getElementById('valorConvertidoAnosLuz').innerHTML = ("Valor em anos luz: ") + anosLuz;

    }*/

   // tableshowhide('converter')

}