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
valor.toLocaleString("pt-BR","KM") + " = AnosLuzes " +
conversao.toFixed(2);
    } else {
        alert("informe um valor")
    }
    
}