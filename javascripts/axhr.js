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


