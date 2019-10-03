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

    let etatStations = await callAPI();
    localStorage.setItem('etatStations', JSON.stringify(etatStations));
    etatStationsCached = localStorage.getItem('etatStations');
    console.log(etatStations);
    console.log(JSON.parse(etatStationsCached));
})

/* Fonction qui appelle l'API */
async function callAPI(){
    let rawEtatStations = await fetch('https://data.mulhouse-alsace.fr/api/records/1.0/search/?dataset=68224_stationsvelocite_jcdecaux_tempsreel&rows=40&facet=status&facet=contract_name&facet=name&timezone=Europe%2FBerlin');
    return await rawEtatStations.json();
}