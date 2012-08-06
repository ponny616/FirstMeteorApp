// Client-side Javascript

// Define Minimongo collections (match server/publish.js)
Artists = new Meteor.Collection("artists");
Albums = new Meteor.Collection("albums");
Songs = new Meteor.Collection("songs");


// Sets session options
// e.g : Session.set('artist_id', null);
Session.set('selected_artist', null);
Session.set('selected_album', null);
Session.set('selected_song', null);


// // Subscribe to 'artists' collection on startup
// Meteor.subscribe("artists", function() {
// 	if(!Session.get('artist_id')){
// 		var artist_list = Artists.findOne({}, {sort: {name: 1}});
// 		if (artist_list){
// 			Router.setList(artist_id._id)
// 		}
// 	}
// });

// Always be subscribed to the Album for the selected Artist
//	-- add/delete/update case ?
// Meteor.autosubscribe(function () {
// 	var artist_id = Session.get('selected_artist');
// 	if (artist_id){
// 		Meteor.subscribe('albums', artist_id);
// 	}
// });

// // //Always be subscribed to the Song for the selected Album
// Meteor.autosubscribe(function () {
// 	var album_id = Session.get('album_id');
// 	if (album_id){
// 		Meteor.subscribe('songs', album_id);
// 	}
// });




//////////////////////////////////////////////////
// Helpers for in-place editing

/////////////////////  Template wrapper  /////////////////////////////

Template.wrapper.events = {
	'click .reset': function () {
		Session.set("selected_artist", null);
		Session.set("selected_album", null);
		Session.set("selected_song", null);
	}
};


/////////////////////  Artists  /////////////////////////////

Template.artists.artists = function() {
	return Artists.find({}, {sort: {name: 1}});
};

Template.artists.count = function () {
	return Artists.find().count();
}

Template.artists.albumlist = function(artist_id){
	albums = Albums.find({artist_id: artist_id});
	if(albums.count() === 0) {
		return false;
	}
	return albums;
};


// Template.artists.events = {
// 	'click': function () = {
// 		Session.set("selected_artist", null);
// 		Session.set("selected_album", null);
// 		Session.set("selected_song", null);
// 	}
// };

// Template.artist_item.selected = function() {
// 	return Session.equals('selected_artist', this._id) ? 'selected' : '';
// };

Template.album_item.songlist = function(album_id){
	songs = Songs.find({album_id: album_id});
	if(songs.count() === 0){
		return false;
	}
	return songs;
}


Template.artist_item.events = {
	'click': function () {
		Session.set("selected_artist", this._id);
		Session.set("selected_album", null);
		Session.set("selected_song", null);
	}
};



//-> events&function on these artists object (selection, )

/////////////////////  Albums  /////////////////////////////
//Display the correct album depending on the selected artist
// Template.albums.albums = function() {
// 	var artist_id = Session.get("selected_artist");
// 	if(!artist_id){
// 		return Albums.find({}, {sort: {artist_id: 1, name: 2}});
// 	}else{
// 		return Albums.find({artist_id: artist_id}, {sort: {name: 1}});
// 	}
// };

// Template.albums.count = function () {
// 	var artist_id = Session.get("selected_artist");
// 	if(!artist_id){
// 		return Albums.find().count();
// 	}else{
// 		return Albums.find({artist_id: artist_id}).count();
// 	}
// }

// Template.albums.selected = function() {
// 	return Session.equals('album_id', this._id) ? 'selected' : '';
// };


// Template.album_item.selected = function() {
// 	return Session.equals('selected_album', this._id) ? 'selected' : '';
// };


// //When album selected, we auto select the correspondent artist
// Template.album_item.events = {
// 	'click': function () {
// 		Session.set("selected_album", this._id);
// 		Session.set("selected_artist", this.artist_id);
// 	}
// };


// /////////////////////////  Songs  /////////////////////////////
// // If selected_album, we display the correspondent songs
// // If selected artist, we display the correspondent songs 
// //
// Template.songs.songs = function() {
// 	var album_id = Session.get("selected_album");
// 	var artist_id = Session.get("selected_artist");

// 	if (!artist_id && !album_id){
// 		return Songs.find({}, {sort: {album_id: 1, track: 2}});
// 	}else if(artist_id && !album_id) {//we fetch the correspondent albums
// 		// var albums = Albums.find({artist_id: artist_id}, {fields: {_id: 1}}).fetch();//array of Ids FETCH & FIELDS DOESN4T WORK
// 		var albums = Albums.find({artist_id: artist_id});
// 		var albums_ids = [];
// 		var i = 0;
// 		albums.forEach(function (album){
// 			albums_ids.push(album._id);
// 		});
// 		return Songs.find({album_id: {$in: albums_ids}}, {sort: {album_id: 1, track: 2}});
// 	}else if(artist_id && album_id){
// 		return Songs.find({album_id: album_id}, {sort: {track: 1}});
// 	}
// };

// Template.songs.count = function () {
// 	var album_id = Session.get("selected_album");
// 	var artist_id = Session.get("selected_artist");

// 	if (!artist_id && !album_id){
// 		return Songs.find().count();
// 	}else if(artist_id && !album_id) {//we fetch the correspondent albums
// 		// var albums = Albums.find({artist_id: artist_id}, {fields: {_id: 1}}).fetch();//array of Ids FETCH & FIELDS DOESN4T WORK
// 		var albums = Albums.find({artist_id: artist_id});
// 		var albums_ids = [];
// 		var i = 0;
// 		albums.forEach(function (album){
// 			albums_ids.push(album._id);
// 		});
// 		return Songs.find({album_id: {$in: albums_ids}}).count();
// 	}else if(artist_id && album_id){
// 		return Songs.find({album_id: album_id}).count();
// 	}
// }

// //Click on a song => selection of the correspondent artist/album
// Template.song_item.events = {
// 	'click': function () {
// 		Session.set("selected_song", this._id);
// 		Session.set("selected_album", this.album_id);

// 		var album = Albums.findOne({_id: this.album_id});
// 		Session.set("selected_artist", album.artist_id);

// 	}
// };

// Template.song_item.selected = function() {
// 	return Session.equals('selected_song', this._id) ? 'selected' : '';
// };