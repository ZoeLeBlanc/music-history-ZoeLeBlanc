//var listLink = $("#link-list");
var listView = $("#list-view");
var addView = $("#add-view");
var listViewAnchor = $("#list-view-anchor");
var addViewAnchor = $("#add-view-anchor");

listView.click(function(event) {
  event.preventDefault();
 // homeView.classList.add("hidden");
  addViewAnchor.removeClass("visible");
  addViewAnchor.addClass("hidden");

  listViewAnchor.removeClass("hidden");
  listViewAnchor.addClass("visible");
  
});

//var addLink = $("#link-add");


addView.click(function(event) {
  listViewAnchor.removeClass("visible");
  listViewAnchor.addClass("hidden");
  addViewAnchor.removeClass("hidden");
  addViewAnchor.addClass("visible");
});