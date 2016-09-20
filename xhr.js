var Music = (function () {
  var songs = [];

  return {
    loadFixedSongs: function() {
      var mySongs = [ "json/newsongs.json", "json/songs.json" ];
      for (var i = 0; i < mySongs.length; i++) {
        console.log(mySongs);
        var messageLoader = new XMLHttpRequest();
        messageLoader.addEventListener("load", function() {
          var data = JSON.parse(this.responseText);
          for (var j = 0; j < data.songs.length; j++) {
            songs.push(data.songs[j]);
            printSongs(songs);
          } 
        });
        messageLoader.open("GET", mySongs[i]);
        messageLoader.send();
      }
    },
    loadNewSongs: function() {
      var messageLoader = new XMLHttpRequest();
        messageLoader.addEventListener("load", function() {
          var data = JSON.parse(this.responseText);
          for (var j = 0; j < data.songs.length; j++) {
            songs.push(data.songs[j]);
            printSongs(songs);
          } 
        });
        messageLoader.open("GET", "json/newestsongs.json");
        messageLoader.send();
    },
    appendNewSongs: function(song, artist, album) {
      songs.push({'name':song, 'artist':artist, 'album':album});
      printSongs(songs);
    },
    getSongs: function() {
      return songs;
    },
    removeFromDOM: function(DOMId) {
      var parent = DOMId.parentNode;
      parent.removeChild(DOMId);
    },
    removeFromArray: function(songId) {
      var index = songs.indexOf(songId);
          songs.splice(index, 1); 
    }
  }

})();


