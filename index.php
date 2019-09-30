<!DOCTYPE html>
<html>
<head>
	<title>Infos Vélocité en temps réel - Vélo Mulhouse</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="css/styles.css" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" >
	<script type="text/javascript" src="scripts/dark-mode.js"></script>
</head>

<body>
	<header>
		<img src="img/logo_small.png" />
	</header>

	<main>
		<p id="dark-mode-switcher">Dark mode</p>

		<h1>Stations</h1>

		<div id="liste-haut-out"><img id="liste-haut" class="liste-fleche" src="img/arrow.png" /></div>

		<div id="liste-stations">
			<?php for($i = 1; $i <= 12; $i++){ ?>
			<div class="station" <?php echo 'id="station-'.$i.'"'; ?>>
				<img src="img/picto-station.png" />
				<div class="station-infos">
					<h2>Place de la République</h2>
					<div class="station-dispo">
						<div class="arceaux">
							<p><span class="arceaux-compteur">5</span> arceaux</p>
						</div>
						<div class="velos">
							<p><span class="velos-compteur">9</span> vélos</p>
						</div>
					</div>
				</div>
			</div>
			<?php } ?>
		</div>

		<div id="liste-bas-out"><img id="liste-bas" class="liste-fleche" src="img/arrow.png" /></div>

		<p id="last-update">Dernière mise à jour : il y a 1 minute</p>
	</main>

	<nav>
		<ul>
			<li id="carte">
				<img src="img/picto-map.png" />
				<p>Carte</p>
			</li>
			<li id="liste">
				<img src="img/picto-liste.png" />
				<p>Liste</p>
			</li>
			<li id="favoris">
				<img src="img/picto-favoris.png" />
				<p>Favoris</p>
			</li>
		</ul>
	</nav>
</body>
</html>