console.log("client.js is working...");

$(function(){
  $.get('/frameworks', appendToList);

  function appendToList(frameworks) {
    var list = [];
    for(var i in frameworks) {
      list.push($('<li>', { text: frameworks[i] }));
    }
    $('.frameworks-list').append(list);
    console.log(list);
  }
});

console.log("Frameworks should have worked.");