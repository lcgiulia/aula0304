const botao = document.getElementById('meuBotao');

const resposta = document.getElementById('resposta');

botao.addEventListener('click', 
 imprimir
);

botao.addEventListener('mouseover',
    function(){
        resposta.innerText="Voce passou em mim"
    }
);

botao.addEventListener('mouseout',
    function(){
        evento.innerText=alert("voce foi invadido");

    }   
);

botao.addEventListener('mouseout',
    function(){
        evento.innerText=alert("Não tente fugir");

    }   
);

function imprimir(){
    resposta.innerText="Voce clicou em mim.";
}