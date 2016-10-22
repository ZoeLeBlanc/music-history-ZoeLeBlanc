"use strict";
const $ = require("jquery");
const songs = require("./songs");
var Music = {};
 let songs = [];

Music.loadFixedSongs = function(){
       $.ajax({
        url: "json/newsongs.json";
      }).done(function(songData) {
        songs = songData.songs;
        console.log(songs);
          $.ajax({
          url: "json/oldsongs.json";
        }).done(function(songData) {
          var newSongs = songData.songs;
          $.each(newSongs, function(index, song)
        {   
              songs.push(song); 
              console.log(songs);
              
          });
          printSongs(songs);
        }).fail(function(error) {
        console.log( "error" , error);
        });
      }).fail(function(error) {
      console.log( "error" , error);
      }); 
    };
Music.loadNewSongs= function() {
      $.ajax({
        url: "json/newestsongs.json";
      }).done(function(songData) {
        var newSongs = songData.songs;
        $.each(newSongs, function(index, song)
        {   
              songs.push(song); 
              printSongs(songs);
        });
      });
    };
Music.appendNewSongs= function(song, artist, album) {
      songs.push({'name':song, 'artist':artist, 'album':album});
      printSongs(songs);
    };
Music.getSongs= function() {
      return songs;
    };
Music.removeFromDOM= function(DOMId) {
      var parent = DOMId.parentNode;
      DOMId.remove();
      // parent.remove(DOMId);
    },
Music.removeFromArray= function(songId) {
      var index = songs.indexOf(songId);
          songs.splice(index, 1);
          console.log(songs); 
    }
  }

module.exports = Music;


