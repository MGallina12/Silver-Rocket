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

/* ---------------- constante ---------------- */

const page = document.querySelector(".page");
const fusee = document.querySelector(".fusee__parcours");

const ecran1 = document.querySelector("#ecran__1");
const ecran2 = document.querySelector("#ecran__2");
const ecran3 = document.querySelector("#ecran__3");
const ecran4 = document.querySelector("#ecran__4");
const ecran5 = document.querySelector("#ecran__5");
const ecran6 = document.querySelector("#ecran__6");

const elementsFusee = document.querySelectorAll(".interaction__fusee");

/* ---------------- position fusee ---------------- */

let positionFuseeActuelle = {
  ecran: ecran1,
  x: 88,
  y: 38,
  rotation: 18
};

/* position de base de la fusée */
gsap.set(fusee, {
  xPercent: -50,
  yPercent: -50
});

/* ---------------- fonction bouger fusee ---------------- */

function bougerFusee(ecran, positionX, positionY, rotation, duree = 1) {
  const x = page.clientWidth * (positionX / 100);
  const y = ecran.offsetTop + (ecran.offsetHeight * (positionY / 100));

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

/* bouge la fusée */

elementsFusee.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    mettreFuseeSousBouton(element);
  });

  element.addEventListener("mouseleave", () => {
    remettreFuseeAPlace();
  });
});

/* ---------------- hover bouton fusée ---------------- */

function mettreFuseeSousBouton(bouton) {
  // récupère la position et la taille du bouton dans la fenêtre pour pouvoir placer la fusée juste en dessous au moment du hover
  const rectBouton = bouton.getBoundingClientRect();
  const rectPage = page.getBoundingClientRect();

  const x = rectBouton.left - rectPage.left + (rectBouton.width / 2);
  const y = rectBouton.bottom - rectPage.top + 210;

  gsap.to(fusee, {
    left: x,
    top: y,
    rotation: 0,
    duration: 0.45,
    ease: "power2.out"
  });
}

function remettreFuseeAPlace() {
  bougerFusee(
    positionFuseeActuelle.ecran,
    positionFuseeActuelle.x,
    positionFuseeActuelle.y,
    positionFuseeActuelle.rotation,
    0.6
  );
}

/* ---------------- position de départ ---------------- */

window.addEventListener("load", () => {
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
  },
  onEnterBack: () => {
    bougerFusee(ecran3, 45, 55, 0);
  }
});

/* ---------------- accordéon écran 3 ---------------- */

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
    bougerFusee(ecran4, 30, 34, -50);
  },
  onEnterBack: () => {
    bougerFusee(ecran4, 30, 34, -50);
  }
});

/* carrousel */

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
    bougerFusee(ecran5, 56, 50, 0);
  },
  onEnterBack: () => {
    bougerFusee(ecran5, 56, 50, 0);
  }
});

/* ---------------- écran 6 ---------------- */

ScrollTrigger.create({
  trigger: ecran6,
  start: "top 60%",
  onEnter: () => {
    bougerFusee(ecran6, 25, 50, 24);
  },
  onEnterBack: () => {
    bougerFusee(ecran6, 25, 50, 24);
  }
});

/* ---------------- remettre la fusée à la bonne place ---------------- */

window.addEventListener("resize", () => {
  const milieuEcran = window.scrollY + (window.innerHeight * 0.6);

  if (milieuEcran >= ecran6.offsetTop) {
    bougerFusee(ecran6, 25, 50, 24, 0);
  } else if (milieuEcran >= ecran5.offsetTop) {
    bougerFusee(ecran5, 56, 50, 0, 0);
  } else if (milieuEcran >= ecran4.offsetTop) {
    bougerFusee(ecran4, 30, 34, -50, 0);
  } else if (milieuEcran >= ecran3.offsetTop) {
    bougerFusee(ecran3, 26, 55, -14, 0);
  } else if (milieuEcran >= ecran2.offsetTop) {
    bougerFusee(ecran2, 72, 76, 36, 0);
  } else {
    bougerFusee(ecran1, 78, 48, 18, 0);
  }

  ScrollTrigger.refresh();
});