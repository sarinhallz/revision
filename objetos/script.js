/* fazendo referência ao elemento pai */
const elementDad = document.getElementById('elementos');

/* criando elemento */
const myElement = document.createElement('button');

myElement.textContent = "Click :)"

/* atribuindo elemento ao pai */
elementDad.appendChild(myElement);

/* adicionando um alerta */
myElement.addEventListener('click', () => {
    alert('Parabéns, o seu clique foi feito!');
});

/* utilizando o for para a criação de botões */
for (let index = 0; index < 10; index++) {
    const myElement = document.createElement('button');
    myElement.textContent = index;
    elementDad.appendChild(myElement);
}

/* criando uma lista de botões */
let botoes = [
    {
        id: 'btn-blue',
        name: "Azul",
        color: 'blue',
    },
    {
        id: 'btn-green',
        name: "Verde",
        color: 'green',
    },
    {
        id: 'btn-violet',
        name: "Violeta",
        color: 'violet',
    },
    {
        id: 'btn-red',
        name: "Vermelho",
        color: 'red',
    },
    {
        id: 'btn-grey',
        name: "Cinza",
        color: 'grey',
    },
    {
        id: 'btn-yellow',
        name: "Amarelo",
        color: 'yellow',
    }

];

/* percorre a matriz "botoes" e executa uma função para cada item */
botoes.forEach(item => {
    /* cria um elemento de botão */
    const myElement = document.createElement('button');
    myElement.textContent = item.name;
    myElement.id = item.id;
    myElement.style.backgroundColor = item.color;

    myElement.addEventListener('click', () =>{
        resultado.textContent = item.name;
    }); 
    
    elementDad.appendChild(myElement);
});