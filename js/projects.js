let nbCat = 7;
let nbProj = [0, 0, 0, 0, 0, 0, 0]; // Nb projets pour chacune des catégories

// Wendy Gervais
let cat0Data = [
  {
    Title: "Étudiante en école d'ingénieurs multimédia",
    Description: "IMAC - ESIEE Paris - Web, jeux vidéo, design & audiovisuel. ",
    Icon: "images/pp.jpg",
  },

  {
    Title: "Linktree",
    Description: "Découvrez mon CV, mon LinkedIn et mes autres liens.",
    Link: "https://linktr.ee/commandant.grant",
    Icon: "images/icons/links.png",
  },

  { Title: "À propos", Description: "", Icon: "images/icons/profile.png" },

  {
    Title: "Changer le thème",
    Description: "",
    Icon: "images/icons/settings.png",
  },
];

let Links = [];
for (let i in cat0Data) {
  Links.push(cat0Data[i].Link);
}

// Interactivité
let cat1Data = [
  {
    Title: "Wendys Media Covers",
    Description: "Site web",
    Year: 2023,
    Icon: "images/icons/links.png",
    contentDesc:`<img src="images/projects/wendysmedia.jpg" alt="" />Projet transmédia
    (photographie, design graphique et web). À l'occasion du
    "Coverartober", un défi créatif, j'ai imaginé 31 designs de pochettes
    d'albums de musique fictifs, en me basant seulement sur le titre donné
    chaque jour d'octobre. <br><br>Au fur et à mesure, je les ajoutais au site
    Wendys Media Covers (dont le nom et l'esthétique sont inspirés du
    lecteur Windows Media Player), que j'ai codé principalement en
    Javascript.<br><br> Travail quotidien pendant un mois, c'est un projet à la fois exploratoire et très personnel, j'ai pu expérimenter différents styles tout en évoquant des thèmes de mon enfance, de mes rêves ou encore de mes peurs.`,
    projectLink:"https://wendysmediacovers.neocities.org/",
    Logiciels:["Photoshop", "HTML", "CSS", "Javascript"]
  },

  {
    Title: "Super Season Racer",
    Description: "Jeu vidéo web",
    Year: 2023,
    Icon: "images/icons/interactive.png",
    contentDesc:`<img src="images/projects/superseason_content.jpg" alt="" />Jeu réalisé lors d'un cours d'apprentissage des bases du Javascript. Le but était de réaliser une application interactive avec différents écrans (début, fin, game over...), un inventaire et une progression. J'ai donc imaginé un jeu où l'on doit ramasser des pièces avec la souris, il est aussi possible de gagner des bonus permettant de changer la couleur de son vaisseau ou la saison du jeu.`,
    projectLink:"https://espacedev.ca/uqat/arn2304/2023/jeux/jeu/05/",
    Logiciels:["Photoshop", "HTML", "CSS", "Javascript"]
  },

  {
    Title: "Maxi Casse Briques",
    Description: "Jeu vidéo",
    Year: 2023,
    Icon: "images/icons/mcb.png",
    Background: "images/projects/mcb.jpg",

    projectLink:"https://rom1-le-pain.itch.io/maxi-casse-brique",
    Logiciels:["Unity", "C#", "Photoshop"],
    Equipe:["Tristan Debeaune", "Romain Serres", "Guy Luong"]
  },

  {
    Title: "Luck & White",
    Description: "Jeu vidéo",
    Year: 2023,
    Icon: "images/icons/lw.jpg",
    Background: "images/projects/lw.jpg",

    projectLink:"https://wendywendo.itch.io/luck-white",
    
    Logiciels:["Unity", "C#", "Photoshop"],
    Equipe:["Tristan Debeaune"]
  },

  {
    Title: "Coollab",
    Description: "Logiciel, art génératif, web",
    Year: 2023,
    Icon: "images/icons/coollab.png",

    projectLink:"https://coollab-art.com/",

    Logiciels:["Coollab", "C++", "GLSL", "Photoshop", "After Effects", "Notion"],
    Equipe:["Lou Couard", "Tristan Debeaune", "Jules Fouchy", "Mattéo Leclercq", "Romain Serres"]
  },

  {
    Title: "numéro 10",
    Description: "Jeu vidéo",
    Year: 2022,
    Icon: "images/icons/interactive.png",

    projectLink:"https://rom1-le-pain.itch.io/numero-10",
    
    Logiciels:["Unity", "Blender", "GIMP"],
    Equipe:["Tristan Debeaune", "Romain Serres", "Silvère Timsit"]
  },
];

// 2D

let cat2Data = [
  {
    Title: "Montréal Tattoo Festival",
    Description: "Design d'affiche",
    Year: 2023,
    Icon: "images/icons/2d.png",
    
    Logiciels:["Photoshop"],
    
  },

  {
    Title: "Azurites",
    Description: "Bande dessinée",
    Year: 2022,
    Icon: "images/icons/2d.png",
    Background: "images/projects/azurites.jpg",

    projectLink:"https://23hbd.com/participants/2022/commandant-grant",
    Logiciels:["Photoshop"],
    Equipe:["Tristan Debeaune"]

  },

  {
    Title: "∫.",
    Description: "Dessin",
    Year: 2022,
    Icon: "images/icons/2d.png",
    Background: "images/projects/integrale.jpg",
    
    Equipe:["Tristan Debeaune"]
  },

  {
    Title: "InkTober",
    Description: "Dessin",
    Year: 2021,
    Icon: "images/icons/2d.png",
    Background: "images/projects/ink.jpg",
  },
];

// 3D

let cat3Data = [
  {
    Title: "The Racer",
    Description: "Motion capture, animation et compositing 3D",
    Year: 2023,
    Icon: "images/icons/3d.png",
    Background: "images/projects/racer.jpg",

    Logiciels:["Motion Builder", "Unreal Engine 5", "After Effects"],
    Equipe:["Tristan Debeaune", "Samy Gaci", "Martin Rabadeux"]
  },

  {
    Title: "Metropolis",
    Description: "Compositing 3D",
    Year: 2023,
    Icon: "images/icons/3d.png",
    Background: "images/projects/metropolis.jpg",
    Logiciels:["3ds Max", "Photoshop"],
    Equipe:["Tristan Debeaune"]
  },

  {
    Title: "Lucario et micro-environnement",
    Description: "Modélisation 3D",
    Year: 2023,
    Icon: "images/icons/3d.png",
    Background: "images/projects/lucario.jpg",
    Logiciels:["3ds Max"],
    Equipe:["Tristan Debeaune"]
  },

  {
    Title: "Maison Post-Apocalyptique",
    Description: "Modélisation 3D",
    Year: 2023,
    Icon: "images/icons/3d.png",
    Background: "images/projects/postapo.jpg",
    Logiciels:["3ds Max"],
    Equipe:["Tristan Debeaune"]
  },

  {
    Title: "Infinitimac",
    Description: "Modélisation et animation 3D",
    Year: 2022,
    Icon: "images/icons/3d.png",
    Background: "images/projects/infinitimac.gif",
    Logiciels:["Blender"]
  },
];

// Audiovisuel

let cat4Data = [

  {
    Title: "Migratory Birds And Why They Don't Fly Alone",
    Description: "Générique",
    Year: 2023,
    Icon: "images/icons/video.png",

    Background: "images/projects/migratory.jpg",

    contentDesc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/iD8X52fKtsQ?si=GcRI5lqPdG_mL-cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,

    Logiciels:["Blender", "After Effects"],
    Equipe:["Tristan Debeaune"]
  },

  {
    Title: "Méduse",
    Description: "Court-métrage",
    Year: 2022,
    Icon: "images/icons/video.png",

    Background: "images/projects/meduse.jpg",

    contentDesc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/_5DUpCFF6bg?si=Pb-4LdhLeXTKjpnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,

    Logiciels:["Premiere Pro"],
    Equipe:["Benjamin Amrani", "Axel Dona", "Aurélien Droissart", "Tristan Debeaune"]
  },

  {
    Title: "Œ",
    Description: "Court-métrage",
    Year: 2021,
    Icon: "images/icons/video.png",

    contentDesc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/JlQN5H2ydi8?si=sCPlXtKL-2B8OnQN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,

    Logiciels:["Premiere Pro"],
    Equipe:["Tristan Debeaune", "Quentin Huet", "Elise Massa", "Mattéo Leclercq", "Romain Serres"]
  },
];

// Musique

let cat5Data = [
  {
    Title: "5M ETG",
    Description: "Musique",
    Year: 2022,
    Icon: "images/icons/music.png",

    Logiciels:["ProTools"],
    Equipe:["Tristan Debeaune"],

    contentDesc:`<iframe width="315" height="315" src="https://www.youtube.com/embed/fSZmFKYWb-E?si=MgMCKMAm3PtviCfV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  },
];

//Friends

let cat6Data = [
  {
    Title: "Tristan Debeaune",
    Description: "",
    Link: "https://triste_temps.artstation.com/",
    Icon: "images/icons/interactive.png",
  },

  {
    Title: "Emily-Rose Strich",
    Description: "",
    Link: "https://emilyrose.fr/",
    Icon: "images/icons/2d.png",
  },

  {
    Title: "Romain Serres",
    Description: "",
    Link: "https://bouillon2poulet.artstation.com/",
    Icon: "images/icons/3d.png",
  },

  {
    Title: "Mattéo Leclercq",
    Description: "",
    Link: "https://matteo-leclercq.fr/",
    Icon: "images/icons/links.png",
  },

  {
    Title: "Axel Dona",
    Description: "",
    Link: "https://www.axeldona.com/",
    Icon: "images/icons/video.png",
  },

  {
    Title: "girlfriendcore",
    Description: "",
    Link: "https://soundcloud.com/girlfriendcore",
    Icon: "images/icons/music.png",
  },

  {
    Title: "Sarah KG Photographie",
    Description: "",
    Link: "https://www.instagram.com/sarahkg_photographie/",
    Icon: "images/icons/2d.png",
  },
];

let friendLinks = [];
for (let i in cat6Data) {
  friendLinks.push(cat6Data[i].Link);
}

let allDataFR = [
  cat0Data,
  cat1Data,
  cat2Data,
  cat3Data,
  cat4Data,
  cat5Data,
  cat6Data,
];

let BackgroundImg = [];

for (let i in allDataFR) {
  let catBGImg = [];
  for (let j in allDataFR[i]) {
    catBGImg.push(allDataFR[i][j].Background);
  }
  BackgroundImg.push(catBGImg);
}

function convertDataToHTML(catData, i) {
  let ch = "";
  let pch = "";

  for (const key in catData) {
    pch = `<div class="project proj${key}">
        <img src="${catData[key].Icon}" alt="" class="project-icon">
        <div class="proj-text">
          <span class="proj-title">${catData[key].Title}</span><br>
          <span class="proj-desc">${catData[key].Description}${
      catData[key].Year !== undefined ? ", " + catData[key].Year : ""
    }</span>
        </div>
      </div>`;

    // Logo maxi casse briques : pas de AA
    if (catData[key].Icon == "images/icons/mcb.png") {
      pch = `<div class="project proj${key}">
        <img src="${
          catData[key].Icon
        }" alt="" class="project-icon" style="image-rendering:pixelated;">
        <div class="proj-text">
          <span class="proj-title">${catData[key].Title}</span><br>
          <span class="proj-desc">${catData[key].Description}${
        catData[key].Year !== undefined ? ", " + catData[key].Year : ""
      }</span>
        </div>
      </div>`;
    }
    ch += pch;

    nbProj[i]++;
  }

  return ch;
}

function initProjects(allData) {
  nbProj = [0, 0, 0, 0, 0, 0, 0];

  for (let catData in allData) {
    let cat = document.querySelector(".cat" + catData + " .projects");
    cat.innerHTML = convertDataToHTML(allData[catData], catData);
  }
}


// n = cat, m = proj

function fillProjectContent(n, m) {
  let projectContent = document.querySelector(".project-content");

  let blocLogiciels = "";
  if (allDataFR[n][m].Logiciels) {
    blocLogiciels+=`<div class="logiciels">
    <h3>Logiciels utilisés</h3>
    <ul>`;
    for (let i in allDataFR[n][m].Logiciels) {
      blocLogiciels += `<li>${allDataFR[n][m].Logiciels[i]}</li>`
    }
    blocLogiciels+=`</ul></div>`;
  }

  let blocEquipe = "";
  if (allDataFR[n][m].Equipe) {
    blocEquipe+=`<div class="equipe">
    <h3>Réalisé avec</h3>
    <ul>`
    for (let i in allDataFR[n][m].Equipe) {
      blocEquipe += `<li>${allDataFR[n][m].Equipe[i]}</li>`
    }
    blocEquipe+= `</ul></div>`;
  }

  let aButtonLink = "";
  if (allDataFR[n][m].projectLink  !== undefined) {
    aButtonLink = ` <a href=${allDataFR[n][m].projectLink} target="_blank"
    ><h3 class="visit-projet-button">Accéder au projet</h3></a><br>`
  }


  projectContent.innerHTML = `<h2>${allDataFR[n][m].Title}</h2>
  <h3>${allDataFR[n][m].Description}${allDataFR[n][m].Year !== undefined ? ", " + allDataFR[n][m].Year : ""}</h3>

  ${aButtonLink}
  
  <br>

  <div class="project-content-desc">
    <div class="desc">
      ${allDataFR[n][m].contentDesc  !== undefined ? allDataFR[n][m].contentDesc : "" }
    </div>

    <div class="desc2">
    ${blocLogiciels}
    ${blocEquipe}
      
    </div>
  </div>`;
}

fillProjectContent(1, 1);










// ENGLISH

let cat0DataEN = [
  {
    Title: "Multimedia engineering student",
    Description:
      "IMAC - ESIEE Paris - Web, video games, design and audiovisual ",
    Icon: "images/pp.jpg",
  },

  {
    Title: "Linktree",
    Description: "Check my resume, LinkedIn and other links.",
    Link: "https://linktr.ee/commandant.grant",
    Icon: "images/icons/links.png",
  },

  { Title: "About", Description: "", Icon: "images/icons/links.png" },
];

let cat1DataEN = [
  {
    Title: "Wendys Media Covers",
    Description: "Website",
    Year: 2023,
    Icon: "images/icons/links.png",
  },

  {
    Title: "Super Season Racer",
    Description: "Web game",
    Year: 2023,
    Icon: "images/icons/interactive.png",
  },

  {
    Title: "Maxi Casse Briques",
    Description: "Game",
    Year: 2023,
    Icon: "images/icons/interactive.png",
    Background: "images/projects/maxicassebriques.png",
  },

  {
    Title: "Luck & White",
    Description: "Game",
    Year: 2023,
    Icon: "images/icons/interactive.png",
  },

  {
    Title: "Coollab",
    Description: "Software, generative art, website",
    Year: 2023,
    Icon: "images/icons/links.png",
  },

  {
    Title: "numéro 10",
    Description: "Game",
    Year: 2022,
    Icon: "images/icons/interactive.png",
  },
];

let cat2DataEN = [
  {
    Title: "Montréal Tattoo Festival",
    Description: "Poster design",
    Year: 2023,
    Icon: "images/icons/2d.png",
  },

  {
    Title: "Azurites",
    Description: "Comic book",
    Year: 2022,
    Icon: "images/icons/2d.png",
  },

  {
    Title: "∫.",
    Description: "Drawing",
    Year: 2022,
    Icon: "images/icons/2d.png",
  },

  {
    Title: "InkTober",
    Description: "Drawing",
    Year: 2021,
    Icon: "images/icons/2d.png",
  },
];

let cat3DataEN = [
  {
    Title: "The Racer",
    Description: "Motion capture, animation and 3D editing",
    Year: 2023,
    Icon: "images/icons/3d.png",
  },

  {
    Title: "Metropolis",
    Description: "3D editing",
    Year: 2023,
    Icon: "images/icons/3d.png",
  },

  {
    Title: "Lucario and micro-environment",
    Description: "3D modeling",
    Year: 2023,
    Icon: "images/icons/3d.png",
  },

  {
    Title: "Post-apo House",
    Description: "3D modeling",
    Year: 2023,
    Icon: "images/icons/3d.png",
  },

  {
    Title: "Infinitimac",
    Description: "3D modeling and animation",
    Year: 2022,
    Icon: "images/icons/3d.png",
  },
];

let cat4DataEN = [
  {
    Title: "Migratory Birds And Why They Don't Fly Alone",
    Description: "Title Sequence",
    Year: 2023,
    Icon: "images/icons/video.png",
  },

  {
    Title: "Méduse",
    Description: "Short film",
    Year: 2022,
    Icon: "images/icons/video.png",
  },

  {
    Title: "Œ",
    Description: "Short film",
    Year: 2021,
    Icon: "images/icons/video.png",
  },
];

// Musique

let cat5DataEN = [
  {
    Title: "5M ETG",
    Description: "Music",
    Year: 2022,
    Icon: "images/icons/music.png",
  },
];

let allDataEN = [
  cat0DataEN,
  cat1DataEN,
  cat2DataEN,
  cat3DataEN,
  cat4DataEN,
  cat5DataEN,
  cat6Data,
];
