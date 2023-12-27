

let nbCat = 6;
let nbProj = [0, 0, 0, 0, 0, 0]; // Nb projets pour chacune des catégories


// Wendy Gervais
let cat0Data = [
    {Title:'Étudiante en école d\'ingénieurs multimédia',
        Description:'IMAC - ESIEE Paris - Web, jeux vidéos, design et audiovisuel ',
        Icon: "images/pp.jpg"},

    {Title:'Linktree',
        Description:'Découvrez mon CV, mon LinkedIn et mes autres liens.',
        Icon: "images/icons/links.png"},

    {Title:'À propos',
        Description:'',
        Icon: "images/icons/links.png"},
    ]

// Interactivité   
let cat1Data = [

    {Title:'Wendys Media Covers',
    Description:'Site web',
    Year: 2023,
    Icon: "images/icons/links.png"},


    {Title:'Super Season Racer',
    Description:'Jeu vidéo web',
    Year: 2023,
    Icon: "images/icons/interactive.png"},

    {Title:'Maxi Casse Briques',
    Description:'Jeu vidéo',
    Year: 2023,
    Icon: "images/icons/interactive.png",
    Background: "images/projects/maxicassebriques.png"},

    {Title:'Luck & White',
    Description:'Jeu vidéo',
    Year: 2023,
    Icon: "images/icons/interactive.png"},

    {Title:'Coollab',
    Description:'Logiciel, art génératif, web',
    Year: 2023,
    Icon: "images/icons/links.png"},

    {Title:'numéro 10',
    Description:'Jeu vidéo',
    Year: 2022,
    Icon: "images/icons/interactive.png"},

]

let cat2Data = [
    {Title:'Montréal Tattoo Festival',
    Description:'Design d\'affiche',
    Year: 2023,
    Icon: "images/icons/2d.png"},

    {Title:'Azurites',
    Description:'Bande dessinée',
    Year: 2022,
    Icon: "images/icons/2d.png"},

    {Title:'∫.',
    Description:'Dessin',
    Year: 2022,
    Icon: "images/icons/2d.png"},

    
    {Title:'InkTober',
    Description:'Dessin',
    Year: 2021,
    Icon: "images/icons/2d.png"}
]

let cat3Data = [
    {Title:'The Racer',
    Description:'Motion capture, animation et compositing 3D',
    Year: 2023,
    Icon: "images/icons/3d.png"}, 
        
    {Title:'Metropolis',
    Description:'Compositing 3D',
    Year: 2023,
    Icon: "images/icons/3d.png"}, 

    {Title:'Lucario et micro-environnement',
    Description:'Modélisation 3D',
    Year: 2023,
    Icon: "images/icons/3d.png"}, 

    {Title:'Maison Post-Apocalyptique',
    Description:'Modélisation 3D',
    Year: 2023,
    Icon: "images/icons/3d.png"}, 

    {Title:'Infinitimac',
    Description:'Modélisation et animation 3D',
    Year: 2022,
    Icon: "images/icons/3d.png"}, 

]

let cat4Data = [

    {Title:'Migratory Birds And Why They Don\'t Fly Alone',
    Description:'Générique',
    Year: 2023,
    Icon: "images/icons/video.png"}, 

    {Title:'Méduse',
    Description:'Court-métrage',
    Year: 2022,
    Icon: "images/icons/video.png"}, 

    {Title:'Œ',
    Description:'Court-métrage',
    Year: 2021,
    Icon: "images/icons/video.png"}, 

]

let cat5Data = [

    {Title:'5M ETG',
    Description:'Musique',
    Year: 2022,
    Icon: "images/icons/music.png"}, 

]

let allData = [cat0Data, cat1Data, cat2Data, cat3Data, cat4Data, cat5Data]

function convertDataToHTML(catData, i) {

    let ch = '';

    for (const key in catData) {
        ch += `<div class="project proj${key}">
        <img src="${catData[key].Icon}" alt="" class="project-icon">
        <div class="proj-text">
          <span class="proj-title">${catData[key].Title}</span><br>
          <span class="proj-desc">${catData[key].Description}${catData[key].Year !== undefined ? ', ' + catData[key].Year : ''}</span>
        </div>
      </div>`;
        nbProj[i]++;
    }

    return ch;

}



function initProjects() {

    for (let catData in allData) {
        let cat = document.querySelector(".cat" + catData + " .projects");
        cat.innerHTML= convertDataToHTML(allData[catData],catData );
    }


}
