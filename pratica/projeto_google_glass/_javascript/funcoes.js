let defaultLeft = '1250px';
let defaultTop = '50px';
function mudaIcone(icone) {
    document.getElementById("foto").src = icone;
    if (icone == "_imagens/especificacoes-02.png") {
        document.getElementById("icone").style.left = '1250px'
        document.getElementById("icone").style.top = '40px'
        document.getElementById("foto").style.width = '60%'
        return 0;
    }
    if (icone == "_imagens/fotos.png") {
        document.getElementById("icone").style.left = '1250px'
        document.getElementById("icone").style.top = '40px'
        return 0;
    }
    if (icone == "_imagens/multimidia.png") {
        document.getElementById("icone").style.left = '1300px'
        document.getElementById("icone").style.top = '15px'
        return 0;
    }
    if (icone == "_imagens/contato.png") {
        document.getElementById("icone").style.left = '1325px'
        document.getElementById("icone").style.top = '35px'
        return 0;
    }
    if (icone == "_imagens/home.png") {
        document.getElementById("icone").style.left = '1310px'
        document.getElementById("icone").style.top = '15px'
        return 0;
    }
    if (icone == "_imagens/glass-oculos-preto-peq.png") {
        document.getElementById("icone").style.left = defaultLeft
        document.getElementById("icone").style.top = defaultTop
        document.getElementById("foto").style.width = '100%'
        return 0;
    }
}