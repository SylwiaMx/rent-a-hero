$(".info").on("click", function() {
  var pop = $(this).data("modal");
  $(pop).show();
});

$(".popup").on("click", function(e) {
  var className = e.target.className;
  if(className === "popup" || className === "close"){
    $(this).closest(".popup").hide();
  }
});
