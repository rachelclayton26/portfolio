let portfolioExerpts = {
    id:[{
        name            : "Pokémon Api",
        explanation     : "This website utalizes the Poké Api to list all the origonal 150 pokémon, their image, number, type, and abilities. It also has a search function that allows users to search for pokémon via name, number, or type.",
        url             : "./assets/pokemonApi.png",
        type            : "web design",
        link            : "https://rachelclayton26.github.io/api-1/"
    },
    {
        name            : "Nasa Api",
        explanation     : "Utilizing Bootstrap and the CSS @media atribute, this website offeres a fully responsive experience. It allows users to view the Nasa Astronomy Image of the Day from the past seven days, or to search for an image by date.",
        url             : "./assets/portNasaScreen-02.png",
        type            : "web design",
        link            : "https://nasadailyapi.web.app/"
    },
    {
        name            : "CSS Creature",
        explanation     : "Meet a re-imagined Nentendo's Kirby. This guy was created throught the sole use of HTML and CSS.",
        url             : "./assets/portKirby2.png",
        type            : "web design",
        link            : "https://codepen.io/rachelclayon/pen/VwmEXRN"
    },
    {
        name            : "Static Layout",
        explanation     : "For this static layout HTML and CSS were utilized to create a 100% acurate rendering of Hulu's current Homepage. Working buttons and eyecatching graphics make you believe you are on the origonal site.",
        url             : "./assets/hulu-04.png",
        type            : "web design",
        link            : "https://rachelclayton26.github.io/StaticLayout/"
    },
    {
        name            : "Fashion Blog UX Design",
        explanation     : "The project that got me into coding, this UX fashion blog design sparked the desire to be able to build what I had designed. Good UX is the difference between success and failure—especially for anyone trying to monetize a blog. I decided a fully custom solution was key. Therefore, I taught myself HTML, CSS, JavaScript, and PHP to build this fully responsive site. Detailed planning and UX design make it as intuitive on desktop as it is on mobile.",
        url             : "./assets/blogUxDesign4-01.png",
        type            : "ux design",
        link            : "./assets/blogTabletWebMobileUX3.pdf"
    },
    {
        name            : "Hand Illustrated Croquis",
        explanation     : "Drawn by hand using a variety of media including ink, graphite and gauche.",
        url             : "./assets/handIllustration.png",
        type            : "fashion",
        link            : "./assets/handIllustration.png"
    },
    {
        name            : "App UX Design",
        explanation     : "Created with the home-gardener in mind this app UX design creates a seamless ability to find florals suited to each user's garden and climate. Users are about to create an account, save their favorites, and learn details about each floral variety.",
        url             : "./assets/botanicalMockup-03.png",
        type            : "ux design",
        link            : "./assets/botanicalwireframe.pdf"
    },
    {
        name            : "Portfolio UX Design",
        explanation     : "Mobile First.",
        url             : "./assets/portfolioMockup-02.png",
        type            : "ux design",
        link            : "./assets/webPorfolioUx.pdf"
    },
    {
        name            : "Illustrated Flats",
        explanation     : "Mobile First.",
        url             : "./assets/flats-01.png",
        type            : "fashion",
        link            : "./assets/flats-01.png"
    },
    {
        name            : "Bridge Clinic Branding Package",
        explanation     : "Mobile First.",
        url             : "./assets/brandingMockup.png",
        type            : "branding",
        link            : "./assets/brandingMockup.png"
    },
    {
        name            : "Intimates Design",
        explanation     : "Mobile First.",
        url             : "./assets/intimatesCover.jpg",
        type            : "fashion",
        link            : "./assets/intimatesSamples.pdf"
    },
    {
        name            : "E-Commerce Build",
        explanation     : "Mobile First.",
        url             : "./assets/ecommerceMockup.png",
        type            : "web design",
        link            : "https://e-commerce-app-client.herokuapp.com"
    },
    {
        name            : "City Fact Finder",
        explanation     : "Mobile First.",
        url             : "./assets/cityFactsMockup4.png",
        type            : "web design",
        link            : "./assets/24hrWireFrame-01.png"
    },
    {
        name            : "Fine Art",
        explanation     : "Created using mixed-media, this portfolio included sculpture, paintings, and hand drawn illustrations.",
        url             : "./assets/artMockup.jpg",
        type            : "art",
        link            : "./assets/artPortfolio.pdf"
    },
    {
        name            : "Positioning and Branding Plan",
        explanation     : "Mobile First.",
        url             : "./assets/ellaEmberMockup.jpg",
        type            : "branding",
        link            : "./assets/ellaEmberPositioningPlan.pdf"
    }
]
};
//pokemon

document.getElementById("poke").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[0].url;
    let newLink = portfolioExerpts.id[0].link;
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[0].name;
    document.getElementById("explanation").innerText = portfolioExerpts.id[0].explanation;
    document.getElementById("type").innerHTML = portfolioExerpts.id[0].type;
    document.getElementById("portLink").href=`${newLink}`;
})

//nasa 

document.getElementById("nasa").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[1].url;
    let newLink = portfolioExerpts.id[1].link;    
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[1].name;
    document.getElementById("explanation").innerText = portfolioExerpts.id[1].explanation;
    document.getElementById("type").innerHTML = portfolioExerpts.id[1].type;
    document.getElementById("portLink").href=`${newLink}`;

})  

//kirby

document.getElementById("kirby").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[2].url;
    let newLink = portfolioExerpts.id[2].link;   
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[2].name;
    document.getElementById("explanation").innertext = portfolioExerpts.id[2].explanation;
    document.getElementById("type").innerHTML = portfolioExerpts.id[2].type;
    document.getElementById("portLink").href=`${newLink}`;
})

document.getElementById("hulu").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[3].url;
    let newLink = portfolioExerpts.id[3].link;   
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[3].name;
    document.getElementById("explanation").innerText = portfolioExerpts.id[3].explanation;
    document.getElementById("type").innerHTML = portfolioExerpts.id[3].type;
    document.getElementById("portLink").href=`${newLink}`;
})

document.getElementById("blogUX").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[4].url;
    let newLink = portfolioExerpts.id[4].link;   
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[4].name;
    document.getElementById("explanation").innerText = portfolioExerpts.id[4].explanation;
    document.getElementById("type").innerHTML = portfolioExerpts.id[4].type;
    document.getElementById("portLink").href=`${newLink}`;
})

document.getElementById("croquis").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[5].url;
    let newLink = portfolioExerpts.id[5].link;   
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[5].name;
    document.getElementById("explanation").innerText = portfolioExerpts.id[5].explanation;
    document.getElementById("type").innerHTML = portfolioExerpts.id[5].type;
    document.getElementById("portLink").href=`${newLink}`;
})

document.getElementById("appUX").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[6].url;
    let newLink = portfolioExerpts.id[6].link;   
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[6].name;
    document.getElementById("explanation").innerText = portfolioExerpts.id[6].explanation;
    document.getElementById("type").innerHTML = portfolioExerpts.id[6].type;
    document.getElementById("portLink").href=`${newLink}`;
})

document.getElementById("portfolioUX").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[7].url;
    let newLink = portfolioExerpts.id[7].link;   
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[7].name;
    document.getElementById("explanation").innerText = portfolioExerpts.id[7].explanation;
    document.getElementById("type").innerHTML = portfolioExerpts.id[7].type;
    document.getElementById("portLink").href=`${newLink}`;
})

document.getElementById("flats").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[8].url;
    let newLink = portfolioExerpts.id[8].link;   
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[8].name;
    document.getElementById("explanation").innerText = portfolioExerpts.id[8].explanation;
    document.getElementById("type").innerHTML = portfolioExerpts.id[8].type;
    document.getElementById("portLink").href=`${newLink}`;
})

document.getElementById("brandingPackage").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[9].url;
    let newLink = portfolioExerpts.id[9].link;   
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[9].name;
    document.getElementById("explanation").innerText = portfolioExerpts.id[9].explanation;
    document.getElementById("type").innerHTML = portfolioExerpts.id[9].type;
    document.getElementById("portLink").href=`${newLink}`;
})

document.getElementById("intimates").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[10].url;
    let newLink = portfolioExerpts.id[10].link;   
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[10].name;
    document.getElementById("explanation").innerText = portfolioExerpts.id[10].explanation;
    document.getElementById("type").innerHTML = portfolioExerpts.id[10].type;
    document.getElementById("portLink").href=`${newLink}`;
})

document.getElementById("ecommerce").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[11].url;
    let newLink = portfolioExerpts.id[11].link;   
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[11].name;
    document.getElementById("explanation").innerText = portfolioExerpts.id[11].explanation;
    document.getElementById("type").innerHTML = portfolioExerpts.id[11].type;
    document.getElementById("portLink").href=`${newLink}`;
})

document.getElementById("factFinder").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[12].url;
    let newLink = portfolioExerpts.id[12].link;   
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[12].name;
    document.getElementById("explanation").innerText = portfolioExerpts.id[12].explanation;
    document.getElementById("type").innerHTML = portfolioExerpts.id[12].type;
    document.getElementById("portLink").href=`${newLink}`;
})

document.getElementById("fineArt").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[13].url;
    let newLink = portfolioExerpts.id[13].link;   
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[13].name;
    document.getElementById("explanation").innerText = portfolioExerpts.id[13].explanation;
    document.getElementById("type").innerHTML = portfolioExerpts.id[13].type;
    document.getElementById("portLink").href=`${newLink}`;
})

document.getElementById("plan").addEventListener("mouseover", () => {
    let newImg = portfolioExerpts.id[14].url;
    let newLink = portfolioExerpts.id[14].link;   
    document.getElementById("portImg").src = `${newImg}`;
    document.getElementById("exTitle").innerText = portfolioExerpts.id[14].name;
    document.getElementById("explanation").innerText = portfolioExerpts.id[14].explanation;
    document.getElementById("type").innerHTML = portfolioExerpts.id[14].type;
    document.getElementById("portLink").href=`${newLink}`;
})

