document.addEventListener("DOMContentLoaded", function(event) {
	document.getElementById("dark-mode-switcher").addEventListener("click", toggleDarkMode, false);
	const mainHtml = document.documentElement;

	function toggleDarkMode(){
		if(mainHtml.hasAttribute("dark-mode")) {
			mainHtml.removeAttribute("dark-mode");
		}

		else {
			mainHtml.setAttribute('dark-mode', 'true');
		}
	}
})