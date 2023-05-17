var pedraRobo = document.getElementById("pedraRobo");
var papelobo = document.getElementById("papelRobo");
var tesouraRobo = document.getElementById("tesouraRobo");

var mensagemFinal = document.getElementById("mensagemFinal");

function computador(jogada){ 
    tesouraRobo.style.display = 'none';   
    pedraRobo.style.display = "none";
    papelRobo.style.display = "none";
    var jogadaComputador = Math.round(Math.random() * 3);
    
    //Pedra
    if(jogada == 1 && jogadaComputador == 0){
        pedraRobo.style.display = "block";
        mensagemFinal.textContent = "Empatou";
    }
    if(jogada == 1 && jogadaComputador == 1){
        papelRobo.style.display = "block";
        mensagemFinal.textContent = "Computador Venceu";
    }
    if(jogada == 1 && jogadaComputador == 2){
        tesouraRobo.style.display = "block";
        mensagemFinal.textContent = "Você Venceu";
    }
    //Papel
    if(jogada == 2 && jogadaComputador == 0){
        pedraRobo.style.display = "block";
        mensagemFinal.textContent = "Você Venceu";
    }
    if(jogada == 2 && jogadaComputador == 1){
        papelRobo.style.display = "block";
        mensagemFinal.textContent = "Empatou";
    }
    if(jogada == 2 && jogadaComputador == 2){
        tesouraRobo.style.display = "block";
        mensagemFinal.textContent = "Computador Venceu";
    }
    //Tesoura
    if(jogada == 3 && jogadaComputador == 0){
        pedraRobo.style.display = "block";
        mensagemFinal.textContent = "Computador Venceu";
    }
    if(jogada == 3 && jogadaComputador == 1){
        papelRobo.style.display = "block";
        mensagemFinal.textContent = "Você Venceu";
    }
    if(jogada == 3 && jogadaComputador == 2){
        tesouraRobo.style.display = "block";
        mensagemFinal.textContent = "Empatou";
    }
    reiniciar.style.display = 'block';
}