//***** Função para encriptar o texto *****//
function encriptarTexto(texto){

    arrayETexto = [];
    var textoCapturado = texto.length;
    
    //***** Guarda o texto dentro da array *****//
    for(var indiceTexto = 0; indiceTexto < textoCapturado; indiceTexto++){
        arrayETexto.push(texto.charAt(indiceTexto));
    }
    
    var arrayComTexto = arrayETexto.length;

    //***** Percorre a array e faz as mudanças correspondentes *****//
    for(var indiceArray = 0; indiceArray < arrayComTexto; indiceArray++){
        if(arrayETexto[indiceArray] == 'a'){
            arrayETexto.splice(indiceArray, 1, 'e7');
        }else if(arrayETexto[indiceArray] == 'b'){
            arrayETexto.splice(indiceArray, 1, 'fr');
        }else if(arrayETexto[indiceArray] == 'c'){
            arrayETexto.splice(indiceArray, 1, 'f8');
        }else if(arrayETexto[indiceArray] == 'd'){
            arrayETexto.splice(indiceArray, 1, '1r');
        }else if(arrayETexto[indiceArray] == 'e'){
            arrayETexto.splice(indiceArray, 1, 't3');
        }else if(arrayETexto[indiceArray] == 'f'){
            arrayETexto.splice(indiceArray, 1, '77');
        }else if(arrayETexto[indiceArray] == 'g'){
            arrayETexto.splice(indiceArray, 1, 'mte');
        }else if(arrayETexto[indiceArray] == 'h'){
            arrayETexto.splice(indiceArray, 1, 'z3');
        }else if(arrayETexto[indiceArray] == 'i'){
            arrayETexto.splice(indiceArray, 1, '0');
        }else if(arrayETexto[indiceArray] == 'j'){
            arrayETexto.splice(indiceArray, 1, 'l');
        }else if(arrayETexto[indiceArray] == 'k'){
            arrayETexto.splice(indiceArray, 1, 'vfz');
        }else if(arrayETexto[indiceArray] == 'l'){
            arrayETexto.splice(indiceArray, 1, '9w');
        }else if(arrayETexto[indiceArray] == 'm'){
            arrayETexto.splice(indiceArray, 1, '1y');
        }else if(arrayETexto[indiceArray] == 'n'){
            arrayETexto.splice(indiceArray, 1, '7g3');
        }else if(arrayETexto[indiceArray] == 'p'){
            arrayETexto.splice(indiceArray, 1, 'g9');
        }else if(arrayETexto[indiceArray] == 'q'){
            arrayETexto.splice(indiceArray, 1, 'hW');
        }else if(arrayETexto[indiceArray] == 'r'){
            arrayETexto.splice(indiceArray, 1, '9QQ');
        }else if(arrayETexto[indiceArray] == 's'){
            arrayETexto.splice(indiceArray, 1, 'PcG');
        }else if(arrayETexto[indiceArray] == 't'){
            arrayETexto.splice(indiceArray, 1, '5FF');
        }else if(arrayETexto[indiceArray] == 'u'){
            arrayETexto.splice(indiceArray, 1, 'Jy');
        }else if(arrayETexto[indiceArray] == 'v'){
            arrayETexto.splice(indiceArray, 1, 'weP');
        }else if(arrayETexto[indiceArray] == 'w'){
            arrayETexto.splice(indiceArray, 1, 'b8Y');
        }else if(arrayETexto[indiceArray] == 'x'){
            arrayETexto.splice(indiceArray, 1, 'k7');
        }else if(arrayETexto[indiceArray] == 'y'){
            arrayETexto.splice(indiceArray, 1, 'Es');
        }else if(arrayETexto[indiceArray] == 'z'){
            arrayETexto.splice(indiceArray, 1, 'tM8');
        }
    }

    //***** Passa os indices da array para string *****//
    var texteEncriptado = "".concat(...arrayETexto);
    
    //***** Imprime o resultado no segundo campo *****//
    console.log(texteEncriptado);
    var textoSalida = document.querySelector("#textoFinal");
    textoSalida.value = texteEncriptado;
}

//***** Função para descriptografar o texto *****//
function desencriptarTexto(texto){
    //***** Repassa os valores correspondentes *****//
    var textoDescriptografado = texto.replace(/e7/g,'a');
    textoDescriptografado = textoDescriptografado.replace(/fr/g,'b');
    textoDescriptografado = textoDescriptografado.replace(/f8/g,'c');
    textoDescriptografado = textoDescriptografado.replace(/1r/g,'d');
    textoDescriptografado = textoDescriptografado.replace(/t3/g,'e');
    textoDescriptografado = textoDescriptografado.replace(/77/g,'f');
    textoDescriptografado = textoDescriptografado.replace(/mte/g,'g');
    textoDescriptografado = textoDescriptografado.replace(/z3/g,'h');
    textoDescriptografado = textoDescriptografado.replace(/0/g,'i');
    textoDescriptografado = textoDescriptografado.replace(/l/g,'j');
    textoDescriptografado = textoDescriptografado.replace(/vfz/g,'k');
    textoDescriptografado = textoDescriptografado.replace(/9w/g,'l');    
    textoDescriptografado = textoDescriptografado.replace(/1y/g,'m');
    textoDescriptografado = textoDescriptografado.replace(/7g3/g,'n');
    textoDescriptografado = textoDescriptografado.replace(/g9/g,'p');
    textoDescriptografado = textoDescriptografado.replace(/hW/g,'q');
    textoDescriptografado = textoDescriptografado.replace(/9QQ/g,'r');
    textoDescriptografado = textoDescriptografado.replace(/PcG/g,'s');
    textoDescriptografado = textoDescriptografado.replace(/5FF/g,'t');
    textoDescriptografado = textoDescriptografado.replace(/Jy/g,'u');
    textoDescriptografado = textoDescriptografado.replace(/weP/g,'v');
    textoDescriptografado = textoDescriptografado.replace(/b8Y/g,'w');
    textoDescriptografado = textoDescriptografado.replace(/k7/g,'x');
    textoDescriptografado = textoDescriptografado.replace(/Es/g,'y');
    textoDescriptografado = textoDescriptografado.replace(/tM8/g,'z');

    //***** Imprimir o resultado *****//
    console.log(textoDescriptografado);
    var textoSalida = document.querySelector("#textoFinal");
    textoSalida.value = textoDescriptografado;
}

//***** Atribuindo as respetivas funções aos botões *****//
var botonEncriptar = document.querySelector("#criptografarTexto");
botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#textoEntrada").value;
    encriptarTexto(textoEntrada);
});

var botonDesencriptar = document.querySelector("#descriptografarTexto");
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#textoEntrada").value;
    desencriptarTexto(textoEntrada);
});


//***** Função para copiar texto *****//
function copy() {
    var copiarTexto = document.querySelector("#textoFinal");
    copiarTexto.select();
    document.execCommand('copy');
}  
document.querySelector("#copiarTexto").addEventListener("click", copy);

//***** Função para limpar texto *****//
function limpiar(input){
    input.value= "";
}

var botonLimpiarEntrada = document.querySelector("#limparTexto");
botonLimpiarEntrada.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#textoEntrada");
    limpiar(textoEntrada);
});

var botonLimpiarSalida = document.querySelector("#limparTexto2");
botonLimpiarSalida.addEventListener("click",function(event){
    event.preventDefault();
    var textoSalida = document.querySelector("#textoFinal");
    limpiar(textoSalida);
});