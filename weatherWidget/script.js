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

const cards = [
    {
        image: "img/bangkok.jpg",
        city: "BANGKOK",
        temp: "60°",
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
        temp: "60°",
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
        temp: "60°",
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
                image: "img/icons8-clouds-64.svg",
            },
        ]
    },

    {
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
        temp: "60°",
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
        temp: "60°",
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
        temp: "60°",
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
        temp: "60°",
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
        temp: "60°",
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

cards.forEach((cards) => {
    const sonElement = document.createElement("div");
    sonElement.classList.add("w3-card-4");
    sonElement.classList.add("w3-margin");
    sonElement.style.width = "50%"

    sonElement.innerHTML = `
    <div class="w3-display-container w3-text-white">
        <img src="${cards.image}" alt="" style="width:100%">
        <div class="w3-xlarge w3-display-bottomleft w3-padding">${cards.city}</div>
    </div>
    <div class="w3-row">
        <div class="w3-third w3-center">
            <h3>MON</h3>
            <img src="${cards.listWeek[0].image}" alt="sun" style="width:80px">
        </div>
        <div class="w3-third w3-center">
            <h3>TUE</h3>
            <img src="${cards.listWeek[1].image}" alt="cloud" style="width:80px">
        </div>
        <div class="w3-third w3-center w3-margin-bottom">
            <h3>WED</h3>
            <img src="${cards.listWeek[2].image}" alt="clouds" style="width:80px">
        </div>
    </div>`

dadElement.appendChild(sonElement);

});