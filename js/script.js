gsap.to(".voile", {
  duration: 1,
  ease: "power3.out",
  display:"none",
  delay:0.1,
});

gsap.from("body", {
  duration: 3,
  ease: "power3.out",
  opacity: 0,
  delay:1,
});

gsap.from(".menu", {
  scale:1.1,
  duration: 2,
  ease: "power3.out",
  opacity: 0,
  delay:3,
});

// Horloge

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  let day = today.getDate();
  let month = today.getMonth() + 1;
  document.getElementById("clock").innerHTML =
    day + "/" + month + "  " + h + ":" + m;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// GSAP

gsap.registerPlugin(ScrollTrigger);

/* Default */
gsap.defaults({
  ease: "power4.out",
  duration: 1,
});

initProjects(allDataFR);

let currentCat = 0; // Catégorie actuelle
let currentProj = [0, 0, 0, 0, 0, 0, 0]; // Projet actuel pour chacune des catégories

focusCat();
focusProj();

// Son
let back = document.querySelector("#back");
let forth = document.querySelector("#forth");

function focusCat() {
  // Toutes les catégories sont à opacité 0.5 et ont titre et projet cachés...
  for (let i = 0; i < nbCat; i++) {
    document.querySelector(".cat" + i + " .projects").style.display = "none";
    document.querySelector(".cat" + i + " .title span").style.display = "none";
    document.querySelector(".cat" + i + " .title ").style.opacity = "0.5";

    // ... sauf la catégorie actuelle (titre et projets affichés + opacité 1)
    if (i === currentCat) {
      document.querySelector(".cat" + i + " .projects").style.display = "flex";
      document.querySelector(".cat" + i + " .title span").style.display =
        "block";
      document.querySelector(".cat" + i + " .title ").style.opacity = "1";
    }
  }
}

function focusProj() {
  // Projet actuel dans catégorie actuelle (exemple : cat0 proj3 : [3, ..., ..., ..., ..., ...])
  let currentProjI = currentProj[currentCat];

  // Nb projets total de la catégorie actuelle (exemple : 5 projets dans cat0 : [5, ..., ..., ..., ..., ...])
  let nbProjI = nbProj[currentCat];

  // Affichage de l'image de fond (s'il y en a une)
  if (BackgroundImg[currentCat][currentProj[currentCat]]) {
    // Fade in video
    gsap.to("#background-video", {
      duration: 0.5,
      opacity: 1,
      ease: "power3.out",
      delay: 0,
    });

    // Fade out video
    gsap.to("#background-video", {
      duration: 0.5,
      opacity: 0,
      delay: 1,
    });

    // Changement de l'url de l'image de fond (projet)
    gsap.to("html", {
      duration: 0,
      ease: "power3.out",
      background:
        "url(" +
        BackgroundImg[currentCat][currentProj[currentCat]] +
        ") no-repeat center center fixed",
      delay: 0.5,
    });
  }

  // Fade in video (si pas d'image de fond pour le projet)
  if (BackgroundImg[currentCat][currentProj[currentCat]] === undefined) {
    gsap.to("#background-video", {
      duration: 1,
      opacity: 1,
      ease: "power3.out",
      delay: 0.5,
    });
  }

  // Changement du message en bas à droite (commandes)
  let commands = document.querySelector("#commands");

  if (
    // Liens de moi et ami.es
    (Links[currentProj[currentCat]] && currentCat === 0) ||
    currentCat === 6
  ) {
    gsap.to(commands, {
      duration: 1,
      ease: "power3.out",
      innerHTML: "↵ Entrée pour accéder au site.",
      opacity: 1,
    });
  } else {
    // Message par défaut
    gsap.to(commands, {
      duration: 1,
      ease: "power3.out",
      innerHTML: "⇅ ⇄ Pour naviguer, utilisez les flèches directionnelles.",

      opacity: 1,
    });
  }

  // Accès au projet
  if (currentCat === 0 && currentProj[currentCat] === 3) {
    gsap.to(commands, {
      duration: 1,
      ease: "power3.out",
      innerHTML: "↵ Entrée pour accéder.",
      opacity: 1,
    });
  }

  // AFFICHAGE

  // On parcourt tous les projets de la catégorie actuelle...
  for (let i = 0; i < nbProjI; i++) {
    // Opacité 0.5
    gsap.to(".cat" + currentCat + " .projects" + " .proj" + i, {
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
      opacity: 0.5,
      animation: "none",
    });

    // Le texte ne brille pas
    gsap.to(
      ".cat" +
        currentCat +
        " .projects" +
        " .proj" +
        i +
        " .proj-text .proj-title",
      {
        duration: 0.3,
        ease: "power3.out",
        animation: "none",
      }
    );

    // Projet actuel : opacité 1 et le texte brille + décalage vertical du i-1
    if (i === currentProjI) {
      gsap.to(".cat" + currentCat + " .projects" + " .proj" + i, {
        scale: 1.1,
        duration: 0.3,
        ease: "power3.out",
        opacity: 1,
        y: 0,
      });
      gsap.to(
        ".cat" +
          currentCat +
          " .projects" +
          " .proj" +
          i +
          " .proj-text .proj-title",
        {
          duration: 0.3,
          ease: "power3.out",
          animation: "clignotement 3s infinite",
        }
      );

      // Décalage vertical du projet i-1 pour qu'il aille au-dessus de la catégorie
      if (i > 0) {
        gsap.to(".cat" + currentCat + " .projects" + " .proj" + (i - 1), {
          duration: 0.3,
          ease: "power3.out",
          y: -20 + "vh",
        });
      }
    }
  }
}

// Navigation clavier

document.body.addEventListener("keydown", (e) => {
  if (!colorPanelOpen) {
    // Bas (projet)
    if (e.key === "ArrowDown" && !projectOpen) {
      currentProj[currentCat]++;

      if (currentProj[currentCat] >= nbProj[currentCat]) {
        currentProj[currentCat] = nbProj[currentCat] - 1;
      }

      let catProj = document.querySelector(".cat" + currentCat + " .projects");
      gsap.to(catProj, {
        y: -20 * currentProj[currentCat] + "vh",
        duration: 0.3,
        ease: "power3.out",
      });

      forth.play();
      focusCat();
      focusProj();

      // Haut (projet)
    } else if (e.key === "ArrowUp"  && !projectOpen) {
      currentProj[currentCat]--;

      if (currentProj[currentCat] <= 0) {
        currentProj[currentCat] = 0;
      }

      let catProj = document.querySelector(".cat" + currentCat + " .projects");
      gsap.to(catProj, {
        y: -20 * currentProj[currentCat] + "vh",
        duration: 0.3,
        ease: "power3.out",
      });

      forth.play();
      focusCat();
      focusProj();

      // Droite (catégorie)
    } else if (e.key === "ArrowRight"  && !projectOpen) {
      currentCat++;
      if (currentCat >= nbCat) {
        currentCat = nbCat - 1;
      }
      gsap.to(".menu", {
        x: -200 * currentCat,
        duration: 0.3,
        ease: "power3.out",
      });

      forth.play();
      focusCat();
      focusProj();

      // Gauche (catégorie)
    } else if (e.key === "ArrowLeft"  && !projectOpen) {
      currentCat--;
      if (currentCat <= 0) {
        currentCat = 0;
      }
      gsap.to(".menu", {
        x: -200 * currentCat,
        duration: 0.3,
        ease: "power3.out",
      });
      forth.play();
      focusCat();
      focusProj();
    }
  }
});

// Navigation souris

// Scroll vertical (projet) et scroll horizontal (catégories)

document.body.addEventListener("wheel", function (event) {
  if (!colorPanelOpen && !projectOpen) {
    // Scroll vers le bas
    if (event.deltaY > 0) {
      currentProj[currentCat]++;

      if (currentProj[currentCat] >= nbProj[currentCat]) {
        currentProj[currentCat] = nbProj[currentCat] - 1;
      }

      let catProj = document.querySelector(".cat" + currentCat + " .projects");
      gsap.to(catProj, {
        y: -20 * currentProj[currentCat] + "vh",
        duration: 0.3,
        ease: "power3.out",
      });

      // Scroll vers le haut
    } else if (event.deltaY < 0) {
      currentProj[currentCat]--;

      if (currentProj[currentCat] <= 0) {
        currentProj[currentCat] = 0;
      }

      let catProj = document.querySelector(".cat" + currentCat + " .projects");
      gsap.to(catProj, {
        y: -20 * currentProj[currentCat] + "vh",
        duration: 0.3,
        ease: "power3.out",
      });
    }

    forth.play();
    focusCat();
    focusProj();
  }
});

// Clic sur une catégorie pour y aller directement
function jumpTo(n) {
  if (!colorPanelOpen && !projectOpen) {
    currentCat = n;
    if (currentCat >= nbCat) {
      currentCat = nbCat - 1;
    }
    if (currentProj[currentCat] <= 0) {
      currentProj[currentCat] = 0;
    }
    gsap.to(".menu", {
      x: -200 * currentCat,
      duration: 0.3,
      ease: "power3.out",
    });

    focusCat();
    focusProj();

    forth.play();
  }
}

// Clic sur un projet pour y aller directement
function jumpToProj(n) {
  if (!colorPanelOpen  && !projectOpen) {
    if (n >= currentProj[currentCat]) {
      currentProj[currentCat]++;
    } else {
      currentProj[currentCat]--;
    }

    if (currentProj[currentCat] >= nbProj[currentCat]) {
      currentProj[currentCat] = nbProj[currentCat] - 1;
    }

    let catProj = document.querySelector(".cat" + currentCat + " .projects");
    gsap.to(catProj, {
      y: -20 * currentProj[currentCat] + "vh",
      duration: 0.3,
      ease: "power3.out",
    });

    if (currentProj[currentCat] <= 0) {
      currentProj[currentCat] = 0;
    }

    gsap.to(catProj, {
      y: -20 * currentProj[currentCat] + "vh",
      duration: 0.3,
      ease: "power3.out",
    });

    forth.play();

    focusCat();
    focusProj();
  }
}

// add les jumpTo aux event listeners des icones
function addJumpToEvents() {
  for (let i = 0; i < nbCat; i++) {
    document
      .querySelector(`.cat${i} .title`)
      .addEventListener("click", function () {
        jumpTo(i);
      });

    for (let j = 0; j < nbProj[i]; j++) {
      document
        .querySelector(`.cat${i} .proj${j} .project-icon`)
        .addEventListener("click", function () {
          jumpToProj(j);
        });
    }
  }
}

addJumpToEvents();

let colorPanelOpen = false;

// Bouton Enter (liens et panneau couleur)

document.body.addEventListener("keydown", (e) => {
  // Liens des ami.es
  if (e.key === "Enter" && currentCat === 6) {
    forth.play();
    if (friendLinks[currentProj[currentCat]])
      window.open(friendLinks[currentProj[currentCat]], "_blank");
  }

  // Lien Linktree
  if (e.key === "Enter" && currentCat === 0) {
    if (Links[currentProj[currentCat]]) {
      forth.play();
      window.open(Links[currentProj[currentCat]], "_blank");
    }
  }

  // Panneau choix du thème / couleur (cat0 proj3)
  if (e.key === "Enter" && currentCat === 0 && currentProj[currentCat] === 3) {
    // Ouvrir le panneau
    if (!colorPanelOpen) {
      forth.play();
      document.querySelector(".color-change").style.display = "flex";
      gsap.from(".color-change", {
        duration: 1,
        x: 100,
      });
      gsap.to(commands, {
        duration: 1,
        ease: "power3.out",
        innerHTML:
          "⇅ ⇄ Utilisez les flèches pour sélectionner un thème. <br>↵ Entrée pour quitter.",

        opacity: 1,
      });
      colorPanelOpen = true;
    } else {
      // Fermer le panneau
      back.play();
      document.querySelector(".color-change").style.display = "none";
      colorPanelOpen = false;
      gsap.to(commands, {
        duration: 1,
        ease: "power3.out",
        innerHTML: "↵ Entrée pour accéder.",
        opacity: 1,
      });
    }
  }
});

// Change la couleur du fond
function changeColor(n) {
  gsap.to("#background-video", {
    duration: 1,
    filter: "hue-rotate(" + n + "deg)",
  });

}

// Les boutons de couleur dans le panneau couleur : 12 boutons sur 360deg de la hue rotate (360/12=30)
function initColors() {
  let menu = document.querySelector(".color-change");

  for (let i = 0; i < 12; i++) {
    menu.innerHTML += `<div class="color" id="color${i}"></div>`;

    document.querySelector(`#color${i}`).style.filter =
      "hue-rotate(" + i * 30 + "deg)";
  }
}

initColors();

// Par défaut, hue rotate à 0. Le premier bouton est sélectionné
let currentColor = 0;
document.querySelector("#color0").style.boxShadow = "2px 2px 5px white";

// Flèches haut/bas pour choisir couleur
document.body.addEventListener("keydown", (e) => {
  if (colorPanelOpen) {
    // Bas
    if (e.key === "ArrowDown") {
      currentColor += 1;
      forth.play();

      if (currentColor > 11) {
        currentColor = 11;
      }

      changeColor(currentColor * 30);

      for (let i = 0; i < 12; i++) {
        document.querySelector("#color" + i).style.boxShadow =
          "2px 2px 5px black";
      }
      document.querySelector("#color" + (currentColor % 12)).style.boxShadow =
        "2px 2px 5px white";
    }

    // Haut
    if (e.key === "ArrowUp") {
      forth.play();
      currentColor -= 1;

      if (currentColor < 0) {
        currentColor = 0;
      }

      for (let i = 0; i < 12; i++) {
        document.querySelector("#color" + i).style.boxShadow =
          "2px 2px 5px black";
      }
      document.querySelector("#color" + (currentColor % 12)).style.boxShadow =
        "2px 2px 5px white";
    }
    changeColor(currentColor * 30);
  }
});

// Gestion de l'entrée dans un projet

let projectOpen = false;

function enterProject() {
  projectOpen = true;


  let nbProjI = nbProj[currentCat];
  let currentProjI = currentProj[currentCat];

  fillProjectContent(currentCat, currentProjI);

  // Affiche le texte du projet

  document.querySelector(".project-content").style.display = "block";
  gsap.from(".project-content", {
    duration: 2,
    ease: "power3.out",
    opacity: 0,
  });

  // On parcourt tous les projets de la catégorie actuelle...
  for (let i = 0; i < nbProjI; i++) {
    // Opacité 0
    gsap.to(".cat" + currentCat + " .projects" + " .proj" + i, {
      duration: 0.3,
      ease: "power3.out",
      opacity: 0,
    });

    if (i === currentProjI) {
      gsap.to(".cat" + currentCat + " .projects" + " .proj" + i, {
        scale: 1.5,
        duration: 1,
        ease: "power3.out",
        opacity: 1,
      });

      gsap.to(".proj" + i + " .proj-text", {
        scale: 1.3,
        duration: 1,
        ease: "power3.out",
        opacity: 0,
        y: 0,
      });
    }
  }

  gsap.to(commands, {
    duration: 1,
    ease: "power3.out",
    innerHTML: "↵ Entrée pour quitter.",
    opacity: 1,
  });
}

function quitProject() {
  projectOpen = false;
  window.scrollTo(0,0); 

  let nbProjI = nbProj[currentCat];
  let currentProjI = currentProj[currentCat];

  // Affiche le texte du projet

  document.querySelector(".project-content").style.display = "none";

  // On parcourt tous les projets de la catégorie actuelle...
  for (let i = 0; i < nbProjI; i++) {
    // Opacité 0
    gsap.to(".cat" + currentCat + " .projects" + " .proj" + i, {
      duration: 0.3,
      ease: "power3.out",
      opacity: 1,
    });
    if (i === currentProjI) {
      gsap.to(".cat" + currentCat + " .projects" + " .proj" + i, {
        scale: 1.1,
        duration: 1,
        ease: "power3.out",
        opacity: 1,
        delay: 0.2,
      });

      gsap.to(".proj" + i + " .proj-text", {
        scale: 1.1,
        duration: 1,
        ease: "power3.out",
        opacity: 1,
        y: 0,
        delay: 0.2,
      });
    }
  }

  focusProj();
}

// Bouton Enter (enter project)
document.body.addEventListener("keydown", (e) => {
  console.log(projectOpen);
  if (e.key === "Enter" && currentCat !== 0 && currentCat !== 6) {
    if (!projectOpen) enterProject();
    else quitProject();
  }

  if (e.key === "Enter" && currentCat === 0 && currentProj[currentCat] === 2) {
    if (!projectOpen) enterProject();
    else quitProject();
  }

});

// Traduction anglais / français

// let currentLan = "FR";

// let languageButton =  document.querySelector("#language-selector");

// function switchLanguage() {
//   if (currentLan=="FR") {
//     currentLan="EN";
//     languageButton.innerHTML="FR";
//     commands.innerHTML="Use whether the arrows or your cursor and wheel to browse."
//     initProjects(allDataEN);
//   }
//   else {
//     currentLan="FR";
//     languageButton.innerHTML="EN";
//     commands.innerHTML="Pour naviguer, utilisez les flèches ou bien le curseur et la molette."
//     initProjects(allDataFR);
//   }

// }

// languageButton.addEventListener("click", function(){switchLanguage();});
