"use strict";

const axhr = require("./axhr");

//Get elements

var addMusicBtn = $("#addMusic");
var listMusicBtn = $("#list-view");
var deleteBtn = $("#delete-button");
var moreBtn = $("#moreMusic");
//Get user input
var userSong = $("#user-song");
var userArtist = $("#user-artist");
var userAlbum = $("#user-album");
//Push to DOM


//Event Listeners
addMusicBtn.click(function(event){
	if (userSong.val()===""){
		console.log(userSong.val());
		alert("Enter a song.");
	} else if (userArtist.val()===""){
		alert("Enter an Artist.");
	} else if (userAlbum.val()===""){
		alert ("Enter an Album.");
	} else {
		axhr.Music.appendNewSongs(userSong.val(), userArtist.val(), userAlbum.val());
		userSong.val("");
		userArtist.val("");
		userAlbum.val("");	
	}
});
userAlbum.keypress((event)=>{
	if (event.which == 13){
		axhr.Music.appendNewSongs(userSong.val(), userArtist.val(), userAlbum.val());
	}
});
listMusicBtn.click((event)=>{
	axhr.Music.getSongs();
});
$(document).on("click", "#delete-button", (event)=> {
	var elementToDelete = event.target.parentNode;
    axhr.Music.removeFromDOM(elementToDelete);
    var idToDelete = event.target.parentNode.id;
    axhr.Music.removeFromArray(idToDelete);
});
var counter = 0;
$(document).on("click", "#moreMusic", (event)=> {	
	if (counter < 1){
		axhr.Music.loadNewSongs();
		counter++;	
	} else {
		axhr.Music.getSongs();
		counter++;
	}
});

