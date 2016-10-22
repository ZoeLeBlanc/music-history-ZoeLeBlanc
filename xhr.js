var Music = (function () {
  var songs = [];

  return {
    loadFixedSongs: function() {
      // $.when(
      //   $.getJSON('json/newsongs.json'),
      //   $.getJSON('json/oldsongs.json')
      // ).done(function(newsongs, oldsongs) {
      //   songs = newsongs.songs;
      //   // songs.forEach( (song) => {
      //       console.log(songs);
      //   // });
      // });
       $.ajax({
        url: "json/newsongs.json"
      }).done(function(songData) {
        songs = songData.songs;
        console.log(songs);
          $.ajax({
          url: "json/oldsongs.json"
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
    },
    loadNewSongs: function() {
      $.ajax({
        url: "json/newestsongs.json"
      }).done(function(songData) {
        var newSongs = songData.songs;
        $.each(newSongs, function(index, song)
        {   
              songs.push(song); 
              printSongs(songs);
        });
      });
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
      DOMId.remove();
      // parent.remove(DOMId);
    },
    removeFromArray: function(songId) {
      var index = songs.indexOf(songId);
          songs.splice(index, 1);
          console.log(songs); 
    }
  }

})();


