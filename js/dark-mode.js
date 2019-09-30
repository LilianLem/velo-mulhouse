document.addEventListener("DOMContentLoaded", function(event) {
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
})