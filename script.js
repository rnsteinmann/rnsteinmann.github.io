const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");

function btnencriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function encriptar(StringEncriptar) {
    document.getElementById("esconder").style.display = "none";
    document.getElementById("mostrar").style.display = "inline";
    let matrizCodigo = [["e", "enter"], ["i", "imes"],["a", "ai"],["o","ober"],["u", "ufat"]]
    StringEncriptar = StringEncriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++) {
        if(StringEncriptar.includes(matrizCodigo[i][0])) {
            StringEncriptar = StringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return StringEncriptar;
}

function btndesencriptar() {
    const textoDesencriptado = desenencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
}

function desenencriptar(StringDesencriptar) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"],["ai", "a"],["ober","o"],["ufat", "u"]]
    StringDesencriptar = StringDesencriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++) {
        if(StringDesencriptar.includes(matrizCodigo[i][0])) {
            StringDesencriptar = StringDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return StringDesencriptar;
}
