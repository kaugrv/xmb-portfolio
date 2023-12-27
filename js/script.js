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

/* Register */
gsap.registerPlugin(ScrollTrigger);

/* Default */
gsap.defaults({
  ease: "power4.out",
  duration: 1,
});

initProjects();

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
    document.querySelector(".cat" + i + " .title span").style.display = "none";
    document.querySelector(".cat" + i + " .projects").style.display = "none";
    document.querySelector(".cat" + i + " .title ").style.opacity = "0.5";

    // ... sauf la catégorie actuelle (titre et projets afficghés + opacité 1)
    if (i === currentCat) {
      document.querySelector(".cat" + i + " .title span").style.display =
        "block";
      document.querySelector(".cat" + i + " .title ").style.opacity = "1";
      document.querySelector(".cat" + i + " .projects").style.display = "flex";
    }
  }
}

function focusProj() {
  // Projet actuel dans catégorie actuelle (exemple : cat0 proj3 : [3, ..., ..., ..., ..., ...])
  let currentProjI = currentProj[currentCat];

  // Nb projets total de la catégorie actuelle (exemple : 5 projets dans cat0 : [5, ..., ..., ..., ..., ...])
  let nbProjI = nbProj[currentCat];

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

    // Projet actuel : opacité 1 et le texte brille
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

  // Bas (projet)
  if (e.key === "ArrowDown") {
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

  // Haut (projet)
  } else if (e.key === "ArrowUp") {
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


   // Droite (catégorie)
  } else if (e.key === "ArrowRight") {
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

  // Gauche (catégorie)
  } else if (e.key === "ArrowLeft") {
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
  }

  focusCat();
  focusProj();
});

// Navigation souris

// Scroll vertical (projet) et scroll horizontal (catégories)

document.body.addEventListener("wheel", function (event) {

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
});


// Clic sur une catégorie pour y aller directement
function jumpTo(n) {
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



function jumpToProj(n) {
  currentProj[currentCat] = n;

  
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


function addJumpToEvents() {
  for (let i=0; i<nbCat; i++) {
    document.querySelector(`.cat${i} .title`).addEventListener("click", function () {
      jumpTo(i);
    });

    for (let j=0; j<nbProj[i]; j++) {
      document.querySelector(`.cat${i} .proj${j} .project-icon`).addEventListener("click", function () {
        jumpToProj(j);
      });
      
    }
  }

}


addJumpToEvents();
