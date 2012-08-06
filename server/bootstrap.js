//If the database is empty on server start, create some sample
Meteor.startup(function(){

	if (Artists.find().count() === 0) {
		var data = [
			{
				artist: "Orelsan",
				albums: [{
					name: "Le chant des sirènes",
					songs: [
						["Raelsan",  "Raelsan.mp3"],
						["Le chant des sirènes", "Le Chant Des Sirènes.mp3"],
						["Plus rien ne m'étonne", "Plus Rien Ne M_étonne.mp3"],
						["Mauvaise idée", "Mauvaise Idée.mp3"],
						["Double vie", "Double Vie.mp3"],
						["Finir Mal", "Finir Mal.mp3"],
						["Si seul", "Si Seul.mp3"],				
						["Des trous dans les tête", "Des Trous Dans La Tête.mp3"],
						["La petite marchande de clés", "09 La Petite Marchande De Portes-Clefs.mp3"],
						["La terre est ronde", "La Terre Est Ronde.mp3"],
						["1990", "1990.mp3"],
						["2010", "2010.mp3"],
						["La morale", "La Morale.mp3"],
						["Ils sont cools", "Ils Sont Cools.mp3"],
						["Suicide social", "Suicide Social.mp3"],
						["Elle viendra quant même", "Elle Viendra Quand Même.mp3"]
					]
				},
				{
					name: "Perdu d'avance",
					songs: [
						["Changement",  "changement.mp3"],
						["no life", "no life.mp3"],
						["Soirée ratée", "Soirée ratée.mp3"],
						["Différent", "Mauvaise Idée.mp3"],
						["Peur de l'échec", "Peur de l'échec.mp3"]
					]
				}]
			},
			{
				artist: "The xx",
				albums: [{
					name: "xx",
					songs: [
							["Intro", "Intro.mp3"],
							["VCR", "Vcr.mp3"],
							["Crystalised", "Crystalised.mp3"],
							["Islands", "Islands.mp3"],
							["Heard skipped at beat", "Heart Skipped A Beat.mp3"],
							["Fantasy", "Fantasy.mp3"],
							["Shelter", "Shelter.mp3"],
							["Basic space", "Basic Space.mp3"],
							["Infinity", "Infinity.mp3"],
							["Night time", "Night Time.mp3"],
							["Stars", "Stars.mp3"]
						]
				},{
					name: "Angels",
					songs: [
							["Angels", "Angels.mp3"]
						]

				}]
			}
		];
		

	    for (var i = 0; i < data.length; i++) {
	       	//Create the Artists
	    	var artist_id = Artists.insert({name: data[i].artist});

	    	//Create the album
	    	for (var a=0; a<data[i].albums.length; a++){
	    		var album_id = Albums.insert({artist_id: artist_id, name: data[i].albums[a].name});

		    	//Add the songs for the albums
		    	for (var j = 0; j < data[i].albums[a].songs.length; j++) {
		    		var info = data[i].albums[a].songs[j];
		    		Songs.insert({album_id: album_id, title: info[0], track: j, path: info[1]});
		        }
	        }
	    }

	}//end if
});
