//var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");
var addView = document.getElementById("add-view");
var listViewAnchor = document.getElementById("list-view-anchor");
var addViewAnchor = document.getElementById("add-view-anchor");

listView.addEventListener("click", function(event) {
	console.log(event.target);
  event.preventDefault();
 // homeView.classList.add("hidden");
  addViewAnchor.classList.remove("visible");
  addViewAnchor.classList.add("hidden");

  listViewAnchor.classList.remove("hidden");
  listViewAnchor.classList.add("visible");
  
});

//var addLink = document.getElementById("link-add");


addView.addEventListener("click", function() {
	console.log(event.target);
  //homeView.classList.add("hidden");
  listViewAnchor.classList.remove("visible");
  listViewAnchor.classList.add("hidden");
  addViewAnchor.classList.remove("hidden");
  addViewAnchor.classList.add("visible");
  
	var userSong = document.getElementById("user-song");
	var userArtist = document.getElementById("user-artist");
	var userAlbum = document.getElementById("user-album");
userSong.value = "";
userArtist.value = "";
userAlbum.value = "";
});