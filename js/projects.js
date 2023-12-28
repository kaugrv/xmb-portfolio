let nbCat = 7;
let nbProj = [0, 0, 0, 0, 0, 0, 0]; // Nb projets pour chacune des catégories

// Wendy Gervais
let cat0Data = [
  {
    Title: "Étudiante en école d'ingénieurs multimédia",
    Description: "IMAC - ESIEE Paris - Web, jeux vidéo, design et audiovisuel ",
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
  },

  {
    Title: "Super Season Racer",
    Description: "Jeu vidéo web",
    Year: 2023,
    Icon: "images/icons/interactive.png",
  },

  {
    Title: "Maxi Casse Briques",
    Description: "Jeu vidéo",
    Year: 2023,
    Icon: "images/icons/mcb.png",
    Background: "images/projects/mcb.jpg",
  },

  {
    Title: "Luck & White",
    Description: "Jeu vidéo",
    Year: 2023,
    Icon: "images/icons/lw.jpg",
    Background: "images/projects/lw.jpg",
  },

  {
    Title: "Coollab",
    Description: "Logiciel, art génératif, web",
    Year: 2023,
    Icon: "images/icons/coollab.png",
  },

  {
    Title: "numéro 10",
    Description: "Jeu vidéo",
    Year: 2022,
    Icon: "images/icons/interactive.png",
  },
];

// 2D

let cat2Data = [
  {
    Title: "Montréal Tattoo Festival",
    Description: "Design d'affiche",
    Year: 2023,
    Icon: "images/icons/2d.png",
  },

  {
    Title: "Azurites",
    Description: "Bande dessinée",
    Year: 2022,
    Icon: "images/icons/2d.png",
    Background: "images/projects/azurites.jpg",
  },

  {
    Title: "∫.",
    Description: "Dessin",
    Year: 2022,
    Icon: "images/icons/2d.png",
    Background: "images/projects/integrale.jpg",
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
  },

  {
    Title: "Metropolis",
    Description: "Compositing 3D",
    Year: 2023,
    Icon: "images/icons/3d.png",
    Background: "images/projects/metropolis.jpg",
  },

  {
    Title: "Lucario et micro-environnement",
    Description: "Modélisation 3D",
    Year: 2023,
    Icon: "images/icons/3d.png",
    Background: "images/projects/lucario.jpg",
  },

  {
    Title: "Maison Post-Apocalyptique",
    Description: "Modélisation 3D",
    Year: 2023,
    Icon: "images/icons/3d.png",
    Background: "images/projects/postapo.jpg",
  },

  {
    Title: "Infinitimac",
    Description: "Modélisation et animation 3D",
    Year: 2022,
    Icon: "images/icons/3d.png",
    Background: "images/projects/infinitimac.gif",
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
  },

  {
    Title: "Méduse",
    Description: "Court-métrage",
    Year: 2022,
    Icon: "images/icons/video.png",

    Background: "images/projects/meduse.jpg",
  },

  {
    Title: "Œ",
    Description: "Court-métrage",
    Year: 2021,
    Icon: "images/icons/video.png",
  },
];

// Musique

let cat5Data = [
  {
    Title: "5M ETG",
    Description: "Musique",
    Year: 2022,
    Icon: "images/icons/music.png",
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

console.log(BackgroundImg);

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
