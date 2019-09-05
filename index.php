<!DOCTYPE html>
<html>
<head>
	<title>Infos Vélocité en temps réel - Vélo Mulhouse</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="css/styles.css" />
</head>

<body>
	<header>
		<img src="img/logo.png" />
	</header>

	<main>
		<h1>Stations</h1>

		<img id="liste-haut" src="img/arrow.png" />

		<div id="liste-stations">
			<?php for($i = 1; $i < 14; $i++){ ?>
			<div class="station" <?php echo 'id="station-'.$i.'"'; ?>>
				<img src="img/picto-station.png" />
				<h2>Place de la République</h2>
				<div class="arceaux">
					<p><span class="arceaux-compteur">5</span> arceaux</p>
				</div>
				<div class="velos">
					<p><span class="velos-compteur">9</span> vélos</p>
				</div>
			</div>
			<?php } ?>
		</div>

		<img id="liste-bas" src="img/arrow.png" />

		<p id="last-update">Dernière mise à jour : il y a 1 minute</p>

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
	</main>
</body>
</html>