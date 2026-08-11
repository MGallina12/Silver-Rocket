gsap.registerPlugin(ScrollTrigger);

/* ---------------- sombre - clair ---------------- */

const boutonTheme = document.querySelector("#bouton__theme");
const iconeTheme = document.querySelector("#icone__theme");
const logoInstagram = document.querySelector("#logo__instagram");
const logoFacebook = document.querySelector("#logo__facebook");

boutonTheme.addEventListener("click", () => {
  document.body.classList.toggle("theme__clair");

  if (document.body.classList.contains("theme__clair")) {
    iconeTheme.src = "images/lune.png";
    logoInstagram.src = "images/instaNoirBlanc.png";
    logoFacebook.src = "images/facebookNoirBlanc.png";
  } else {
    iconeTheme.src = "images/soleil.png";
    logoInstagram.src = "images/instaBlanc.png";
    logoFacebook.src = "images/facebookBlanc.png";
  }
});

/* ---------------- constantes ---------------- */

const page = document.querySelector(".page");
const fusee = document.querySelector(".fusee__parcours");
const imageFusee = document.querySelector(".fusee__image");
const pieceFusee = document.querySelector(".fusee__piece");

const ecran1 = document.querySelector("#ecran__1");
const ecran2 = document.querySelector("#ecran__2");
const ecran3 = document.querySelector("#ecran__3");
const ecran4 = document.querySelector("#ecran__4");
const ecran5 = document.querySelector("#ecran__5");
const ecranJeu = document.querySelector("#ecran__jeu");
const ecran6 = document.querySelector("#ecran__6");

const elementsFusee = document.querySelectorAll(".interaction__fusee");

/* ---------------- images fusée ---------------- */

const imagesFusee = [
  "images/fusee/fusee_seul.png",
  "images/fusee/fusee_partie_1.png",
  "images/fusee/fusee_partie_2.png",
  "images/fusee/fusee_partie_3.png",
  "images/fusee/fusee.png"
];

const piecesFusee = [
  "images/fusee/partie_haut_fusee.png",
  "images/fusee/roquette_milieu.png",
  "images/fusee/roquette_gauche.png",
  "images/fusee/rockette_droite.png"
];

/* ---------------- position fusée ---------------- */

let positionFuseeActuelle = {
  ecran: ecran1,
  x: 78,
  y: 48,
  rotation: 18
};

let etapeFusee = 0;

/* position de base de la fusée */
gsap.set(fusee, {
  xPercent: -50,
  yPercent: -50
});

gsap.set(pieceFusee, {
  opacity: 0,
  x: 0,
  y: 0
});

/* ---------------- fonction bouger fusée ---------------- */

function bougerFusee(ecran, positionX, positionY, rotation, duree = 1) {
  const x = page.clientWidth * (positionX / 100);
  const y = ecran.offsetTop + ecran.offsetHeight * (positionY / 100);

  positionFuseeActuelle = {
    ecran: ecran,
    x: positionX,
    y: positionY,
    rotation: rotation
  };

  gsap.to(fusee, {
    left: x,
    top: y,
    rotation: rotation,
    duration: duree,
    ease: "power2.inOut"
  });
}

/* ---------------- fonction construire fusée ---------------- */

function construireFusee(numeroEtape, departX, departY) {
  if (numeroEtape <= etapeFusee) return; /*emeche de faire une étape déjà faite*/

  const indexPiece = numeroEtape - 1;

  pieceFusee.src = piecesFusee[indexPiece];

  gsap.set(pieceFusee, {
    x: departX,
    y: departY,
    opacity: 1,
    scale: 1
  });

  gsap.to(pieceFusee, {
    x: 0,
    y: 0,
    duration: 0.9,
    ease: "power2.inOut",
    onComplete: () => {
      imageFusee.src = imagesFusee[numeroEtape];

      gsap.set(pieceFusee, {
        opacity: 0,
        x: 0,
        y: 0
      });

      gsap.fromTo(
        fusee,
        { scale: 1 },
        {
          scale: 1.08,
          duration: 0.15,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut"
        }
      );

      etapeFusee = numeroEtape;
    }
  });
}

/* ---------------- position de départ ---------------- */

window.addEventListener("load", () => {
  imageFusee.src = imagesFusee[0];
  bougerFusee(ecran1, 78, 48, 18, 0);
});

/* ---------------- écran 1 ---------------- */

ScrollTrigger.create({
  trigger: ecran1,
  start: "top 60%",
  onEnter: () => {
    bougerFusee(ecran1, 78, 48, 18);
  },
  onEnterBack: () => {
    bougerFusee(ecran1, 78, 48, 18);
  }
});

/* ---------------- écran 2 ---------------- */

ScrollTrigger.create({
  trigger: ecran2,
  start: "top 60%",
  onEnter: () => {
    bougerFusee(ecran2, 72, 70, 36);
    construireFusee(1, 0, -180);
  },
  onEnterBack: () => {
    bougerFusee(ecran2, 72, 70, 36);
  }
});

/* ---------------- écran 3 ---------------- */

ScrollTrigger.create({
  trigger: ecran3,
  start: "top 60%",
  onEnter: () => {
    bougerFusee(ecran3, 45, 55, 0);
    construireFusee(2, 90, -180);
  },
  onEnterBack: () => {
    bougerFusee(ecran3, 45, 55, 0);
  }
});

/*acordéon*/

const boutonsThematique = document.querySelectorAll(".bouton__thematique");

boutonsThematique.forEach((bouton) => {
  bouton.addEventListener("click", () => {
    const cible = bouton.getAttribute("data-target");
    const contenu = document.getElementById(cible);
    const estDejaOuvert = contenu && contenu.classList.contains("actif");

    document.querySelectorAll(".contenu__thematique").forEach((bloc) => {
      bloc.classList.remove("actif");
    });

    if (contenu && !estDejaOuvert) {
      contenu.classList.add("actif");
    }
  });
});

/* ---------------- écran 4 ---------------- */

ScrollTrigger.create({
  trigger: ecran4,
  start: "top 60%",
  onEnter: () => {
    bougerFusee(ecran4, 30, 20, -50);
    construireFusee(3, -180, 0);
  },
  onEnterBack: () => {
    bougerFusee(ecran4, 30, 20, -50);
  }
});

/*carrousel*/

const fenetreOeuvres = document.querySelector(".fenetre__oeuvres");
const boutonGauche = document.querySelector(".bouton__carrousel__gauche");
const boutonDroite = document.querySelector(".bouton__carrousel__droite");

function mettreAJourBoutonsCarrousel() {
  if (!fenetreOeuvres || !boutonGauche || !boutonDroite) return;

  const positionScroll = fenetreOeuvres.scrollLeft;
  const largeurVisible = fenetreOeuvres.clientWidth;
  const largeurTotale = fenetreOeuvres.scrollWidth;

  boutonGauche.classList.toggle("cache", positionScroll <= 5);
  boutonDroite.classList.toggle(
    "cache",
    positionScroll + largeurVisible >= largeurTotale - 5
  );
}

boutonDroite.addEventListener("click", () => {
  fenetreOeuvres.scrollBy({
    left: 365,
    behavior: "smooth"
  });
});

boutonGauche.addEventListener("click", () => {
  fenetreOeuvres.scrollBy({
    left: -365,
    behavior: "smooth"
  });
});

fenetreOeuvres.addEventListener("scroll", mettreAJourBoutonsCarrousel);

window.addEventListener("load", mettreAJourBoutonsCarrousel);

mettreAJourBoutonsCarrousel();

/* ---------------- écran 5 ---------------- */

ScrollTrigger.create({
  trigger: ecran5,
  start: "top 60%",
  onEnter: () => {
    bougerFusee(ecran5, 56, 50, 0);
    construireFusee(4, 180, 0);
  },
  onEnterBack: () => {
    bougerFusee(ecran5, 56, 50, 0);
  }
});

/* ---------------- écran 6 ---------------- */

if (ecranJeu) {
  ScrollTrigger.create({
    trigger: ecranJeu,
    start: "top 60%",
    onEnter: () => {
      bougerFusee(ecranJeu, 25, 80, 25);
    },
    onEnterBack: () => {
      bougerFusee(ecranJeu, 25, 80, 25);
    }
  });
}
/* ---------------- plein écran jeu ---------------- */

const boutonPleinEcran = document.querySelector("#bouton__plein__ecran");
const cadreJeu = document.querySelector(".interface__jeu");

if (boutonPleinEcran && cadreJeu) {
  boutonPleinEcran.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      cadreJeu.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });

  document.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement) {
      boutonPleinEcran.textContent = "Quitter";
    } else {
      boutonPleinEcran.textContent = "Plein écran";
    }
  });
}

/* ---------------- infos jeu ---------------- */

const texteProgressionJeu = document.querySelector("#jeu__progression");
const texteDifficulteJeu = document.querySelector("#jeu__difficulte");
const slotsFragments = document.querySelectorAll(".fragment__slot");
const iframeJeu = document.querySelector(".jeu__iframe");

function mettreAJourProgression(nombreFragments) { // ic la fonction met à jour le nombre de fragments récupérés
  if (!texteProgressionJeu) return;

  texteProgressionJeu.textContent = nombreFragments + " / 3 fragments";

  slotsFragments.forEach((slot) => {// ici je vérifie chaque case de fragment
    const numeroFragment = Number(slot.dataset.fragment);

    if (numeroFragment <= nombreFragments) {   
      slot.classList.add("fragment__slot--actif"); //ici jactive
    } else {
      slot.classList.remove("fragment__slot--actif");// ici je desactive si pas encore récupéré
    }
  });
}

function mettreAJourDifficulte(difficulte) {
  if (!texteDifficulteJeu) return;

  texteDifficulteJeu.textContent = difficulte; // ici je change le texte de la difficulté
}

window.addEventListener("message", (event) => { // ici le site ecoute si construct envoi un message
  if (iframeJeu && event.source !== iframeJeu.contentWindow) return; // verification si ca vien bien de construct

  const data = event.data;

  if (!data || data.source !== "silverRocketGame") return; // 2 securité si le message vient pas de construct on l'ignore

  if (data.type === "progression") {
    mettreAJourProgression(data.fragments);
  }

  if (data.type === "difficulte") {
    mettreAJourDifficulte(data.valeur);
  }
});

/* ---------------- écran 7 ---------------- */

ScrollTrigger.create({
  trigger: ecran6,
  start: "top 60%",
  onEnter: () => {
    bougerFusee(ecran6, 25, 50, -24);
  },
  onEnterBack: () => {
    bougerFusee(ecran6, 25, 50, -24);
  }
});

/* ---------------- resize ---------------- */

window.addEventListener("resize", () => {
  const milieuEcran = window.scrollY + window.innerHeight * 0.6;

  if (milieuEcran >= ecran6.offsetTop) {
    bougerFusee(ecran6, 25, 50, 24, 0);
  } else if (milieuEcran >= ecran5.offsetTop) {
    bougerFusee(ecran5, 56, 50, 0, 0);
  } else if (ecranJeu && milieuEcran >= ecranJeu.offsetTop) {
    bougerFusee(ecranJeu, 37, 68, -18, 0);
  } else if (milieuEcran >= ecran4.offsetTop) {
    bougerFusee(ecran4, 30, 20, -50, 0);
  } else if (milieuEcran >= ecran3.offsetTop) {
    bougerFusee(ecran3, 45, 55, 0, 0);
  } else if (milieuEcran >= ecran2.offsetTop) {
    bougerFusee(ecran2, 72, 70, 36, 0);
  } else {
    bougerFusee(ecran1, 78, 48, 18, 0);
  }

  mettreAJourBoutonsCarrousel();
  ScrollTrigger.refresh();
});
