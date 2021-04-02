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

// let porfolioDetails = document.getElementsByClassName("portItem");

// for (i=0; i< porfolioDetails.length; i++){
//     porfolioDetails[i].addEventListener("mouseover", event =>{
//     // };


// let porfolioDetailsNasa = document.getElementsById("nasa");
// let porfolioDetailsKirby = document.getElementsById("kirby");
// let porfolioDetailsHulu = document.getElementsById("hulu");

// document.getElementsById("poke").addEventListener("mouseover", highlightPoke);
// porfolioDetailsNasa.addEventListener("mouseover", highlightNasa);
// porfolioDetailsKirby.addEventListener("mouseover", highlightKirby);
// porfolioDetailsHulu.addEventListener("mouseover", highlightHulu);
    
// console.log(porfolioDetails);

document.getElementsById("poke").addEventListener("mouseover", highlightPoke);

function highlightPoke(){
    let porfolioDetailsPoke = document.getElementsById("poke");
    document.getElementsByClassName(".portImg").src = portfolioExerpts.id[0].url
    document.getElementsByClassName("exTitle").innerText = portfolioExerpts.id[0].name
    document.getElementsByClassName("explanation").innerText = portfolioExerpts.id[0].explanation
    document.getElementsByClassName("type").innerText = portfolioExerpts.id[0].type    
}

function highlightNasa(){
    document.getElementsByClassName(".portImg").src = portfolioExerpts.id[1].url
    document.getElementsByClassName("exTitle").innerText = portfolioExerpts.id[1].name
    document.getElementsByClassName("explanation").innerText = portfolioExerpts.id[1].explanation
    document.getElementsByClassName("type").innerText = portfolioExerpts.id[1].type    
}

function highlightKirby(){
    document.getElementsByClassName(".portImg").src = portfolioExerpts.id[2].url
    document.getElementsByClassName("exTitle").innerText = portfolioExerpts.id[2].name
    document.getElementsByClassName("explanation").innerText = portfolioExerpts.id[2].explanation
    document.getElementsByClassName("type").innerText = portfolioExerpts.id[2].type    
}

function highlightHulu(){
    document.getElementsByClassName(".portImg").src = portfolioExerpts.id[3].url
    document.getElementsByClassName("exTitle").innerText = portfolioExerpts.id[3].name
    document.getElementsByClassName("explanation").innerText = portfolioExerpts.id[3].explanation
    document.getElementsByClassName("type").innerText = portfolioExerpts.id[3].type    
}
