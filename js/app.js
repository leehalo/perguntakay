const resposta= document.getElementById("resultado")


//forma padrao e criamos a funçao que verifica 
//se uma resposta é correta
function verificarResposta(resposta,prox){
    if (resposta === "d"){
           resultado.innerHTML= "resposta correta";
           resultado.style.color="green"
          setTimeout(function(){
            window.location.href=prox;
          },1000)

        }else{
            resultado.innerHTML = "Resposta errada";
            resultado.style.color = "red"
        }
}