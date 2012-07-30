//If the database is empty on server start, create some sample
Meteor.startup(function(){

	if (Artists.find().count() === 0) {
		var data = [
			{
				artist: "Orelsan",
				name: "Le chant des sirènes",
				songs: ["Raelsan",
				"Le chant des sirènes",
				"Plus rien ne m'étonne",
				"Mauvaise idée",
				"Double vie",
				"Finir Mal",
				"Si seul",
				"Des trous dans les tête",
				"La petite marchande de clés",
				"La terre est ronde",
				"1990",
				"2010",
				"La morale",
				"Ils sont cools",
				"Suicide social",
				"Elle viendra quant même"]
			},
			{
				artist: "The xx",
				name: "xx",
				songs: ["Intro",
				"VCR",
				"Crystalised",
				"Islands",
				"Heard skipped at beat",
				"Fantasy",
				"Shelter",
				"Basic space",
				"Infinity",
				"Night time",
				"Stars"]
			}
		];
		
		//var timestamp = (new Date()).getTime();

		// var artist_id = Artists.insert({name: data[0].artist});
		// var album_id = Albums.insert({artist_id: artist_id, name: data[0].name});

	 	// for (var j = 0; j < data[0].songs.length; j++) {
	 	//			var info = data[0].songs[j];
	 	//     		Songs.insert({album_id: album_id, title: info});
	 	//    }

	    for (var i = 0; i < data.length; i++) {
	       	//Create the Artists
	    	var artist_id = Artists.insert({name: data[i].artist});

	    	//Create the album
	    	var album_id = Albums.insert({artist_id: artist_id, name: data[i].name});


	    	//Add the songs for the albums
	    	for (var j = 0; j < data[i].songs.length; j++) {
	    		var info = data[i].songs[j];
	    		Songs.insert({album_id: album_id, title: info, track: j});
	        }
	    }
	}
});
