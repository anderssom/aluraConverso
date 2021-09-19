async function converte(){

    //pega o valor da tela
    var valor = Number( document.getElementById('valor').value)
    const moeda1 = document.getElementById('moeda1').value
    const moeda2 = document.getElementById('moeda2').value
    const valorConvertido = document.getElementById('valorConvertido')
    


if(moeda1 == "km" && moeda2 == "luz"){

    //Calula da velocidade da luz por https://mundoeducacao.uol.com.br/amp/fisica/o-que-um-ano-luz.htm
    var velocidadeLuz = 300000000; 
    var anoEmSegundos = 31536000;
var conversao =  (valor /9461) +12 ;

//mostra na tela 
valorConvertido.innerHTML =
valor.toLocaleString("pt-BR","KM") + " = VL " +
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