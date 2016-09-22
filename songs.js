//XHR
Music.loadFixedSongs();
//Get elements
var mainContent = $("#mainContent");
var addMusicBtn = $("#addMusic");
var listMusicBtn = $("#list-view");
var deleteBtn = $("#delete-button");
var moreBtn = $("#moreMusic");
//Get user input
var userSong = $("#user-song");
var userArtist = $("#user-artist");
var userAlbum = $("#user-album");
//Push to DOM
function printSongs(listOfSongs){
	mainContent.html("");
	mainContent.append(`<ul>`);
	$.each(listOfSongs, (key, song) =>{
		mainContent.append(`<li id=${key}>${song.name} by ${song.artist} on ${song.album}<button id=delete-button>Delete</button></div></li>`);
		// console.log("each", song);
	});
	mainContent.append(`</ul>`);
	mainContent.append(`<button id="moreMusic">More ></button>`);
};
//Event Listeners
addMusicBtn.click(function(event){
	// if (userSong.val("")){
	// 	console.log(userSong.val());
	// 	alert("Enter a song.");
	// } else if (userArtist.val("")){
	// 	alert("Enter an Artist.");
	// } else if (userAlbum.val("")){
	// 	alert ("Enter an Album.");
	// } else {
		Music.appendNewSongs(userSong.val(), userArtist.val(), userAlbum.val());	
	// }
});
$("#userAlbum").keypress(function(event){
	if (event.keyCode == 13){
		Music.appendNewSongs(userSong.value, userArtist.value, userAlbum.value);
	}
});
$("#listMusicBtn").click(function(event){
	Music.getSongs();
});
$(document).on("click", "#delete-button", function(event) {
	var elementToDelete = event.target.parentNode;
    Music.removeFromDOM(elementToDelete);
    var idToDelete = event.target.parentNode.id;
    Music.removeFromArray(idToDelete);
});
var counter = 0;
$(document).on("click", "#moreMusic", function(event) {
	
	console.log(counter);
	
	
	if (counter <= 1){
		Music.loadNewSongs();
		counter++;	
		console.log(counter);
	} else {
		Music.getSongs();
		counter++;
	}
});

