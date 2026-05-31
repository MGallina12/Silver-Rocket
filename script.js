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

function bougerFusee(ecran, selecteurTexte, decalageX, decalageY, rotation, duree = 1) {
  const blocTexte = ecran.querySelector(selecteurTexte);
  const rectTexte = blocTexte.getBoundingClientRect();
  const rectPage = page.getBoundingClientRect();

  const x = rectTexte.left - rectPage.left + rectTexte.width / 2 + decalageX;
  const y = rectTexte.top - rectPage.top + rectTexte.height / 2 + decalageY;

  positionFuseeActuelle = {
    ecran: ecran,
    selecteurTexte: selecteurTexte,
    decalageX: decalageX,
    decalageY: decalageY,
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
    bougerFusee(ecran1, ".contenu__texte", 500, 0, 18);
  },
  onEnterBack: () => {
    bougerFusee(ecran1, ".contenu__texte",500, 0, 18);
  }
});

/* ---------------- écran 2 ---------------- */

ScrollTrigger.create({
  trigger: ecran2,
  start: "top 60%",
  onEnter: () => {
    bougerFusee(ecran2, ".contenu__texte",20, 250, 36);
    construireFusee(1, 0, -180);
  },
  onEnterBack: () => {
    bougerFusee(ecran2, ".contenu__texte",20, 250, 36);
  }
});

/* ---------------- écran 3 ---------------- */

ScrollTrigger.create({
  trigger: ecran3,
  start: "top 60%",
  onEnter: () => {
    bougerFusee(ecran3, ".contenu__texte",280, 55, 0);
    construireFusee(2, 90, -180);
  },
  onEnterBack: () => {
    bougerFusee(ecran3, ".contenu__texte",280, 55, 0);
  }
});

/*acordéon*/

const boutonsThematique = document.querySelectorAll(".bouton__thematique");

boutonsThematique.forEach((bouton) => {
  bouton.addEventListener("click", () => {
    const cible = bouton.getAttribute("data-target");
    const contenu = document.getElementById(cible);

    document.querySelectorAll(".contenu__thematique").forEach((bloc) => {
      bloc.classList.remove("actif");
    });

    if (contenu) {
      contenu.classList.add("actif");
    }
  });
});

/* ---------------- écran 4 ---------------- */

ScrollTrigger.create({
  trigger: ecran4,
  start: "top 60%",
  onEnter: () => {
    bougerFusee(ecran4, ".contenu__texte",-600, -50, -50);
    construireFusee(3, -180, 0);
  },
  onEnterBack: () => {
    bougerFusee(ecran4, ".contenu__texte",-600, -50, -50);
  }
});

/*carrousel*/

const fenetreOeuvres = document.querySelector(".fenetre__oeuvres");
const boutonGauche = document.querySelector(".bouton__carrousel__gauche");
const boutonDroite = document.querySelector(".bouton__carrousel__droite");

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

/* ---------------- écran 5 ---------------- */

ScrollTrigger.create({
  trigger: ecran5,
  start: "top 60%",
  onEnter: () => {
    bougerFusee(ecran5, ".contenu__texte",400, 50, 0);
    construireFusee(4, 180, 0);
  },
  onEnterBack: () => {
    bougerFusee(ecran5, ".contenu__texte",400, 50, 0);
  }
});

/* ---------------- écran 6 ---------------- */

ScrollTrigger.create({
  trigger: ecran6,
  start: "top 60%",
  onEnter: () => {
    bougerFusee(ecran6, ".contenu__texte",-500, 50, 24);
  },
  onEnterBack: () => {
    bougerFusee(ecran6, ".contenu__texte",-500, 50, 24);
  }
});

/* ---------------- resize ---------------- */

window.addEventListener("resize", () => {
  const milieuEcran = window.scrollY + window.innerHeight * 0.6;

  if (milieuEcran >= ecran6.offsetTop) {
    bougerFusee(ecran6, -500, 50, 24, 0);
  } else if (milieuEcran >= ecran5.offsetTop) {
    bougerFusee(ecran5, 400, 50, 0, 0);
  } else if (milieuEcran >= ecran4.offsetTop) {
    bougerFusee(ecran4, -600, -50, -50, 0);
  } else if (milieuEcran >= ecran3.offsetTop) {
    bougerFusee(ecran3, 280, 55, 0, 0);
  } else if (milieuEcran >= ecran2.offsetTop) {
    bougerFusee(ecran2, 20, 250, 36, 0);
  } else {
    bougerFusee(ecran1, 500, 0, 18, 0);
  }

  ScrollTrigger.refresh();
});
