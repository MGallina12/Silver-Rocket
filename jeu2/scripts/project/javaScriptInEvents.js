

const scriptsInEvents = {

	async Accueil_Event6(runtime, localVars)
	{
		window.parent.postMessage({
		  source: "silverRocketGame",
		  type: "difficulte",
		  valeur: "Facile"
		}, "*");
		alert('facile')
		
	},

	async Accueil_Event8(runtime, localVars)
	{
		window.parent.postMessage({
		  source: "silverRocketGame",
		  type: "difficulte",
		  valeur: "Moyen"
		}, "*");
	},

	async Accueil_Event10(runtime, localVars)
	{
		window.parent.postMessage({
		  source: "silverRocketGame",
		  type: "difficulte",
		  valeur: "Difficile"
		}, "*");
		
	},

	async Accueil_Event12(runtime, localVars)
	{
		window.parent.postMessage({
		  source: "silverRocketGame",
		  type: "difficulte",
		  valeur: "Facile"
		}, "*");
		
	},

	async Accueil_Event14(runtime, localVars)
	{
		window.parent.postMessage({
		  source: "silverRocketGame",
		  type: "difficulte",
		  valeur: "Moyen"
		}, "*");
	},

	async Accueil_Event16(runtime, localVars)
	{
		window.parent.postMessage({
		  source: "silverRocketGame",
		  type: "difficulte",
		  valeur: "Difficile"
		}, "*");
		
	},

	async Accueil_Event17(runtime, localVars)
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
