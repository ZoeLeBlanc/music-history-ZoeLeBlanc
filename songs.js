//Get XHR
Music.loadFixedSongs();
//Get element
var mainContent = document.getElementById("mainContent");
var addMusicBtn = document.getElementById("addMusic");
var listMusicBtn = document.getElementById("list-view");
var deleteBtn = document.getElementById("delete-button")
//Get user input
var userSong = document.getElementById("user-song");
var userArtist = document.getElementById("user-artist");
var userAlbum = document.getElementById("user-album");
//Push to DOM
function printSongs(listOfSongs){
	mainContent.innerHTML = "";	
	for (var i = listOfSongs.length-1; i>=0; i--) {
		mainContent.innerHTML += `<li id=${i}>${listOfSongs[i].name} by ${listOfSongs[i].artist} on ${listOfSongs[i].album}<button id=delete-button>Delete</button></div></li>`;
	}
};
//Event Listeners
addMusicBtn.addEventListener("click", function(event){
	Music.appendNewSongs(userSong.value, userArtist.value, userAlbum.value)
});
userAlbum.addEventListener("keypress", function(event){
	if (event.keyCode == 13){
		Music.appendNewSongs(userSong.value, userArtist.value, userAlbum.value);
	}
});
listMusicBtn.addEventListener("click", function(event){
	Music.getSongs();
});
document.querySelector("body").addEventListener("click", function(event) {
	if (event.target.id === "delete-button"){
		 var elementToDelete = event.target.parentNode;
    Music.removeFromDOM(elementToDelete);
    var idToDelete = event.target.parentNode.id;
    Music.removeFromArray(idToDelete);
	}
	
});
