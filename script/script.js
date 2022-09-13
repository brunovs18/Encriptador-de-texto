var inputTexto = document.querySelector('.teste')
var mensagem = document.querySelector('.mao' )

var car = document.getElementsById("five");

function btnEncriptar(){
    var textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
   
    document.getElementById("mao").style.backgroundImage = "none";
}

function btnDesencriptar(){
    var textoEncriptado = desencriptar(inputTexto.value)
    mensagem.value = textoEncriptado
}

 
function btnCopiar(){
    copiado =  document.querySelector('.mao');
    copiado.select();
    document.execCommand("copy");
}

function encriptar(stringEncriptada){
    let matriz= [["e", "enter"],["i", "imes"],["a", "ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matriz.length; i++){
        if(stringEncriptada.includes(matriz[i][0])){
            stringEncriptada =  stringEncriptada.replaceAll(matriz[i][0],matriz[i][1])
        }
    }
    return stringEncriptada;
}

function desencriptar(stringEncriptada){
    let matriz= [["e", "enter"],["i", "imes"],["a", "ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matriz.length; i++){
        if(stringEncriptada.includes(matriz[i][0])){
            stringEncriptada =  stringEncriptada.replaceAll(matriz[i][1],matriz[i][0])
        }
    }
    return stringEncriptada;
}

