

const scriptsInEvents = {

	async Accueil_Event7(runtime, localVars)
	{
		window.parent.postMessage({
		  source: "silverRocketGame",
		  type: "difficulte",
		  valeur: "Facile"
		}, "*");
		
	},

	async Accueil_Event9(runtime, localVars)
	{
		window.parent.postMessage({
		  source: "silverRocketGame",
		  type: "difficulte",
		  valeur: "Moyen"
		}, "*");
	},

	async Accueil_Event11(runtime, localVars)
	{
		window.parent.postMessage({
		  source: "silverRocketGame",
		  type: "difficulte",
		  valeur: "Difficile"
		}, "*");
		
	},

	async Accueil_Event13(runtime, localVars)
	{
		window.parent.postMessage({
		  source: "silverRocketGame",
		  type: "difficulte",
		  valeur: "Facile"
		}, "*");
		
	},

	async Accueil_Event15(runtime, localVars)
	{
		window.parent.postMessage({
		  source: "silverRocketGame",
		  type: "difficulte",
		  valeur: "Moyen"
		}, "*");
	},

	async Accueil_Event17(runtime, localVars)
	{
		window.parent.postMessage({
		  source: "silverRocketGame",
		  type: "difficulte",
		  valeur: "Difficile"
		}, "*");
		
	},

	async FinJeu2_Event11(runtime, localVars)
	{
		window.parent.postMessage({
		  source: "silverRocketGame",
		  type: "progression",
		  fragments: 2
		}, "*");
	},

	async FinJeu1_Event11(runtime, localVars)
	{
		window.parent.postMessage({
		  source: "silverRocketGame",
		  type: "progression",
		  fragments: 1
		}, "*");
	},

	async Accueil_Event1(runtime, localVars)
	{
		window.parent.postMessage({
		  source: "silverRocketGame",
		  type: "progression",
		  fragments: 0
		}, "*");
		
		window.parent.postMessage({
		  source: "silverRocketGame",
		  type: "difficulte",
		  valeur: "Non choisie"
		}, "*");
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
