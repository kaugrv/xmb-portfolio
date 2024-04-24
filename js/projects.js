let nbCat = 6; // Bombre de catégories (Interactivité, 3D...)
let nbProj = [0, 0, 0, 0, 0, 0]; // Nb projets pour chacune des catégories

// Wendy Gervais
let cat0Data = [
  {
    Title: "Étudiante en école d'ingénieurs multimédia",
    Description: "IMAC (ESIEE Paris) et UQAT. Web, jeux vidéo, design & audiovisuel. ",
    Icon: "images/pp-xmb-portfolio.jpg",
  },

  
  { Title: "À propos", Description: "", Icon: "images/icons/profile.png" ,

  contentDesc:`<img class="pp-adulte" src="images/pp-xmb-portfolio.jpg" alt="" />
  Bonjour ! Je suis Wendy, ingénieure multimédia en France. <br> <br> Baignée dans les jeux vidéos et le web depuis de nombreuses années, j'ai créé ce portfolio fin 2023 en m'inspirant de l'interface de la PS3™ - <a href="https://manuals.playstation.net/document/fr/ps3/current/basicoperations/xmb.html" target="_blank">XMB, Tous droits réservés à Sony et Playstation</a>. 
  <br> <br> Vous pourrez retrouver ici mes projets scolaires et personnels, classés par catégories qui représentent les nombreux domaines qui m'intéressent. Forte de cette pluridisciplinarité, je peux évoluer comme cheffe de projet, consultante ou encore designer ou développeuse dans des champs artistiques et numériques très variés. <br> <br> 
  Contact : kau.grv@gmail.com`,
},

  {
    Title: "Linktree",
    Description: "Découvrez mon CV, mon LinkedIn et mes autres liens.",
    Link: "https://linktr.ee/commandant.grant",
    Icon: "images/icons/links.png",
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
    Title: "Les tours de Kawaii",
    Description: "Jeu vidéo",
    Year: 2024,
    Icon: "images/icons/les-tours-de-kawaii-logo.png",
    Background: "images/backgrounds/les-tours-de-kawaii.png",

    

    contentDesc:`Mini-jeu 3D inspiré des tours de Hanoï et de l'esthétique japonaise dite "kawaii".`,
    projectLink:" https://wendywendo.itch.io/les-tours-de-kawaii",
    Logiciels:["Figma", "Unity"]
  },

  {
    Title: "Laisse-moi dormir",
    Description: "Jeu web",
    Year: 2024,
    Icon: "images/icons/links.png",

    
    Background: "images/backgrounds/lmd.jpg",


    contentDesc:`Jeu réalisé en 48h à l'occasion d'une GameJam. Le thème, imposé, était "Profondeurs", et la contrainte était d'inclure une forme de mise en abyme dans son jeu. <br> <br>Seule, j'ai choisi de rester très simple en réalisant un petit jeu web, le but est d'utiliser sa souris pour relier les étoiles de la page. J'ai codé le jeu principalement en Javascript en utilisant un peu les frameworks GSAP (animation) et p5 (dessin).`,
    projectLink:"https://wendywendo.itch.io/laisse-moi-dormir",
    Logiciels:["Photoshop", "HTML", "CSS", "Javascript", "GSAP", "p5"]
  },

  {
    Title: "Wendys Media Covers",
    Description: "Site web",
    Year: 2023,
    Icon: "images/icons/links.png",
    contentDesc:`<img src="images/backgrounds/wendysmedia.jpg" alt="" />Projet transmédia
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
    contentDesc:`<img src="images/backgrounds/superseason_content.jpg" alt="" />Jeu réalisé lors d'un cours d'apprentissage des bases du Javascript. Le but était de réaliser une application interactive avec différents écrans (début, fin, game over...), un inventaire et une progression. <br> <br>J'ai donc imaginé un jeu où l'on doit ramasser des pièces avec la souris, il est aussi possible de gagner des bonus permettant de changer la couleur de son vaisseau ou la saison du jeu.`,
    projectLink:"https://espacedev.ca/uqat/arn2304/2023/jeux/jeu/05/",
    Logiciels:["Photoshop", "HTML", "CSS", "Javascript"]
  },

  {
    Title: "Maxi Casse Briques",
    Description: "Jeu vidéo",
    Year: 2023,
    Icon: "images/icons/mcb.png",
    Background: "images/backgrounds/mcb.jpg",

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

    
    Background: "images/backgrounds/numero10.jpg",

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

    contentDesc: `Petite affiche réalisée pour un cours de design au Québec. Le but était d'expérimenter avec Photoshop et les concepts de base de composition, de choix esthétiques... J'ai donc réalisé une affiche pour un festival de tatouage fictif en m'inspirant énormément de ce qui se faisait pour des événements similaires, notamment avec l'usage d'une figure féminine centrale, les ornements ou encore la palette de couleurs. `,
    
    Logiciels:["Photoshop"],
    
  },

  {
    Title: "Azurites",
    Description: "Bande dessinée",
    Year: 2022,
    Icon: "images/icons/2d.png",
    Background: "images/backgrounds/azurites.jpg",

    contentDesc: `BD réalisée dans le cadre des 23h de la Bande Dessinée 2022. Un thème ("Mythes Anachroniques") et une contrainte (Présence d'un élément bleu au long du récit) étaient imposés ainsi que le nombre de pages, 24. <br><br> Nous avons, en duo, dessiné et écrit sous la forme d'alexandrins, Azurites, le conte plein d'espoir de deux monolithes âmes soeurs. Nous nous sommes inspirés de récits shakespeariens, bibliques mais aussi de bandes dessinées, notamment des Yeux du Chat de Moebius et Jodorowsky. `,

    projectLink:"https://23hbd.com/participants/2022/commandant-grant",
    Logiciels:["Photoshop"],
    Equipe:["Tristan Debeaune"]

  },

  {
    Title: "∫.",
    Description: "Dessin",
    Year: 2022,
    Icon: "images/icons/2d.png",
    Background: "images/backgrounds/integrale.jpg",

    contentDesc: `Affiche A0 (84,1 x 118,9 cm) réalisée aux feutres noirs.  `,
    
    Equipe:["Tristan Debeaune"]
  },

  {
    Title: "Cartographie de l'ISS",
    Description: "Design",
    Year: 2021,
    Icon: "images/icons/2d.png",

    
    Background: "images/backgrounds/iss.jpg",

    contentDesc: `Exercice de design pour s'approprier la suite Adobe et les principes d'arts appliqués : réaliser et appliquer une charte graphique, des pictogrammes, une mise en page... <br><br> Nous avons "re-brandé" et cartographié la Station Spatiale Internationale en adoptant un style moderne rappelant la technologie et l'espace. `,
    
    Equipe:["Axel Dona"],
    Logiciels:["InDesign", "Illustrator", "Photoshop"]
  },

  {
    Title: "InkTober",
    Description: "Dessin",
    Year: 2021,
    Icon: "images/icons/2d.png",
    
    contentDesc: `Quelques dessins aux feutres noirs réalisés lors du défi "InkTober" de 2021, consistant à réaliser un dessin par jour pendant tout le mois d'octobre. `,

    Background: "images/backgrounds/ink.jpg",
  },
];

// 3D

let cat3Data = [
  {
    Title: "Egyptian Racing Game",
    Description: "Modélisation 3D et jeu vidéo",
    Year: 2024,
    Icon: "images/icons/3d.png",
    projectLink:"https://wendywendo.itch.io/egyptian-racing",

    contentDesc: `Nous avons modélisé un pack d'assets en 24h sur le thème d'un jeu de course égyptien. Si j'ai modélisé quelques objets comme le vase et le sceptre, j'ai principalement texturé les objets sur Substance Painter en utilisant la technique de hand-painting et les peignant directement à la tablette graphique.<br><br>

    Par la suite, j'ai utilisé nos objets dans un petit prototype de jeu Unity, où l'on contrôle l'un des chars pour ramasser des objets, l'autre char étant contrôlé par l'ordinateur.`,

    Logiciels:["Substance Painter", "Maya", "Unity"],
    
    Equipe:["Maëlle Fleitz", "Loïc Quinquenel"]
  },

  {
    Title: "Diorama d'un.e voyant.e moderne",
    Description: "Modélisation 3D",
    Year: 2024,
    Icon: "images/icons/3d.png",
    projectLink:"https://skfb.ly/oQXZn",

    contentDesc: `Scène et objets entièrement modélisés sur le logiciel Maya. Le but était de réaliser un "diorama", petite scène fixe, consistant en une pièce remplie d'au moins 20 objets. <br><br>

    J'ai choisi de créer le repaire d'un ou une voyante, l'Oracle, un genre de médium doté de pouvoirs de divination évoluant dans un jeu moderne ou futur proche (d'où la présence d'ordinateur et téléphone). J'ai donc choisi un style coloré, rappelant aussi, par les couleurs, le mystère et l'ésotérisme.<br><br>
    
    Le texturing devait être fait sur Photoshop en utilisant la technique de gradient texturing (avec des dégradés de couleur), j'ai aussi dessiné quelques textures supplémentaires pour les objets plans (sur le mur extérieur, par exemple !) mais aussi pour les raies de lumière inondant la pièce. J'ai également utilisé du cel-shading pour ajouter les contours noirs et donner un aspect plus dessin à la scène et aux objets.`,

    Logiciels:["Maya", "Photoshop"]
  },
  
  {
    Title: "Honni soit qui mal y pense",
    Description: "Illustration 3D",
    Year: 2024,
    Icon: "images/icons/3d.png",
    projectLink:"https://skfb.ly/oSrYx",

    contentDesc: `<img src="images/projects/hsqmyp.png" alt="" />Œuvre numérique personnelle en volume sur le thème de ma double nationalité franco-britannique. `,

    Logiciels:["Maya", "Illustrator"]
  },



  {
    Title: "The Racer",
    Description: "Motion Capture et animation 3D",
    Year: 2023,
    Icon: "images/icons/3d.png",
    Background: "images/backgrounds/racer.jpg",

    contentDesc: `Vidéo réalisée entièrement en utilisant la technique de Motion Capture (capture de mouvement). <br><br>
    Après avoir choisi un rig sur le site Mixamo.com, écrit un scénario et capté les mouvements d'un acteur dans la peau d'un personnage en 3D, nous avons nettoyé les animations puis intégré celles-ci dans une scène avec des objets, des personnages, des caméras et des lumières en utilisant le moteur Unreal 5 (partie sur laquelle j'ai le plus participé, me permettant d'apprendre à utiliser ce moteur de jeu). `,

    projectLink: "https://www.youtube.com/watch?v=g5dnoDgv3nQ",

    Logiciels:["Motion Builder", "Unreal Engine 5", "After Effects"],
    Equipe:["Tristan Debeaune", "Samy Gaci", "Martin Rabadeux"]
  },

  {
    Title: "Metropolis",
    Description: "Compositing 3D",
    Year: 2023,
    Icon: "images/icons/3d.png",
    Background: "images/backgrounds/metropolis.jpg",

    contentDesc: `Image réalisée avec le moteur de rendu Arnold sur 3ds Max. Le but n'était pas de modéliser des objets mais de rendre une image avec une belle composition, éclairage et effets. Nous nous sommes inspirés de plans du film Metropolis, mais aussi du Néo-Tokyo d'Akira ou encore de la BD "Les Cités obscures". `,
    
    Logiciels:["3ds Max", "Photoshop"],
    Equipe:["Tristan Debeaune"]
  },

  {
    Title: "Lucario et micro-environnement",
    Description: "Modélisation 3D",
    Year: 2023,
    Icon: "images/icons/3d.png",
    Background: "images/backgrounds/lucario.jpg",

    contentDesc: `Scène modélisée sur le logiciel 3ds Max. Nous avons modélisé des Pokémon et un micro-environnement dans lequel les placer, à la manière d'un petit diorama. `,

    Logiciels:["3ds Max"],
    Equipe:["Tristan Debeaune"]
  },

  {
    Title: "Maison Post-Apocalyptique",
    Description: "Modélisation 3D",
    Year: 2023,
    Icon: "images/icons/3d.png",
    Background: "images/backgrounds/postapo.jpg",
    projectLink:"https://skfb.ly/oR6tH",
    contentDesc: `Scène architecturale et objets modélisés sur le logiciel 3ds Max. `,

    Logiciels:["3ds Max"],
    Equipe:["Tristan Debeaune"]
  },

  {
    Title: "Infinitimac",
    Description: "Modélisation et animation 3D",
    Year: 2022,
    Icon: "images/icons/3d.png",
    Background: "images/backgrounds/infinitimac.jpg",

    projectLink:"https://www.youtube.com/watch?v=tNsp-72OZuw",
    
    contentDesc: `Scène modélisée sur Blender et rendu avec le moteur Eevee. Il s'agissait d'un projet à l'échelle de la classe, chacun.e devant modéliser et animer une séquence de quelques secondes sur le thème de son choix présentant un élément circulaire central. Le chargé de cours de Création 3D a ensuite assemblé toutes les séquences ! <br><br> J'ai choisi de créer une scène spatiale, l'effet "pixellisé" est voulu car inspiré de l'esthétique Demake (rappelant de vieux jeux, comme sur la Playstation 1).`,

    Logiciels:["Blender"]
  },
];

// Audiovisuel

let cat4Data = [
  {
    Title: "Dōga",
    Description: "Générique",
    Year: 2024,
    Icon: "images/icons/video.png",

    Background: "images/backgrounds/doga.jpg",

    contentDesc:`<iframe width="560" height="315" src=" https://www.youtube.com/embed/zfWhahruxG0?si=NMMtRjXuFWwHxe1V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> Générique d'une série animée fictive (1min10). <br><br>

    Dans le cours "Image en mouvement" à l'université, nous devions inventer et réaliser le générique d'une série. Nous avons imaginé une série animée japonaise sur le thème du cours lui-même, où apparaissent l'université, nous-mêmes, nos camarades et notre professeur, dans un style inspiré d'openings colorés tels que JoJo'S Bizarre Adventure ou encore Cyberpunk: Edgerunners.
     `,

    Logiciels:["After Effects", "Illustrator", "Photoshop"],
    Equipe:["Tristan Debeaune"]
  },

  {
    Title: "Migratory Birds And Why They Don't Fly Alone",
    Description: "Générique",
    Year: 2023,
    Icon: "images/icons/video.png",

    Background: "images/backgrounds/migratory.jpg",

    contentDesc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/iD8X52fKtsQ?si=GcRI5lqPdG_mL-cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> Générique d'un film fictif (2min09). <br><br>Nous devions inventer le logo d'un studio et d'une boîte de production, ainsi que le synopsis d'un long-métrage, les noms des acteurs et équipe technique, et en réaliser le générique (ou "Title Sequence"). Nous avons donc écrit Migratory Birds (And Why They Don't Fly Alone), un road-movie des années 70, racontant l'histoire d'une américaine en cavale et d'un jeune britannique en quête d'aventures, sillonnant les routes des États-Unis. <br><br> Si nous avons imaginé et storyboardé le générique ensemble, mon binôme a modélisé et animé les plans sur Blender et j'ai fait tout le montage, l'editing et le sound design, sur After Effects. `,

    Logiciels:["Blender", "After Effects"],
    Equipe:["Tristan Debeaune"]
  },

  {
    Title: "Méduse",
    Description: "Court-métrage",
    Year: 2022,
    Icon: "images/icons/video.png",

    Background: "images/backgrounds/meduse.jpg",

    contentDesc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/_5DUpCFF6bg?si=Pb-4LdhLeXTKjpnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> "Ça fait quoi, d'aller plus vite que tout le monde ?"<br><br> Court-métrage de science-fiction (13min55) réalisé par Axel Dona. <br><br>J'ai principalement participé à l'écriture, au cadrage et au montage. J'apparais aussi en tant que figurante et comme doublure de Morgane, le personnage principal, une jeune femme qui semble (sur)vivre dans un monde où le temps s'est arrêté. Nous avons ainsi pu nous amuser à la réalisation et aux effets spéciaux pour simuler cette pause du cours du temps et en exploiter les rouages.`,

    Logiciels:["Premiere Pro", "After Effects", "Blender"],
    Equipe:["Benjamin Amrani", "Axel Dona", "Aurélien Droissart", "Tristan Debeaune"]
  },

    {
    Title: "5M ETG",
    Description: "Musique",
    Year: 2022,
    Icon: "images/icons/music.png",

    

    Logiciels:["ProTools"],
    Equipe:["Tristan Debeaune"],

    contentDesc:`<iframe width="315" height="315" src="https://www.youtube.com/embed/fSZmFKYWb-E?si=MgMCKMAm3PtviCfV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> Composition (1min59). <br><br> Très inspirés par la musique concrète de Pierre Schaeffer, nous avons composé et mixé 5M ETG en enregistrant divers sons dans un appartement et dans l'immeuble : clés, porte qui grince, tapotements des doigts, horloge... et notamment la voix dans l'ascenseur, qui a donné son nom à cette oeuvre lorsqu'elle a scandé "cinquième étage".`
  },

  {
    Title: "Œ",
    Description: "Court-métrage",
    Year: 2021,
    Icon: "images/icons/video.png",

    
    Background: "images/backgrounds/oe.jpg",

    contentDesc:`<iframe width="560" height="315" src="https://www.youtube.com/embed/JlQN5H2ydi8?si=sCPlXtKL-2B8OnQN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> Court-métrage (7min44) réalisé par Mattéo Leclercq et Romain Serres. <br><br> Premier court-métrage auquel j'ai participé, j'ai principalement été cadreuse. Voyage solitaire et sans dialogue sur le thème du rêve et de l'étrange, Œ était surtout l'occasion d'expérimenter avec les fondements du cinéma et les techniques qui lui sont propres, en tournant nos séquences aussi bien en intérieur qu'en extérieur dans plusieurs endroits de la région parisienne.  `,

    Logiciels:["Premiere Pro", "After Effects"],
    Equipe:["Tristan Debeaune", "Quentin Huet", "Elise Massa", "Mattéo Leclercq", "Romain Serres"]
  },
];

// Musique

// let cat5Data = [
//   {
//     Title: "5M ETG",
//     Description: "Musique",
//     Year: 2022,
//     Icon: "images/icons/music.png",

    

//     Logiciels:["ProTools"],
//     Equipe:["Tristan Debeaune"],

//     contentDesc:`<iframe width="315" height="315" src="https://www.youtube.com/embed/fSZmFKYWb-E?si=MgMCKMAm3PtviCfV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> Composition (1min59). <br><br> Très inspirés par la musique concrète de Pierre Schaeffer, nous avons composé et mixé 5M ETG en enregistrant divers sons dans un appartement et dans l'immeuble : clés, porte qui grince, tapotements des doigts, horloge... et notamment la voix dans l'ascenseur, qui a donné son nom à cette oeuvre lorsqu'elle a scandé "cinquième étage".`
//   },
// ];

//Friends

let cat5Data = [
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

  {
    Title: "Maëlle Fleitz",
    Description: "",
    Link: "https://matraellix.artstation.com/",
    Icon: "images/icons/3d.png",
  },

  {
    Title: "Benjamin Razafimanantsoa",
    Description: "",
    Link: "https://ben-raza.fi/",
    Icon: "images/icons/video.png",
  },

  {
    Title: "Loïc Quinquenel",
    Description: "",
    Link: "https://loicquinquenel.fr/",
    Icon: "images/icons/links.png",
  },
];

let friendLinks = [];
for (let i in cat5Data) {
  friendLinks.push(cat5Data[i].Link);
}

let allDataFR = [
  cat0Data,
  cat1Data,
  cat2Data,
  cat3Data,
  cat4Data,
  cat5Data,
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


