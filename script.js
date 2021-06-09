let portfolioExerpts = {
    id:[{
        name            : "Pokémon Api",
        explanation     : "This website utalizes the Poké Api to list all the origonal 150 pokémon, their image, number, type, and abilities. It also has a search function that allows users to search for pokémon via name, number, or type.",
        url             : "./assets/pokemonApi.png",
        type            : "web design"
    },
    {
        name            : "Nasa Api",
        explanation     : "Utilizing Bootstrap and the CSS @media atribute, this website offeres a fully responsive experience. It allows users to view the Nasa Astronomy Image of the Day from the past seven days, or to search for an image by date.",
        url             : "./assets/portNasaScreen-01.png",
        type            : "web design"
    },
    {
        name            : "CSS Creature",
        explanation     : "Meet a re-imagined Nentendo's Kirby. This guy was created throught the sole use of HTML and CSS.",
        url             : " ",
        type            : "web design"
    },
    {
        name            : "Static Layout",
        explanation     : "For this static layout HTML and CSS were utilized to create a 100% acurate rendering of Hulu's current Homepage. Working buttons and eyecatching graphics make you believe you are on the origonal site.",
        url             : "./assets/hulu-04.png",
        type            : "web design"
    }]
};

document.getElementById("poke").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[0].url;
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[0].name;
    document.getElementById("explanation").innerText = portfolioExerpts.id[0].explanation;
    document.getElementById("type").innerText = portfolioExerpts.id[0].type;
})

document.getElementById("nasa").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[1].url;
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[1].name;
    document.getElementById("explanation").innerText = portfolioExerpts.id[1].explanation;
    document.getElementById("type").innertext = portfolioExerpts.id[1].type;
})

document.getElementById("kirby").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[2].url;
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[2].name;
    document.getElementById("explanation").innerText = portfolioExerpts.id[2].explanation;
    document.getElementById("type").innertext = portfolioExerpts.id[2].type;
})

document.getElementById("hulu").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[3].url;
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[3].name;
    document.getElementById("explanation").innerText = portfolioExerpts.id[3].explanation;
    document.getElementById("type").innertext = portfolioExerpts.id[3].type;
})