(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
const bongs = require("./bongs");
const handler = require("./handler");
var Music = {};
var songsList = [];
var mainContent = $("#mainContent");

$.ajax({
    url: "json/newsongs.json"
  }).done(function(songData) {
     songsList = songData.songs;
        // console.log(songsList);
      $.ajax({
          url: "json/oldsongs.json"
        }).done(function(songData) {
          var newSongs = songData.songs;
          $.each(newSongs, function(index, song)
        {   
              songsList.push(song); 
              console.log(songsList);
              
          });
          Music.printSongs();
        }).fail(function(error) {
        console.log( "error" , error);
        });
      }).fail(function(error) {
      console.log( "error" , error);
}); 
    
Music.loadNewSongs= function() {
      $.ajax({
        url: "json/newestsongs.json"
      }).done(function(songData) {
        var newSongs = songData.songs;
        $.each(newSongs, function(index, song)
        {   
              songsList.push(song); 
              Music.printSongs();
        });
      });
    };
Music.appendNewSongs= function(song, artist, album) {
      songsList.push({'name':song, 'artist':artist, 'album':album});
      Music.printSongs();
    };
Music.getSongs= function() {
      return songsList;
    };
Music.removeFromDOM= function(DOMId) {
      var parent = DOMId.parentNode;
      DOMId.remove();
      // parent.remove(DOMId);
    };
Music.removeFromArray= function(songId) {
      var index = songsList.indexOf(songId);
          songsList.splice(index, 1);
          console.log(songsList); 
    };
Music.printSongs = function(){
  let listOfSongs = songsList;
  mainContent.html("");
  mainContent.append(`<ul>`);
  $.each(listOfSongs, (key, song) =>{
    mainContent.append(`<li id=${key}>${song.name} by ${song.artist} on ${song.album}<button id=delete-button>Delete</button></div></li>`);
  });
  mainContent.append(`</ul>`);
  mainContent.append(`<button id="moreMusic">More ></button>`);
};
module.exports = {
  Music: Music,
  songsList: songsList
};



},{"./bongs":2,"./handler":3}],2:[function(require,module,exports){
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


},{"./axhr":1}],3:[function(require,module,exports){
"use strict";

//Get views
var listView = $("#list-view");
var addView = $("#add-view");
var listViewAnchor = $("#list-view-anchor");
var addViewAnchor = $("#add-view-anchor");
//Get clicks
listView.click((event)=>{
  event.preventDefault();
  addViewAnchor.removeClass("visible");
  addViewAnchor.addClass("hidden");

  listViewAnchor.removeClass("hidden");
  listViewAnchor.addClass("visible");
  
});
addView.click((event) => {
  listViewAnchor.removeClass("visible");
  listViewAnchor.addClass("hidden");
  addViewAnchor.removeClass("hidden");
  addViewAnchor.addClass("visible");
});


},{}]},{},[2]);
