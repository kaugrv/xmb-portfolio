let nbCat = 7;
let nbProj = [0, 0, 0, 0, 0, 0, 0]; // Nb projets pour chacune des catégories

// Wendy Gervais
let cat0Data = [
  {
    Title: "Étudiante en école d'ingénieurs multimédia",
    Description: "IMAC (ESIEE Paris) et UQAT. Web, jeux vidéo, design & audiovisuel. ",
    Icon: "images/pp.jpg",
  },

  {
    Title: "Linktree",
    Description: "Découvrez mon CV, mon LinkedIn et mes autres liens.",
    Link: "https://linktr.ee/commandant.grant",
    Icon: "images/icons/links.png",
  },

  { Title: "À propos", Description: "", Icon: "images/icons/profile.png" ,

  contentDesc:`<img src="images/pp.jpg" alt="" />Bonjour ! Je suis Wendy, ingénieure multimédia en France. <br> <br> Baignée dans les jeux vidéos et le web depuis de nombreuses années, j'ai créé ce portfolio fin 2023 en m'inspirant de l'interface de la PS3™ - <a href="https://manuals.playstation.net/document/fr/ps3/current/basicoperations/xmb.html" target="_blank">XMB, Tous droits réservés à Sony et Playstation</a>. 
  <br> <br> Vous pourrez retrouver ici mes projets scolaires et personnels, classés par catégories qui représentent les nombreux domaines qui m'intéressent. Forte de cette pluridisciplinarité, je peux évoluer comme cheffe de projet, consultante ou encore designer ou développeuse dans des champs artistiques et numériques très variés. <br> <br> 
  Contact : kau.grv@gmail.com`,
},

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
    Title: "Laisse-moi dormir",
    Description: "Jeu web",
    Year: 2024,
    Icon: "images/icons/interactive.png",
    contentDesc:`Jeu réalisé en 48h à l'occasion d'une GameJam. Le thème, imposé, était "Profondeurs", et la contrainte était d'inclure une forme de mise en abyme dans son jeu. Seule, j'ai choisi de rester très simple en réalisant un petit jeu web, le but est d'utiliser sa souris pour relier les étoiles de la page. J'ai codé le jeu principalement en Javascript en utilisant un peu les frameworks GSAP (animation) et p5 (dessin).`,
    projectLink:"https://wendywendo.itch.io/laisse-moi-dormir",
    Logiciels:["Photoshop", "HTML", "CSS", "Javascript", "GSAP", "p5"]
  },

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
    Description: "Jeu web",
    Year: 2023,
    Icon: "images/icons/interactive.png",
    contentDesc:`<img src="images/projects/superseason_content.jpg" alt="" />Jeu réalisé lors d'un cours d'apprentissage des bases du Javascript. Le but était de réaliser une application interactive avec différents écrans (début, fin, game over...), un inventaire et une progression. <br> <br>J'ai donc imaginé un jeu où l'on doit ramasser des pièces avec la souris, il est aussi possible de gagner des bonus permettant de changer la couleur de son vaisseau ou la saison du jeu.`,
    projectLink:"https://espacedev.ca/uqat/arn2304/2023/jeux/jeu/05/",
    Logiciels:["Photoshop", "HTML", "CSS", "Javascript"]
  },

  {
    Title: "Maxi Casse Briques",
    Description: "Jeu vidéo",
    Year: 2023,
    Icon: "images/icons/mcb.png",
    Background: "images/projects/mcb.jpg",

    contentDesc: `Jeu réalisé en 48h à l'occasion d'une GameJam. Le thème, imposé, était "Pause", et la contrainte était de ne pas faire apparaître d'humain dans le jeu. Nous étions une petite équipe et avons imaginé et codé Maxi Casse Briques, une version un peu particulière du célèbre mini-jeu car en plus de devoir casser les briques avec une balle en utilisant les flèches du clavier, le joueur sera constamment dérangé par des fenêtres apparaissant aléatoirement et qu'il devra fermer en utilisant sa souris. <br> <br>Nous étions deux du côté développement sur Unity, j'ai implementé les fenêtres du jeu et codé le gameplay en C#.`,

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

    contentDesc: `Jeu réalisé pour un cours de mathématiques et probabilités. Le but était de créer un jeu utilisant l'aléatoire et d'inclure des lois mathématiques, nous avons donc imaginé Luck & White, un jeu "casino" à l'esthétique 8-bit basé sur le hasard. Le but est d'amasser le plus d'argent en 15 manches. <br> <br> Mon camarade a implementé les variables aléatoires et le système de jeu tandis que je me suis concentrée sur l'interface en créant les éléments graphiques sur Photoshop et les ayant intégrés ensuite dans Unity.`,
    
    Logiciels:["Unity", "C#", "Photoshop"],
    Equipe:["Tristan Debeaune"]
  },

  {
    Title: "Coollab",
    Description: "Logiciel, art génératif, web",
    Year: 2023,
    Icon: "images/icons/coollab.png",

    projectLink:"https://coollab-art.com/",

    contentDesc: `Projet tutoré de quelques mois mené dans le cadre de ma formation d'ingénieur. Nous avons été une petite équipe de 5 missionnée de travailler sur le logiciel open-source Coollab, un logiciel destiné à faire de l'art génératif (image et vidéo). <br> <br> En plus d'avoir participé aux missions communes - développer de nouvelles fonctionnalités logicielles et des shaders (effets), créer des oeuvres pour tester les possibilités du logiciel et organiser la communication pour faire connaître celui-ci (vidéo promotionnelle, réseaux sociaux, site Internet), j'ai occupé au sein de mon équipe le rôle de cheffe de projet. Nous avons travaillé en méthode Agile et j'étais responsable de suivre l'avancée de notre équipe en faisant des points réguliers et en tenant un kanban à jour.<br> <br> Nous avons finalement eu la chance d'être invités à la Cité des Sciences et de l'Industrie pour présenter le logiciel pendant un week-end. `,

    Logiciels:["Coollab", "C++", "GLSL", "Photoshop", "After Effects", "Notion", "React.js"],
    Equipe:["Lou Couard", "Tristan Debeaune", "Jules Fouchy", "Mattéo Leclercq", "Romain Serres"]
  },

  {
    Title: "numéro 10",
    Description: "Jeu vidéo",
    Year: 2022,
    Icon: "images/icons/interactive.png",

    projectLink:"https://rom1-le-pain.itch.io/numero-10",

    contentDesc: `Jeu réalisé en 48h à l'occasion d'une GameJam, la première à laquelle j'ai participé. Le thème, imposé, était "Cour de récré", et la contrainte était d'utiliser une couleur dominante choisie au préalable. <br> <br>  J'ai principalement dessiné les éléments graphiques à la main. Numéro 10 n'est pas un projet complètement abouti mais nous avons beaucoup appris notamment sur le moteur Unity, que je découvrais alors. `,
    
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
