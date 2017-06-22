console.log("client.js is working...");

//Added unordered list items to root page.
$(function(){
  $.get('/frameworks', appendToList);

  //POST request
  $('form').on('submit', function(event) {
    event.preventDefault();
    var form = $(this);
    var frameworkData = form.serialize();

    $.ajax({
      type: 'POST',
      url: '/frameworks',
      data: frameworkData
    }).done(function(frameworkName) {
      frameworkName = frameworkName[0].toUpperCase() + frameworkName.slice(1).toLowerCase();
      appendToList([frameworkName]);
      form.trigger('reset');
    });
  });

  function appendToList(frameworks) {
    var list = [];
    for(var i in frameworks) {
      framework = frameworks[i];
      content = '<a href="/frameworks/' +framework+'">'+framework+'</a>';
      list.push($('<li>', { html: content }));
    }
    $('.frameworks-list').append(list);
    console.log(list);
  }

});

console.log("Frameworks should have worked.");