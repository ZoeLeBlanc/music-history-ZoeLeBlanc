"use strict";
const $ = require("jquery");
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

