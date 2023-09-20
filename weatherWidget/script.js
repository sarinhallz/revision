/* cria uma variável "dadElement" e a atribui ao elemento pai presente no html */
const dadElement = document.getElementById("dad-element");

/* meu objeto javascript usado para a representação do meu card html */
const cardWeather = {
    image: "img/london.jpg",
    city: "LONDON",
    temp: "60°",
    listWeek: [
        {
            day: "MON",
            image: "img/icons8-clouds-64.svg",
        },

        {
            day: "TUE",
            image: "img/icons8-heavy-rain-64.svg",
        },

        {
            day: "WED",
            image: "img/icons8-sun-64.svg",
        },
    ]
}

// criação de uma lista de objetos representando cards de diferentes cidades mundiais
const cards = [
    {
        image: "img/bangkok.jpg",
        city: "BANGKOK",
        temp: "28°",
        listWeek: [
            {
                day: "MON",
                image: "img/icons8-sun-64.svg",
            },

            {
                day: "TUE",
                image: "img/icons8-sun-64.svg",
            },

            {
                day: "WED",
                image: "img/icons8-heavy-rain-64.svg",
            },
        ]
    },

    {
        image: "img/cairo.jpg",
        city: "CAIRO",
        temp: "29°",
        listWeek: [
            {
                day: "MON",
                image: "img/icons8-sun-64.svg",
            },

            {
                day: "TUE",
                image: "img/icons8-sun-64.svg",
            },

            {
                day: "WED",
                image: "img/icons8-sun-64.svg",
            },
        ]
    },

    {
        image: "img/dubai.jpg",
        city: "DUBAI",
        temp: "35°",
        listWeek: [
            {
                day: "MON",
                image: "img/icons8-sun-64.svg",
            },

            {
                day: "TUE",
                image: "img/icons8-sun-64.svg",
            },

            {
                day: "WED",
                image: "img/icons8-sun-64.svg",
            },
        ]
    },

    {
        image: "img/moscou.jpg",
        city: "MOSCOU",
        temp: "20°",
        listWeek: [
            {
                day: "MON",
                image: "img/icons8-clouds-64.svg",
            },

            {
                day: "TUE",
                image: "img/icons8-heavy-rain-64.svg",
            },

            {
                day: "WED",
                image: "img/icons8-clouds-64.svg",
            },
        ]
    },

    {
        image: "img/london.jpg",
        city: "LONDON",
        temp: "17°",
        listWeek: [
            {
                day: "MON",
                image: "img/icons8-clouds-64.svg",
            },

            {
                day: "TUE",
                image: "img/icons8-clouds-64.svg",
            },

            {
                day: "WED",
                image: "img/icons8-clouds-64.svg",
            },
        ]
    },

    {
        image: "img/oslo.jpg",
        city: "OSLO",
        temp: "16°",
        listWeek: [
            {
                day: "MON",
                image: "img/icons8-sun-64.svg",
            },

            {
                day: "TUE",
                image: "img/icons8-clouds-64.svg",
            },

            {
                day: "WED",
                image: "img/icons8-heavy-rain-64.svg",
            },
        ]
    },

    {
        image: "img/ottawa.jpg",
        city: "OTTAWA",
        temp: "18°",
        listWeek: [
            {
                day: "MON",
                image: "img/icons8-sun-64.svg",
            },

            {
                day: "TUE",
                image: "img/icons8-heavy-rain-64.svg",
            },

            {
                day: "WED",
                image: "img/icons8-sun-64.svg",
            },
        ]
    },

    {
        image: "img/pequim.jpg",
        city: "PEQUIM",
        temp: "16°",
        listWeek: [
            {
                day: "MON",
                image: "img/icons8-sun-64.svg",
            },

            {
                day: "TUE",
                image: "img/icons8-clouds-64.svg",
            },

            {
                day: "WED",
                image: "img/icons8-clouds-64.svg",
            },
        ]
    },

    {
        image: "img/praga.png",
        city: "PRAGA",
        temp: "22°",
        listWeek: [
            {
                day: "MON",
                image: "img/icons8-sun-64.svg",
            },

            {
                day: "TUE",
                image: "img/icons8-sun-64.svg",
            },

            {
                day: "WED",
                image: "img/icons8-clouds-64.svg",
            },
        ]
    },

    {
        image: "img/rio-de-janeiro.jpg",
        city: "RIO DE JANEIRO",
        temp: "24°",
        listWeek: [
            {
                day: "MON",
                image: "img/icons8-sun-64.svg",
            },

            {
                day: "TUE",
                image: "img/icons8-sun-64.svg",
            },

            {
                day: "WED",
                image: "img/icons8-sun-64.svg",
            },
        ]
    },
]

// percorre por cada um dos cards e cria elementos HTML para cada um deles
cards.forEach((cards) => {
    // cria um novo elemento HTML, um elemento filho, que representa o card
    const sonElement = document.createElement("div");

    // estiliza o elemento filho
    sonElement.classList.add("w3-card-4");
    sonElement.classList.add("w3-margin");
    sonElement.style.width = "50%"

    // define o conteúdo HTML do card com base nos dados da cidade
    sonElement.innerHTML = `
    <div class="w3-display-container w3-text-white">
        <img src="${cards.image}" alt="" style="width:100%">
        <div class="w3-xlarge w3-display-bottomleft w3-padding">${cards.city}, ${cards.temp}</div>
    </div>
    <div class="w3-row">
        <div class="w3-third w3-center">
            <h3>${cards.listWeek[0].day}</h3>
            <img src="${cards.listWeek[0].image}" alt="sun" style="width:80px">
        </div>
        <div class="w3-third w3-center">
            <h3>${cards.listWeek[1].day}</h3>
            <img src="${cards.listWeek[1].image}" alt="cloud" style="width:80px">
        </div>
        <div class="w3-third w3-center w3-margin-bottom">
            <h3>${cards.listWeek[2].day}</h3>
            <img src="${cards.listWeek[2].image}" alt="clouds" style="width:80px">
        </div>
    </div>`

    // adiciona o elemento filho ao elemento pai
    dadElement.appendChild(sonElement);

});