//////////////////////////////////////////////////
//Artist -- {name: String}
Artists = new Meteor.Collection("artists");

Meteor.publish("artists", function () {
	return Artists.find();
});

//////////////////////////////////////////////////
//Albums -- {name: String,
//			artist_id: id}
Albums = new Meteor.Collection("albums");

//Publish complete set of albums to all clients
Meteor.publish("albums", function () {
	return Albums.find();
});

//////////////////////////////////////////////////
//Songs -- {album_id: id
//			title: String}
Songs = new Meteor.Collection("songs");

//Publish complete set of songs to all clients
Meteor.publish("songs", function () {
	return Songs.find();
});