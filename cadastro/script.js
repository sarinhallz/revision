//criar variáveis 
//let nome = "Sarah Cruz";
let idade = 16;
let idadeEsposa = "45";
const anoNascimento = 1977;
//quando vamos utilizar um dado que não se altera ou não muda, utilizamos const, algo constante. 

//decisão 
if (idade == idadeEsposa) {

    alert("Igual...");

} else{
    alert("Cada um no seu quadrado!");
}

//lendo informações do HTML
const titulo = document.getElementById("titulo");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const resultado = document.getElementById("resultado");

titulo.textContent = "Mudei o titulo! Eu posso!";

titulo.style.color = "violet";

function mostrarResultado() {
    resultado.textContent = nome.value + " " + email.value;
}