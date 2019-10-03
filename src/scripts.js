document.addEventListener("DOMContentLoaded", async function(event) {
	// Dark mode
	document.getElementById("dark-mode-switcher").addEventListener("click", toggleDarkMode, false);
	const mainHtml = document.documentElement;

	function toggleDarkMode(){
		if(mainHtml.hasAttribute("dark-mode")) {
			mainHtml.removeAttribute("dark-mode");

			Array.from(document.getElementsByClassName('liste-fleche')).forEach(e=>{
				e.setAttribute("src", "img/arrow.png");
			})

			Array.from(document.getElementsByClassName('picto-station')).forEach(e=>{
				e.setAttribute("src", "img/picto-station.png");
			})
		}

		else {
			mainHtml.setAttribute('dark-mode', 'true');

			Array.from(document.getElementsByClassName('liste-fleche')).forEach(e=>{
				e.setAttribute("src", "img/dark-mode/arrow.png");
			})

			Array.from(document.getElementsByClassName('picto-station')).forEach(e=>{
				e.setAttribute("src", "img/dark-mode/picto-station.png");
			})
		}
	}

	var etatStations;
	if(navigator.onLine) {
    	etatStations = await callAPI();
    	localStorage.setItem('etatStations', JSON.stringify(etatStations));
    	document.getElementById("last-update").innerHTML = "Données mises à jour en temps réel";
    	console.log("Call API réussi, résultat :");
    }
    else {
    	etatStations = localStorage.getItem('etatStations');
    	etatStations = JSON.parse(etatStations);
    	document.getElementById("last-update").innerHTML = "Vous êtes hors ligne : affichage des données en cache";
    	console.log("Appareil hors ligne, affichage des données en cache :");
    }

    console.log(etatStations);

    let station = etatStations.records[0].fields;

    for(var i=0;i<12;i++){
    	let station = etatStations.records[i].fields;
    	let stationName = setStationName(station.name);
    	let stationAvailableBikeStands = station.available_bike_stands;
    	let stationAvailableBikes = station.available_bikes;

    	insertInHTML(i+1,stationName,stationAvailableBikeStands,stationAvailableBikes);
    }

    function setStationName(rawName) {
    	let nomStation = rawName.split("-")[1].trim();
		// On ne garde que le nom de la station et on trim car l'une des stations a un espace en trop

    	let nomStation_words = nomStation.split(" ");

    	// Traitement du nom de la station pour les majuscules et minuscules
    	let noTransformWordList = ['DE','LA','DU','DES'];
    	for(var j=0;j<nomStation_words.length;j++){
    		if(noTransformWordList.includes(nomStation_words[j])){
    			nomStation_words[j] = nomStation_words[j].toLowerCase();
    		}
    		else {
    			// Traitement des mots qui ne sont pas dans l'array ci-dessus, en f° de s'ils ont une apostrophe (donc si le mot commence par l') ou non
	    		if(nomStation_words[j][1] == "'") {
	    			nomStation_words[j] = nomStation_words[j].toLowerCase();
	    			nomStation_words[j] = nomStation_words[j][0] + nomStation_words[j][1] + nomStation_words[j][2].toUpperCase() + nomStation_words[j].slice(3);
	    		}
	    		else {
	    			nomStation_words[j] = nomStation_words[j][0] + nomStation_words[j].slice(1).toLowerCase();
	    		}
    		}
    	}
    	nomStation = nomStation_words.join(' ');

    	return nomStation;
    }

    function insertInHTML(stationId,stationName,stationAvailableBikeStands,stationAvailableBikes) {
    	console.log(stationId);
    	let stationDiv = document.getElementById("station-"+stationId);
    	stationDiv.getElementsByTagName("h2")[0].innerHTML = stationName;
    	stationDiv.getElementsByClassName("arceaux-compteur")[0].innerHTML = stationAvailableBikeStands;
		stationDiv.getElementsByClassName("velos-compteur")[0].innerHTML = stationAvailableBikes;
    }
})

/* Fonction qui appelle l'API */
async function callAPI(){
    let rawEtatStations = await fetch('https://data.mulhouse-alsace.fr/api/records/1.0/search/?dataset=68224_stationsvelocite_jcdecaux_tempsreel&rows=40&sort=-number&facet=status&facet=contract_name&facet=name&timezone=Europe%2FBerlin');
    return await rawEtatStations.json();
}